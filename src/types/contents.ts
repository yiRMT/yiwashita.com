export type ContentMetadata = {
  id: string
  title: string
  description: string
  date: string
  tags: string[]
  image: {
    path: string
    height: number | undefined
    width: number | undefined
  }
  links: any
}

export type Content = {
  idWithDate: string
  metadata: ContentMetadata
  contentHtml: string
}
