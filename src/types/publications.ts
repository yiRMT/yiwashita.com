export type PublicationCategory =
  | 'journal'
  | 'international'
  | 'misc'
  | 'domestic'

export type PublicationAuthor = {
  name: string
  // true when this author is the site owner (rendered in bold)
  bold: boolean
}

export type Publication = {
  key: string
  category: PublicationCategory
  authors: PublicationAuthor[]
  title: string
  // formatted venue/year string, e.g. 'Stat, 14, pp.e70054, 2025'
  venue: string
  year: number
  month: number
  // some authors are marked with '*' and an "equal contributions" note is shown
  equalContrib: boolean
  // domestic talks without peer review
  notPeerReviewed: boolean
  // path to the source .bib file, e.g. '/bib/journal/selby2025had.bib'
  bibPath: string
  url?: string
}

export type PublicationGroup = {
  category: PublicationCategory
  publications: Publication[]
}
