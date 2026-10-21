import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import { Content, ContentMetadata } from '@/types/contents'

const contentsDirectory = path.join(process.cwd(), 'contents')

const LOCALES = ['ja', 'en']

// `locale` comes from the URL and reaches fs paths, so reject anything else.
const localeSuffix = (locale: string) => {
  if (!LOCALES.includes(locale)) notFound()
  return `.${locale}.md`
}

// Drafts are previewable in `pnpm dev` but never built or served in production.
const listContentFiles = (subDirectory: string) =>
  fs
    .readdirSync(path.join(contentsDirectory, subDirectory))
    .filter(
      (f) => process.env.NODE_ENV !== 'production' || !f.startsWith('draft-'),
    )

const md = new MarkdownIt({
  html: true,
  highlight: (str: string, lang: string) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        // highlight.js v11 signature: highlight(code, { language }).
        return hljs.highlight(str, { language: lang, ignoreIllegals: true })
          .value
      } catch (__) {}
    }
    return ''
  },
})
  .use(require('markdown-it-footnote'))
  // LaTeX math: `$...$` inline and `$$...$$` block, rendered to HTML at build
  // time (KaTeX). Requires katex/dist/katex.min.css (loaded in the layout).
  // Pass our katex so rendering matches the katex.min.css version; the plugin
  // otherwise renders with its own bundled katex 0.16, whose class names differ.
  .use(require('@vscode/markdown-it-katex').default, {
    katex: require('katex'),
  })

// Loads a single standalone page (e.g. the home/CV page or privacy policy)
// stored as `<subDirectory>/<id>.<locale>.md`. The page body holds the content
// (HTML is allowed for layout) but NOT its top-level heading; the page title and
// `<h1>` are derived from the frontmatter `title`. Frontmatter holds meta such as
// `title` and `description`. Returns null when the file is missing.
export async function getPageData(
  subDirectory: string,
  id: string,
  locale: string,
): Promise<{ data: { [key: string]: any }; contentHtml: string } | null> {
  const fullPath = path.join(
    contentsDirectory,
    subDirectory,
    `${id}${localeSuffix(locale)}`,
  )
  if (!fs.existsSync(fullPath)) return null
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  return {
    data: matterResult.data,
    contentHtml: md.render(matterResult.content),
  }
}

// File names are `[<YYYY-MM-DD>-]<id>.<locale>.md`; the optional date prefix
// becomes the content date.
const listContents = (subDirectory: string, locale: string) => {
  const suffix = localeSuffix(locale)
  return listContentFiles(subDirectory)
    .filter((f) => f.endsWith(suffix))
    .map((fileName) => {
      const base = fileName.slice(0, -suffix.length)
      const datePrefix = base.match(/^(\d{4}-\d{2}-\d{2})-/)
      return {
        fileName,
        id: datePrefix ? base.slice(datePrefix[0].length) : base,
        date: datePrefix?.[1],
      }
    })
}

const readMatter = (subDirectory: string, fileName: string) =>
  matter(
    fs.readFileSync(
      path.join(contentsDirectory, subDirectory, fileName),
      'utf8',
    ),
  )

const toMetadata = (
  id: string,
  data: { [key: string]: any },
  date?: string,
): ContentMetadata => ({
  id,
  title: data.title || data.name || '',
  date: date || data.date || '',
  description: data.description || '',
  tags: data.tags ? String(data.tags).split(',') : [],
  image: data.image || {},
  links: data.links || {},
})

export function getSortedContentsData(subDirectory: string, locale: string) {
  return listContents(subDirectory, locale)
    .map(({ fileName, id, date }) =>
      toMetadata(id, readMatter(subDirectory, fileName).data, date),
    )
    .sort((a, b) => {
      if (a.date === '' && b.date === '') return a.id > b.id ? 1 : -1
      return a.date < b.date ? 1 : -1
    })
}

export function getAllContentIds(subDirectory: string) {
  return LOCALES.flatMap((locale) =>
    listContents(subDirectory, locale).map(({ id }) => ({ locale, id })),
  )
}

export async function getContentData(
  subDirectory: string,
  id: string,
  locale: string,
): Promise<Content | null> {
  const entry = listContents(subDirectory, locale).find((c) => c.id === id)
  // No markdown file for this id/locale — let the caller render a 404.
  if (!entry) return null
  const { data, content } = readMatter(subDirectory, entry.fileName)
  return {
    metadata: toMetadata(id, data, entry.date),
    contentHtml: md.render(content),
  }
}
