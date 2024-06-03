import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import { Content, ContentMetadata } from '@/types/contents'

const contentsDirectory = path.join(process.cwd(), 'contents')

const md = new MarkdownIt({
  html: true,
  highlight: (str: string, lang: string) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }
    return ''
  },
}).use(require('markdown-it-footnote'))

export function getSortedContentsData(subDirectory: string, locale: string) {
  const fileNames = fs
    .readdirSync(path.join(contentsDirectory, subDirectory))
    .filter((f) => RegExp(`.${locale}.md$`).test(f))
  const allContentsData: ContentMetadata[] = fileNames.map((fileName) => {
    var id = fileName.replace(RegExp(`.${locale}.md$`), '')
    const fullPath = path.join(contentsDirectory, subDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const pattern = fileName.match(RegExp('(\\d{4}-\\d{2}-\\d{2})'))
    if (pattern) {
      matterResult.data.date = pattern[1]
      id = id.replace(`${pattern[1]}-`, '')
    }

    const tags: string[] = matterResult.data.tags
      ? (matterResult.data.tags + '').split(',')
      : []

    return {
      id: id,
      title: matterResult.data.title || matterResult.data.name || '',
      date: matterResult.data.date || '',
      description: matterResult.data.description || '',
      tags: tags,
      image: matterResult.data.image || {},
      links: matterResult.data.links || {},
    }
  })

  return allContentsData.sort((a, b) => {
    if (a.date === '' && b.date === '') {
      if ((a.id as string) > (b.id as string)) {
        return 1
      } else {
        return -1
      }
    } else {
      if ((a.date as string) < (b.date as string)) {
        return 1
      } else {
        return -1
      }
    }
  })
}

export function getAllContentIds(subDirectory: string) {
  let paths = []
  const fileNames = fs.readdirSync(path.join(contentsDirectory, subDirectory))
  for (let fileName of fileNames) {
    const pattern = fileName.match(RegExp('.(\\S{2}).md$'))
    if (pattern) {
      const locale = pattern[1]
      var contentId = fileName.replace(`.${pattern[1]}.md`, '')

      const d = fileName.match(RegExp('(\\d{4}-\\d{2}-\\d{2})'))
      contentId = d ? contentId.replace(`${d[1]}-`, '') : contentId

      paths.push({ params: { id: contentId }, locale })
    }
  }
  return paths
}

export async function getContentData(
  subDirectory: string,
  id: string,
  locale: string,
): Promise<Content> {
  const dateDict: { [key: string]: string } = {}
  const fileNames = fs
    .readdirSync(path.join(contentsDirectory, subDirectory))
    .filter((f) => RegExp(`.${locale}.md$`).test(f))
  for (const fileName of fileNames) {
    var fileId = fileName.replace(`.${locale}.md`, '')
    const pattern = fileName.match(RegExp('(\\d{4}-\\d{2}-\\d{2})'))
    fileId = pattern ? fileId.replace(`${pattern[1]}-`, '') : fileId
    dateDict[fileId] = fileName
  }

  const idWithDate = dateDict[id]
  const fullPath = path.join(contentsDirectory, subDirectory, idWithDate)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = md.render(matterResult.content)
  var contentHtml = processedContent.toString()
  // contentHtml = replaceImgWithFigure(contentHtml)

  const anotherLocale = locale === 'en' ? 'ja' : 'en'
  const alFullPath = path.join(
    contentsDirectory,
    subDirectory,
    idWithDate.replace(`.${locale}.`, `.${anotherLocale}.`),
  )
  matterResult.data.isTranslated = fs.existsSync(alFullPath) ? 'true' : 'false'

  const pattern = idWithDate.match(RegExp('(\\d{4}-\\d{2}-\\d{2})'))
  matterResult.data.date = pattern ? pattern[1] : ''

  const tagsStr: string = matterResult.data.tags
    ? matterResult.data.tags + ''
    : ''
  const tags: string[] = tagsStr.split(',')

  const metadata = {
    id: id,
    title: matterResult.data.title || matterResult.data.name || '',
    date: matterResult.data.date || '',
    description: matterResult.data.description || '',
    tags: tags,
    image: matterResult.data.image || {},
    links: matterResult.data.links || {},
  }

  return {
    idWithDate,
    metadata,
    contentHtml,
  }
}
