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
      <div className='h-full'>
        <div className="flex flex-col max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 py-20 ">
          <div className='items-center flex justify-center sm:flex-row flex-col py-5'>
            <div className=''>
              <h1 className="font-bold md:text-5xl sm:text-4xl text-3xl tracking-tight mb-1 text-black dark:text-white">
                {t.NAME}
              </h1>
              
              <p className="text-gray-700 dark:text-gray-200 mb-4 py-4">
                Master{"'"}s student at{" "}
                <Link href="https://www.omu.ac.jp/" passHref>
                  <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                    Osaka Metropolitan University
                  </a>
                </Link>
                . Recieved Bachelor of Engineering (BE) at{" "}
                <Link href="https://www.osakafu-u.ac.jp/" passHref>
                  <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                    Osaka Prefecture University
                  </a>
                </Link>
                {" "}in 03/2023.
                Interests: human computer interaction, edtech, nudging strategies, learning augumentation, medical x ai ...
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

          <div className='py-5'>
            <h2 className='font-semibold sm:text-3xl text-2xl mb-3'>
              {t.AFFILIATION}
            </h2>
            <table>
              <tbody>
                <tr>
                  <td className='px-1'>2021.4</td>
                  <td className='px-1'>-</td>
                  <td className='px-1'>2023.3</td>
                  <td >
                    <Link href="https://www.osakafu-u.ac.jp/academics/college/ce/" passHref>
                      <a target="_blank" rel="noopener noreferrer" className='pl-4 hover:underline'>
                        {t.BACHELOR_AFFILIATION}
                      </a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className='px-1'>2021.9</td>
                  <td className='px-1'>-</td>
                  <td className='px-1'></td>
                  <td>
                    <Link href="https://imlab.jp" passHref>
                      <a target="_blank" rel="noopener noreferrer" className='pl-4 hover:underline'>
                        {t.BACHELOR_AND_MASTER_LAB}
                      </a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className='px-1'>2023.4</td>
                  <td className='px-1'>-</td>
                  <td className='px-1'>(2025.3)</td>
                  <td>
                    <Link href="https://www.omu.ac.jp/i/" passHref>
                      <a target="_blank" rel="noopener noreferrer" className='pl-4 hover:underline'>
                        {t.MASTER_AFFILIATION}
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='py-5'>
            <h2 className='font-semibold sm:text-3xl text-2xl mb-3'>
              {t.EXPERIENCES}
            </h2>
            <table>
              <tbody>
                <tr>
                  <td className='px-1'>2023.3</td>
                  <td className='px-1'>-</td>
                  <td className='px-1'>2023.3</td>
                  <td className='pl-4'>
                    {t.INTERNSHIP}{", "}
                    <Link href="https://www.dfki.de/" passHref>
                      <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                        {t.DFKI}
                      </a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className='px-1'>2021.9</td>
                  <td className='px-1'>-</td>
                  <td className='px-1'></td>
                  <td className='pl-4'>
                    {t.SERVERADMIN}{", "}
                    <Link href="https://imlab.jp" passHref>
                      <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                        {t.BACHELOR_AND_MASTER_LAB}
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='py-5'>
            <h2 className='font-semibold sm:text-3xl text-2xl mb-3'>
              {t.PUBLICATION}
            </h2>
            <ul className='mb-4 px-1'>
              <li>
                <Link href={t.iwashita2023ieicegeneral_bibpath}>
                  <a className='hover:underline'>
                    {t.iwashita2023ieicegeneral}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='py-5'>
            <h2 className='font-semibold sm:text-3xl text-2xl mb-3'>
              {t.PROJECTS}
            </h2>
            <table>
              <tbody>
                <tr>
                  <td className='px-1'>2021.9</td>
                  <td className='px-1'>-</td>
                  <td className='px-1'>2024.3</td>
                  <td >
                    <Link href="https://lecycl.imlab.jp/" passHref>
                      <a target="_blank" rel="noopener noreferrer" className='pl-4 hover:underline'>
                        Learning Cyclotron (LeCycl)
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='py-5'>
            <h2 className='font-semibold sm:text-3xl text-2xl mb-3'>
              {t.LINKS}
            </h2>
            <ul className='px-1'>
              <li>
                <Link href="https://zenn.dev/rmt_drums" passHref>
                  <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                    Zenn.dev
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://qiita.com/yiRMT" passHref>
                  <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                    Qiita
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/yiRMT" passHref>
                  <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                    GitHub
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/yiwashita/" passHref>
                  <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                    LinkedIn
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}