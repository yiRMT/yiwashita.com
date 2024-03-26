import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from '../hooks/useLocale';

export default function Home () {
  const { locale, t } = useLocale()
  const presentText = locale === 'ja' ? '現在' : 'Present'
  const topTitle = t.NAME
  return (
    <article>
      <Head>
        <title>{topTitle}</title>
      </Head>
      <div className='wrapper'>
        <h1>{t.NAME}</h1>
        <div className='bio-container'>
          <div className='bio-text-container'>
            <p>{t.INTRODUCTION}</p>
            <p>{t.KEYWORDS}</p>
          </div>
          <Image
            alt='Yuichiro Iwashita'
            height={176}
            width={176}
            src='/profile.jpg'
            priority
            className='bio-image'
          />
        </div>

        <h2>{t.AFFILIATION}</h2>
        <table>
          <tbody>
            <tr>
              <td>2023.10</td>
              <td>-</td>
              <td>{presentText}</td>
              <td>
                <Link href='https://rptu.de/en' rel='noopener noreferrer' target='_blank'>
                  {t.RPTU}
                </Link>
              </td>
            </tr>
            <tr>
              <td>2023.4</td>
              <td>-</td>
              <td>{presentText}</td>
              <td>
                <Link href={ locale === 'ja' ? 'https://www.omu.ac.jp/i/' : 'https://www.omu.ac.jp/i/en/'} rel='noopener noreferrer' target='_blank'>
                  {t.MASTER_AFFILIATION}
                </Link>
              </td>
            </tr>
            <tr>
              <td>2021.9</td>
              <td>-</td>
              <td>{presentText}</td>
              <td>
                <Link href={ locale === 'ja' ? 'https://imlab.jp' : 'https://imlab.jp/index-e.html'} rel='noopener noreferrer' target='_blank'>
                  {t.BACHELOR_AND_MASTER_LAB}
                </Link>
              </td>
            </tr>
            <tr>
              <td>2021.4</td>
              <td>-</td>
              <td>2023.3</td>
              <td>
                <Link href={ locale === 'ja' ? 'https://www.osakafu-u.ac.jp/academics/college/ce/' : 'https://www.osakafu-u.ac.jp/en/academics/colleges/ce/'} rel='noopener noreferrer' target='_blank'>
                  {t.BACHELOR_AFFILIATION}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>{t.EXPERIENCES}</h2>
        <table>
          <tbody>
            <tr>
              <td>2024.2</td>
              <td>-</td>
              <td>{presentText}</td>
              <td>
                {t.SOFTWARE_ENGINEER}{', '}
                <Link href='https://affectify.jp' rel='noopener noreferrer' target='_blank'>
                  {t.AFFECTIFY}
                </Link>
              </td>
            </tr>
            <tr>
              <td>2023.9</td>
              <td>-</td>
              <td>{presentText}</td>
              <td>
                {t.INTERNSHIP}{', '}
                <Link href='https://www.dfki.de/en/web' rel='noopener noreferrer' target='_blank'>
                  {t.DFKI}
                </Link>
              </td>
            </tr>
            <tr>
              <td>2023.9</td>
              <td>-</td>
              <td>2023.9</td>
              <td>
                {t.INTERNSHIP}{', '}
                <Link href={ locale === 'ja' ? 'https://corp.rakuten.co.jp' : 'https://global.rakuten.com/corp'} rel='noopener noreferrer' target='_blank'>
                  {t.RAKUTEN}
                </Link>
              </td>
            </tr>
            <tr>
              <td>2023.8</td>
              <td>-</td>
              <td>2023.9</td>
              <td>
                {t.INTERNSHIP}{', '}
                <Link href={ locale === 'ja' ? 'https://corp.freee.co.jp' : 'https://corp.freee.co.jp/en'} rel='noopener noreferrer' target='_blank'>
                  {t.FREEE}
                </Link>
              </td>
            </tr>
            <tr>
              <td>2023.3</td>
              <td>-</td>
              <td>2023.3</td>
              <td>
                {t.INTERNSHIP}{', '}
                <Link href='https://www.dfki.de/en/web' rel='noopener noreferrer' target='_blank'>
                  {t.DFKI}
                </Link>
              </td>
            </tr>
            <tr>
              <td>2021.9</td>
              <td>-</td>
              <td>{presentText}</td>
              <td>
                {t.SERVERADMIN}{', '}
                <Link href={ locale === 'ja' ? 'https://imlab.jp' : 'https://imlab.jp/index-e.html'} 
                  rel='noopener noreferrer' target='_blank'>
                  {t.BACHELOR_AND_MASTER_LAB}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>{t.PUBLICATION}</h2>
        <ul>
          <li>
          Yuichiro Iwashita, Andrew Vargo, Motoi Iwata, Koichi Kise. Personalizing Augmented Flashcards Towards Long-Term Vocabulary Learning. In Proceedings of the Augmented Humans International Conference (AHs 2024), ACM, 2024. (to be published)
          </li>
          <li>
            <Link href='https://arxiv.org/abs/2402.07770' rel='noopener noreferrer' target='_blank'>
              David Selby*, Kai Spriestersbach*, Yuichiro Iwashita*, Dennis Bappert, Archana Warrier, Sumantrak Mukherjee, Sergey Redyuk, Muhammad Nabeel Asim, Koichi Kise, Sebastian Vollmer. Quantitative Knowledge Retrieval from Large Language Models. arXiv preprint arXiv:2402.07770v1 [cs.IR], 2024. (* equal contributions)
            </Link>
          </li>
          <li>
            <Link href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1940&prev_func=search_result&search_year_b=2023&search_year_e=2023&lang=${locale}`} rel='noopener noreferrer' target='_blank'>
              {t.liu2023jcmi43survivalanalysis}
            </Link>
          </li>
          <li>
            <Link href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1941&prev_func=search_result&search_year_b=2023&search_year_e=2023&lang=${locale}`} rel='noopener noreferrer' target='_blank'>
              {t.nonomiya2023jcmi43dynamicprediction}
            </Link>
          </li>
          <li>
            <Link href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1942&prev_func=search_result&search_year_b=2023&search_year_e=2023&lang=${locale}`} rel='noopener noreferrer' target='_blank'>
              {t.kotoura2023jcmi43clinicalplusimage}
            </Link>
          </li>
          <li>
            <Link href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1906&prev_func=search_result&search_year_b=2023&search_year_e=2023&lang=${locale}`} rel='noopener noreferrer' target='_blank'>
              {t.iwashita2023ieicegeneral}
            </Link>
          </li>
        </ul>

        <h2>{t.RESEACHPROJECTS}</h2>
        <table>
          <tbody>
            <tr>
              <td>2022.6</td>
              <td>-</td>
              <td>2024.3</td>
              <td>
                <Link href='https://www.omu.ac.jp/info/news/entry-06252.html' rel='noopener noreferrer' target='_blank'>
                  {t.MEDxAI}
                </Link>
              </td>
            </tr>
            <tr>
              <td>2021.9</td>
              <td>-</td>
              <td>2024.3</td>
              <td>
                <Link href='https://opu-imp.github.io/lecycl/' rel='noopener noreferrer' target='_blank'>
                  Learning Cyclotron (LeCycl)
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>{t.LINKS}</h2>
        <ul>
          <li>
            <Link href='https://zenn.dev/rmt_drums' rel='noopener noreferrer' target='_blank'>
              Zenn.dev
            </Link>
          </li>
          <li>
            <Link href='https://qiita.com/yiRMT' rel='noopener noreferrer' target='_blank'>
              Qiita
            </Link>
          </li>
          <li>
            <Link href='https://speakerdeck.com/yirmt' rel='noopener noreferrer' target='_blank'>
              Speaker Deck
            </Link>
          </li>
          <li>
            <Link href='https://github.com/yiRMT' rel='noopener noreferrer' target='_blank'>
              GitHub
            </Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/yiwashita/' rel='noopener noreferrer' target='_blank'>
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </article>
  )
}