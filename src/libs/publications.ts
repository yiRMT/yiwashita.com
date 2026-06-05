import fs from 'fs'
import path from 'path'
import { parse } from '@retorquere/bibtex-parser'
import {
  Publication,
  PublicationAuthor,
  PublicationCategory,
  PublicationGroup,
} from '@/types/publications'

const bibDirectory = path.join(process.cwd(), 'public', 'bib')

// Each subdirectory of public/bib maps to a publication category, listed in
// display order. Drop a .bib file into one of these directories to add a paper.
const CATEGORIES: PublicationCategory[] = [
  'journal',
  'international',
  'misc',
  'domestic',
]

// Name fragments identifying the site owner, whose name is rendered in bold.
const OWN_NAME_PATTERNS = [/岩下/, /\bIwashita\b/]
const isOwnName = (name: string) =>
  OWN_NAME_PATTERNS.some((re) => re.test(name))

type Creator = { firstName?: string; lastName?: string; name?: string }

const formatAuthorName = (creator: Creator): string => {
  if (creator.name) return creator.name
  const { firstName, lastName } = creator
  if (firstName && lastName) return `${firstName} ${lastName}`
  return lastName || firstName || ''
}

const isJapanese = (text: string) => /[ぁ-んァ-ヶ一-龠]/.test(text)

const buildVenue = (type: string, fields: Record<string, string>): string => {
  const year = fields.year || ''
  if (type === 'article') {
    const parts = [fields.journal, fields.volume]
    if (fields.pages) parts.push(`pp.${fields.pages}`)
    parts.push(year)
    return parts.filter(Boolean).join(', ')
  }
  if (type === 'misc' && fields.eprint) {
    const cls = fields.primaryclass ? ` [${fields.primaryclass}]` : ''
    return `arXiv preprint arXiv:${fields.eprint}${cls}, ${year}`
  }
  // inproceedings / fallback
  const booktitle = fields.booktitle || ''
  const lead =
    booktitle && !isJapanese(booktitle) ? `In ${booktitle}` : booktitle
  return [lead, fields.publisher, year].filter(Boolean).join(', ')
}

const parseAuthors = (
  creators: Creator[],
  equalContribField: string | undefined,
): { authors: PublicationAuthor[]; equalContrib: boolean } => {
  const equalSet = new Set(
    (equalContribField || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
  )
  let equalContrib = false
  const authors = creators.map((creator) => {
    const name = formatAuthorName(creator)
    const surname = creator.lastName || name
    const starred = equalSet.has(surname)
    if (starred) equalContrib = true
    return {
      name: starred ? `${name}*` : name,
      bold: isOwnName(name),
    }
  })
  return { authors, equalContrib }
}

const readCategory = (category: PublicationCategory): Publication[] => {
  const dir = path.join(bibDirectory, category)
  if (!fs.existsSync(dir)) return []
  const fileNames = fs.readdirSync(dir).filter((f) => f.endsWith('.bib'))

  const publications: Publication[] = fileNames.map((fileName) => {
    const raw = fs.readFileSync(path.join(dir, fileName), 'utf8')
    const entry = parse(raw, { sentenceCase: false }).entries[0]
    const fields = entry.fields as unknown as Record<string, string>
    const creators = (entry.fields.author || []) as Creator[]

    const { authors, equalContrib } = parseAuthors(
      creators,
      fields.equalcontrib,
    )

    return {
      key: entry.key,
      category,
      authors,
      title: fields.title || '',
      venue: buildVenue(entry.type, fields),
      year: parseInt(fields.year || '0', 10),
      month: parseInt(fields.month || '0', 10),
      equalContrib,
      notPeerReviewed: (fields.note || '').trim() === '査読なし',
      bibPath: `/bib/${category}/${fileName}`,
      url: fields.url || undefined,
    }
  })

  // newest first; stable tie-break on the citation key
  return publications.sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year
    if (a.month !== b.month) return b.month - a.month
    return a.key < b.key ? -1 : 1
  })
}

export function getPublicationGroups(): PublicationGroup[] {
  return CATEGORIES.map((category) => ({
    category,
    publications: readCategory(category),
  })).filter((group) => group.publications.length > 0)
}
