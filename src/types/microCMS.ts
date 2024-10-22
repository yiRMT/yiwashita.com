import type {
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";

export interface Post {
  id: MicroCMSContentId
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  language: string[]
  date: string
  tags: Tag[]
  hero: MicroCMSImage
  body: string
}

interface Tag {
  id: string
  tag: string
}