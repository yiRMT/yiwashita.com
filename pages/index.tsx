import { client } from '../libs/client'
import type { Blog, Tag } from '../types/blog'
import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Yuichiro Iwashita</title>
      </Head>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        トップページ
      </h1>
    </>
  )
}