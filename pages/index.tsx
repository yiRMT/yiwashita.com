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
      <div className='h-screen'>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 py-20 ">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                {t.NAME}
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Undergraduate student at{' '}
                <span className="font-semibold">
                  <Link href="https://www.osakafu-u.ac.jp/" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      Osaka Prefecture University
                    </a>
                  </Link>
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Under construction...
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
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
        </div>
      </div>
    </>
  )
}