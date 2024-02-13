import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from '../hooks/useLocale';

export default function Home () {
  const { locale, t } = useLocale()
  const topTitle = t.NAME
  return (
    <>
      <Head>
        <title>{topTitle}</title>
      </Head>
      <div className="mx-5 sm:mx-10 md:mx-16 lg:mx-auto my-32 sm:my-24 md:my-28 max-w-4xl">
        <div className='flex flex-col sm:flex-row items-center my-5 gap-5'>
          <div className='flex flex-col sm:items-start items-center'>
            <h1 className="font-bold md:text-5xl sm:text-4xl text-3xl tracking-tight mb-1">
              {t.NAME}
            </h1>
            <p className="my-6 px-1">
              {t.INTRODUCTION}
            </p>
            <p className='my-6 px-1'>
              {t.KEYWORDS}
            </p>
          </div>

          <div className="flex-none sm:w-[176px] w-[200px] relative">
            <Image
              alt="Yuichiro Iwashita"
              height={176}
              width={176}
              src="/profile.jpg"
              sizes="30vw"
              priority
              className="rounded-full"
            />
          </div>
        </div>

        <div className='my-10'>
          <h2 className='font-semibold sm:text-3xl text-2xl my-3'>
            {t.AFFILIATION}
          </h2>
          <table>
            <tbody>
              <tr>
                <td className='px-1'>2023.10</td>
                <td className='px-1'>-</td>
                <td className='px-1'></td>
                <td>
                  <Link href='https://rptu.de/en' passHref>
                    <a target="_blank" rel="noopener noreferrer" className='pl-4 hover:underline'>
                      {t.RPTU}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className='px-1'>2023.4</td>
                <td className='px-1'>-</td>
                <td className='px-1'></td>
                <td>
                  <Link href={ locale === "ja" ? "https://www.omu.ac.jp/i/" : "https://www.omu.ac.jp/i/en/"} passHref>
                    <a target="_blank" rel="noopener noreferrer" className='pl-4 hover:underline'>
                      {t.MASTER_AFFILIATION}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className='px-1'>2021.9</td>
                <td className='px-1'>-</td>
                <td className='px-1'></td>
                <td>
                  <Link href={ locale === "ja" ? "https://imlab.jp" : "https://imlab.jp/index-e.html"} passHref>
                    <a target="_blank" rel="noopener noreferrer" className='pl-4 hover:underline'>
                      {t.BACHELOR_AND_MASTER_LAB}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className='px-1'>2021.4</td>
                <td className='px-1'>-</td>
                <td className='px-1'>2023.3</td>
                <td >
                  <Link href={ locale === "ja" ? "https://www.osakafu-u.ac.jp/academics/college/ce/" : "https://www.osakafu-u.ac.jp/en/academics/colleges/ce/"} passHref>
                    <a target="_blank" rel="noopener noreferrer" className='pl-4 hover:underline'>
                      {t.BACHELOR_AFFILIATION}
                    </a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='my-10'>
          <h2 className='font-semibold sm:text-3xl text-2xl my-3'>
            {t.EXPERIENCES}
          </h2>
          <table>
            <tbody>
              <tr>
                <td className='px-1'>2024.2</td>
                <td className='px-1'>-</td>
                <td className='px-1'></td>
                <td className='pl-4'>
                  {t.SOFTWARE_ENGINEER}{", "}
                  <Link href="https://affectify.jp" passHref>
                    <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                      {t.AFFECTIFY}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className='px-1'>2023.9</td>
                <td className='px-1'>-</td>
                <td className='px-1'></td>
                <td className='pl-4'>
                  {t.INTERNSHIP}{", "}
                  <Link href="https://www.dfki.de/en/web" passHref>
                    <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                      {t.DFKI}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className='px-1'>2023.9</td>
                <td className='px-1'>-</td>
                <td className='px-1'>2023.9</td>
                <td className='pl-4'>
                  {t.INTERNSHIP}{", "}
                  <Link href={ locale === "ja" ? "https://corp.rakuten.co.jp" : "https://global.rakuten.com/corp"} passHref>
                    <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                      {t.RAKUTEN}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className='px-1'>2023.8</td>
                <td className='px-1'>-</td>
                <td className='px-1'>2023.9</td>
                <td className='pl-4'>
                  {t.INTERNSHIP}{", "}
                  <Link href={ locale === "ja" ? "https://corp.freee.co.jp" : "https://corp.freee.co.jp/en"} passHref>
                    <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                      {t.FREEE}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className='px-1'>2023.3</td>
                <td className='px-1'>-</td>
                <td className='px-1'>2023.3</td>
                <td className='pl-4'>
                  {t.INTERNSHIP}{", "}
                  <Link href="https://www.dfki.de/en/web" passHref>
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
                  <Link href={ locale === "ja" ? "https://imlab.jp" : "https://imlab.jp/index-e.html"} passHref>
                    <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                      {t.BACHELOR_AND_MASTER_LAB}
                    </a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='my-10'>
          <h2 className='font-semibold sm:text-3xl text-2xl my-3'>
            {t.PUBLICATION}
          </h2>
          <ul className='mb-4 px-1 flex flex-col gap-3'>
            <li>
              <Link href={`https://arxiv.org/abs/2402.07770`} passHref>
                <a target='_blank' rel="noopener noreferrer" className='hover:underline'>
                  David Selby*, Kai Spriestersbach*, Yuichiro Iwashita*, Dennis Bappert, Archana Warrier, Sumantrak Mukherjee, Sergey Redyuk, Muhammad Nabeel Asim, Koichi Kise, Sebastian Vollmer. Quantitative Knowledge Retrieval from Large Language Models. arXiv preprint arXiv:2402.07770v1 [cs.IR], 2024. (* equal contributions)
                </a>
              </Link>
            </li>
            <li>
              <Link href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1940&prev_func=search_result&search_year_b=2023&search_year_e=2023&lang=${locale}`} passHref>
                <a target='_blank' rel="noopener noreferrer" className='hover:underline'>
                  {t.liu2023jcmi43survivalanalysis}
                </a>
              </Link>
            </li>
            <li>
              <Link href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1941&prev_func=search_result&search_year_b=2023&search_year_e=2023&lang=${locale}`} passHref>
                <a target='_blank' rel="noopener noreferrer" className='hover:underline'>
                  {t.nonomiya2023jcmi43dynamicprediction}
                </a>
              </Link>
            </li>
            <li>
              <Link href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1942&prev_func=search_result&search_year_b=2023&search_year_e=2023&lang=${locale}`} passHref>
                <a target='_blank' rel="noopener noreferrer" className='hover:underline'>
                  {t.kotoura2023jcmi43clinicalplusimage}
                </a>
              </Link>
            </li>
            <li>
              <Link href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1906&prev_func=search_result&search_year_b=2023&search_year_e=2023&lang=${locale}`} passHref>
                <a target='_blank' rel="noopener noreferrer" className='hover:underline'>
                  {t.iwashita2023ieicegeneral}
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className='my-10'>
          <h2 className='font-semibold sm:text-3xl text-2xl my-3'>
            {t.RESEACHPROJECTS}
          </h2>
          <table>
            <tbody>
              <tr>
                <td className='px-1'>2022.6</td>
                <td className='px-1'>-</td>
                <td className='px-1'>2024.3</td>
                <td >
                  <Link href="https://www.omu.ac.jp/info/news/entry-06252.html" passHref>
                    <a target="_blank" rel="noopener noreferrer" className='pl-4 hover:underline'>
                      {t.MEDxAI}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className='px-1'>2021.9</td>
                <td className='px-1'>-</td>
                <td className='px-1'>2024.3</td>
                <td >
                  <Link href="https://www.lecycl.org" passHref>
                    <a target="_blank" rel="noopener noreferrer" className='pl-4 hover:underline'>
                      Learning Cyclotron (LeCycl)
                    </a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='my-10'>
          <h2 className='font-semibold sm:text-3xl text-2xl my-3'>
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
              <Link href="https://speakerdeck.com/yirmt" passHref>
                <a target="_blank" rel="noopener noreferrer" className='hover:underline'>
                  Speaker Deck
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
    </>
  )
}