import { client } from '../libs/client'
import type { Blog, Tag } from '../types/blog'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from '../hooks/useLocale';

export default function Home () {
  const { t } = useLocale()
  const topTitle = t.NAME
  return (
    <>
      <Head>
        <title>{topTitle}</title>
      </Head>
      <div className='px-10 sm:h-screen h-full'>
        <div className="flex flex-col items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 py-20 ">
          <div className='items-center flex justify-center sm:flex-row flex-col'>
            <div className=''>
              <h1 className="font-bold md:text-5xl sm:text-4xl text-3xl tracking-tight mb-1 text-black dark:text-white">
                {t.NAME}
              </h1>
              
              <p className="text-gray-700 dark:text-gray-200 mb-4 py-4">
                Undergraduate student at {" "}
                <Link href="https://www.osakafu-u.ac.jp/" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    Osaka Prefecture University
                  </a>
                </Link>
                . Interests: human computer interaction, edtech, nudging strategies, learning augumentation, ...
              </p>
              
            </div>
            <div className="flex-none w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Yuichiro Iwashita"
                height={176}
                width={176}
                src="/profile.png"
                sizes="30vw"
                priority
                className="rounded-full"
              />
            </div>
          </div>
          <h2 className='font-semibold md:text-4xl sm:text-3xl text-2xl mb-1'>
            {t.AFFILIATION}
          </h2>
          <ul className='list-disc mb-4'>
            <li>
              2021年4月 (編入学) 〜2023年3月 (卒業): 大阪府立大学 工学域
            </li>
            <li>
              2023年4月(入学) 〜2025年3月 (卒業見込): 大阪公立大学 大学院情報学研究科
            </li>
            <li>
              2021年9月〜: 知能メディア処理研究グループ
            </li>
          </ul>

          <h2 className='font-semibold md:text-4xl sm:text-3xl text-2xl mb-1'>
            {t.PUBLICATION}
          </h2>
          <ul className='list-decimal mb-4'>
            <li>
              {t.iwashita2023ieicegeneral} (
              <Link href={t.iwashita2023ieicegeneral_bibpath}>
                <a>Cite with BibTeX</a>
              </Link>
              )
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}