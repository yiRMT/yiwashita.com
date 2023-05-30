export type PostMetadata = {
  id: string,
  title: string,
  image: {
    path: string,
    height: number,
    width: number,
  },
  date: string,
  tags: string[],
  description: string,
  links: {
    website: string,
    github: string,
    media: string,
  },
}

export type Post = {
  id: string,
  meta: PostMetadata,
  body: string,
}