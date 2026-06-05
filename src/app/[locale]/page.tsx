import Image from 'next/image'
import Link from 'next/link'
import { getI18n } from '@/locales/server'
import { buildMetadata } from '@/libs/metadata'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const t = await getI18n()
  return buildMetadata({
    title: `${t('name')} - yiwashita.com`,
    description: t('introduction'),
    locale,
  })
}

export default async function Home(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params

  const { locale } = params

  const t = await getI18n()
  return (
    <>
      <h1>{t('name')}</h1>
      <div className="bio-container">
        <div className="bio-text">
          <p>{t('introduction')}</p>
          <p>{t('keywords')}</p>
        </div>

        <div className="bio-image">
          <Image
            src="/profile.jpg"
            alt="Yuichiro Iwashita"
            height={176}
            width={176}
            sizes="30vw"
            priority
          />
        </div>
      </div>

      <h2>{t('education')}</h2>
      <table>
        <tbody>
          <tr>
            <td>2025.05</td>
            <td>-</td>
            <td>{t('present')}</td>
            <td>
              {t('phd-student')}
              {', '}
              <Link href="https://rptu.de/en">
                {t('rptu-dept-informatics')}
              </Link>
            </td>
          </tr>
          <tr>
            <td>2023.04</td>
            <td>-</td>
            <td>2025.03</td>
            <td>
              {t('msc')}
              {', '}
              <Link
                href={
                  locale === 'ja'
                    ? 'https://www.omu.ac.jp/i/'
                    : 'https://www.omu.ac.jp/i/en/'
                }
              >
                {t('omu-grad-informatics')}
              </Link>
            </td>
          </tr>
          <tr>
            <td>2021.04</td>
            <td>-</td>
            <td>2023.03</td>
            <td>
              {t('beng')}
              {', '}
              <Link
                href={
                  locale === 'ja'
                    ? 'https://www.osakafu-u.ac.jp/academics/college/ce/'
                    : 'https://www.osakafu-u.ac.jp/en/academics/colleges/ce/'
                }
              >
                {t('opu-college-engineering')}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>{t('work-experience')}</h2>
      <table>
        <tbody>
          <tr>
            <td>2025.06</td>
            <td>-</td>
            <td>{t('present')}</td>
            <td>
              Research Assistant
              {', '}
              <Link href="https://www.dfki.de/en/web">{t('dfki')}</Link>
            </td>
          </tr>
          <tr>
            <td>2025.05</td>
            <td>-</td>
            <td>{t('present')}</td>
            <td>
              {t('visiting-researcher')}
              {', '}
              <Link href="https://www.omu.ac.jp/orp/org/crc/dfkijp/">
                {t('omu-dfkijp')}
              </Link>
            </td>
          </tr>
          <tr>
            <td>2025.04</td>
            <td>-</td>
            <td>2025.05</td>
            <td>
              {t('visiting-researcher')}
              {', '}
              <Link href="https://www.dfki.de/en/web">{t('dfki')}</Link>
            </td>
          </tr>
          <tr>
            <td>2024.02</td>
            <td>-</td>
            <td>2025.03</td>
            <td>
              {t('software-engineer')}
              {', '}
              <Link href="https://affectify.jp">{t('affectify')}</Link>
            </td>
          </tr>
          <tr>
            <td>2021.09</td>
            <td>-</td>
            <td>2025.03</td>
            <td>
              {t('server-admin')}
              {', '}
              <Link
                href={
                  locale === 'ja'
                    ? 'https://imlab.jp'
                    : 'https://imlab.jp/index-e.html'
                }
              >
                {t('imlab')}
              </Link>
            </td>
          </tr>
          <tr>
            <td>2023.09</td>
            <td>-</td>
            <td>2024.09</td>
            <td>
              {t('visiting-researcher')}
              {', '}
              <Link href="https://www.dfki.de/en/web">{t('dfki')}</Link>
            </td>
          </tr>
          <tr>
            <td>2023.09</td>
            <td>-</td>
            <td>2023.09</td>
            <td>
              {t('summer-internship')}
              {', '}
              <Link
                href={
                  locale === 'ja'
                    ? 'https://corp.rakuten.co.jp'
                    : 'https://global.rakuten.com/corp'
                }
              >
                {t('rakuten')}
              </Link>
            </td>
          </tr>
          <tr>
            <td>2023.08</td>
            <td>-</td>
            <td>2023.09</td>
            <td>
              {t('summer-internship')}
              {', '}
              <Link
                href={
                  locale === 'ja'
                    ? 'https://corp.freee.co.jp'
                    : 'https://corp.freee.co.jp/en'
                }
              >
                {t('freee')}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>{t('research-projects')}</h2>
      <table>
        <tbody>
          <tr>
            <td>2024.12</td>
            <td>-</td>
            <td>{t('present')}</td>
            <td>
              <Link href="https://www.aspire-mxai.com">
                {t('pj-aspire-mxai')}
              </Link>
            </td>
          </tr>
          <tr>
            <td>2022.06</td>
            <td>-</td>
            <td>2025.03</td>
            <td>
              <Link href="https://www.omu.ac.jp/info/news/entry-17121.html">
                {t('pj-medical-ai-omu')}
              </Link>
            </td>
          </tr>
          <tr>
            <td>2021.09</td>
            <td>-</td>
            <td>2024.03</td>
            <td>
              <Link href="https://opu-imp.github.io/lecycl/">
                {t('pj-lecycl')}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>{t('links')}</h2>
      <ul>
        <li>
          <Link href="https://zenn.dev/rmt_drums">Zenn.dev</Link>
        </li>
        <li>
          <Link href="https://qiita.com/yiRMT">Qiita</Link>
        </li>
        <li>
          <Link href="https://speakerdeck.com/yirmt">Speaker Deck</Link>
        </li>
        <li>
          <Link href="https://github.com/yiRMT">GitHub</Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/yiwashita">LinkedIn</Link>
        </li>
        <li>
          <Link href="https://scholar.google.com/citations?user=VxyleMEAAAAJ&hl">
            Google Scholar
          </Link>
        </li>
      </ul>

      <h2>{t('contact')}</h2>
      <p>[firstname].[lastname]@dfki.de</p>
    </>
  )
}
