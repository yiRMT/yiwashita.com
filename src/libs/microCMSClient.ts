import { Post } from '@/types/microCMS'
import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
})

export const getPostList = async ({ locale }: { locale: string }) => {
  const postList = await client.getList<Post>({
    endpoint: 'posts',
    queries: {
      fields: 'id,publishedAt,title,tags',
    },
    customRequestInit: {
      cache: 'no-cache',
    },
  })

  return postList.contents.sort((a, b) => {
    if (a.publishedAt === '' && b.publishedAt === '') {
      if ((a.id as string) > (b.id as string)) {
        return 1
      } else {
        return -1
      }
    } else {
      if ((a.publishedAt as string) < (b.publishedAt as string)) {
        return 1
      } else {
        return -1
      }
    }
  })
}

export const getPostDetail = async ({
  contentId,
  locale,
}: {
  contentId: string
  locale: string
}) => {
  return await client.getListDetail<Post>({
    endpoint: 'posts',
    contentId: contentId,
    queries: {
      fields: 'title,tags,body,publishedAt',
    },
    customRequestInit: {
      cache: 'no-cache',
    },
  })
}
