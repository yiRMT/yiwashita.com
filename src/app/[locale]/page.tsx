import Image from 'next/image'
import Link from 'next/link'
import { getI18n } from '@/locales/server'

export async function generateMetadata() {
  const t = await getI18n()
  return {
    title: `${t('name')} - yiwashita.com`,
  }
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
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

      <h2>{t('affiliation')}</h2>
      <table>
        <tbody>
          <tr>
            <td>2023.04</td>
            <td>-</td>
            <td>{t('present')}</td>
            <td>
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
            <td>2021.09</td>
            <td>-</td>
            <td>{t('present')}</td>
            <td>
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
            <td>2023.10</td>
            <td>-</td>
            <td>2024.09</td>
            <td>
              <Link href="https://rptu.de/en">
                {t('rptu-dept-informatics')}
              </Link>
            </td>
          </tr>
          <tr>
            <td>2021.04</td>
            <td>-</td>
            <td>2023.03</td>
            <td>
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
            <td>2024.02</td>
            <td>-</td>
            <td>{t('present')}</td>
            <td>
              {t('software-engineer')}
              {', '}
              <Link href="https://affectify.jp">{t('affectify')}</Link>
            </td>
          </tr>
          <tr>
            <td>2021.09</td>
            <td>-</td>
            <td>{t('present')}</td>
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
              {t('internship')}
              {', '}
              <Link href="https://www.dfki.de/en/web">{t('dfki')}</Link>
            </td>
          </tr>
          <tr>
            <td>2023.09</td>
            <td>-</td>
            <td>2023.09</td>
            <td>
              {t('internship')}
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
              {t('internship')}
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
          <tr>
            <td>2023.03</td>
            <td>-</td>
            <td>2023.03</td>
            <td>
              {t('internship')}
              {', '}
              <Link href="https://www.dfki.de/en/web">{t('dfki')}</Link>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>{t('publications')}</h2>
      <h3>{t('international-conference-papers')}</h3>
      <div className="publications">
        <ul>
          <li>
            David Selby*, Kai Spriestersbach*, <b>Yuichiro Iwashita</b>*, Dennis
            Bappert, Archana Warrier, Sumantrak Mukherjee, Sergey Redyuk,
            Muhammad Nabeel Asim, Koichi Kise, Sebastian Vollmer. Had enough of
            experts? Elicitation and evaluation of Bayesian priors from large
            language models. In NeurIPS 2024 Workshop on Bayesian
            Decision-making and Uncertainty, 2024. (* equal contributions)
            {' ('}
            <Link href={`https://openreview.net/pdf?id=3iDxHRQfVy`}>PDF</Link>
            {')'}
            {' ('}
            <Link href={`/bib/selby2024had.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link href={`https://openreview.net/forum?id=3iDxHRQfVy`}>
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            <b>Yuichiro Iwashita</b>, Ryuki Kurashige, Andrew Vargo, Benjamin
            Tag, Tilman Dingler, Motoi Iwata, Koichi Kise. Peer-Awareness to
            Support Learning: An In-the-wild Study on Notification Timing. In
            Companion of the 2024 ACM International Joint Conference on
            Pervasive and Ubiquitous Computing Pervasive and Ubiquitous
            Computing (UbiComp Companion &apos;24), ACM, 2024.
            {' ('}
            <Link href={`https://dl.acm.org/doi/pdf/10.1145/3675094.3677576`}>
              PDF
            </Link>
            {')'}
            {' ('}
            <Link href={`/bib/iwashita2024peer.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link href={`https://doi.org/10.1145/3675094.3677576`}>
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            <b>Yuichiro Iwashita</b>, Andrew Vargo, Motoi Iwata, Koichi Kise.
            Personalizing Augmented Flashcards Towards Long-Term Vocabulary
            Learning. In Proceedings of the Augmented Humans International
            Conference (AHs 2024), ACM, 2024.
            {' ('}
            <Link href={`/preprints/iwashita2024personalizing.pdf`}>PDF</Link>
            {')'}
            {' ('}
            <Link href={`/bib/iwashita2024personalizing.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link href={`https://doi.org/10.1145/3652920.3653045`}>
              {t('link')}
            </Link>
            {')'}
          </li>
        </ul>
      </div>
      <h3>{t('domestic-conference-papers')}</h3>
      <div className="publications">
        <ul>
          <li>
            {locale == 'ja' ? (
              <>
                劉 少楠, 野々宮 悠太, <b>岩下 雄一郎</b>, 木村 誠一, 齋藤 美紅,
                山崎 桜花, 石丸 翔也, 仲子 聡一郎, 岡村 浩史, 岩村 雅一, 黄瀬
                浩一, 新谷 歩.
                集中治療室における再入室イベントを予測する機械学習ベースの生存時間解析モデルに時系列データが与える影響.
                第43回医療情報学連合大会 (第24回日本医療情報学会学術大会)
                論文集, 日本医療情報学会, 2023.
                {' ('}
                <Link href={`/bib/liu2023effects_ja.bib`}>BibTeX</Link>
                {')'}
              </>
            ) : (
              <>
                Shaonan Liu, Yuta Nonomiya, <b>Yuichiro Iwashita</b>, Seiichi
                Kimura, Miku Saito, Oka Yamasaki, Shoya Ishimaru, Soichiro
                Nakako, Hiroshi Okamura, Masakazu Iwamura, Koichi Kise, Ayumi
                Shintani. Effects of time-series data on machine learning-based
                survival analysis models for predicting readmission events in
                intensive care units. In Proceedings of the 43rd Joint
                Conference on Medical Informatics (the 24th conference of the
                Japan Association for Medical Informatics), JAMI, 2023. (in
                Japanese)
              </>
            )}
            {' ('}
            <Link
              href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1940&lang=${locale}`}
            >
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            {locale == 'ja' ? (
              <>
                野々宮 悠太, 柳 健大, 栗生 薫, 内田 時央, <b>岩下 雄一郎</b>,
                藤原 史規, 山岡 幹太, 石丸 翔也, 仲子 聡一郎, 岡村 浩史, 岩村
                雅一, 黄瀬 浩一, 新谷 歩.
                集中治療室における短期的な死亡を予測する再帰型ニューラルネットワークを用いた動的予測モデルの提案：MIMIC-IVデータベースを利用した後方視的コホート研究.
                第43回医療情報学連合大会 (第24回日本医療情報学会学術大会)
                論文集, 日本医療情報学会, 2023.
                {' ('}
                <Link href={`/bib/nonomiya2023recurrent_ja.bib`}>BibTeX</Link>
                {')'}
              </>
            ) : (
              <>
                Yuta Nonomiya, Kenta Yanagi, Kaori Kuriu, Tokio Uchida,{' '}
                <b>Yuichiro Iwashita</b>, Fuminori Fujiwara, Kanta Yamaoka,
                Shoya Ishimaru, Soichiro Nakako, Hiroshi Okamura, Masakazu
                Iwamura, Koichi Kise, Ayumi Shintani. Recurrent neural
                network-based dynamic prediction model for short-term mortality
                in intensive care units: retrospective cohort study using the
                MIMIC-IV database. In Proceedings of the 43rd Joint Conference
                on Medical Informatics (the 24th conference of the Japan
                Association for Medical Informatics), JAMI, 2023. (in Japanese)
              </>
            )}
            {' ('}
            <Link
              href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1941&lang=${locale}`}
            >
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            {locale == 'ja' ? (
              <>
                琴浦 陽南, 山本 航平, 堀川 昴輝, 高本 凌平, 野々宮 悠太,{' '}
                <b>岩下 雄一郎</b>, 栗生 薫, 石丸 翔也, 仲子 聡一郎, 岡村 浩史,
                岩村 雅一, 黄瀬 浩一, 新谷 歩.
                臨床テーブルデータと胸部X線画像を統合したツリー系機械学習モデルによるCOVID-19患者の予後予測.
                第43回医療情報学連合大会 (第24回日本医療情報学会学術大会)
                論文集, 日本医療情報学会, 2023.
                {' ('}
                <Link href={`/bib/kotoura2023tree_ja.bib`}>BibTeX</Link>
                {')'}
              </>
            ) : (
              <>
                Hina Kotoura, Kohei Yamamoto, Koki Horikawa, Ryohei Takamoto,
                Yuta Nonomiya, <b>Yuichiro Iwashita</b>, Kaori Kuriu, Shoya
                Ishimaru, Soichiro Nakako, Hiroshi Okamura, Masakazu Iwamura,
                Koichi Kise, Ayumi Shintani. Tree-based machine learning model
                integrating clinical table data and chest x-ray images to
                predict prognosis of covid-19 patients. In Proceedings of the
                43rd Joint Conference on Medical Informatics (the 24th
                conference of the Japan Association for Medical Informatics),
                JAMI, 2023. (in Japanese)
              </>
            )}
            {' ('}
            <Link
              href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1942&lang=${locale}`}
            >
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            {locale == 'ja' ? (
              <>
                <b>岩下 雄一郎</b>, 岩田 基, Andrew W. Vargo, 黄瀬 浩一.
                英単語学習を長期的に継続するための適応型学習システムの開発.
                2023年電子情報通信学会総合大会講演論文集, 電子情報通信学会,
                2023. (査読なし)
                {' ('}
                <Link href={`/bib/iwashita2023developing_ja.bib`}>BibTeX</Link>
                {')'}
              </>
            ) : (
              <>
                <b>Yuichiro Iwashita</b>, Motoi Iwata, Andrew W. Vargo, Koichi
                Kise. Developing an adaptive learning system for long-term
                English vocabulary learning. In Proceedings of the 2023 IEICE
                General Conference, IEICE, 2023. (in Japanese, without peer
                review)
                {' ('}
                <Link href={`/bib/iwashita2023developing_en.bib`}>BibTeX</Link>
                {')'}
              </>
            )}
            {' ('}
            <Link
              href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1906&lang=${locale}`}
            >
              {t('link')}
            </Link>
            {')'}
          </li>
        </ul>
      </div>
      <h3>{t('misc-papers')}</h3>
      <div className="publications">
        <ul>
          <li>
            David Selby*, Kai Spriestersbach*, <b>Yuichiro Iwashita</b>*, Dennis
            Bappert, Archana Warrier, Sumantrak Mukherjee, Sergey Redyuk,
            Muhammad Nabeel Asim, Koichi Kise, Sebastian Vollmer. Quantitative
            Knowledge Retrieval from Large Language Models. arXiv preprint
            arXiv:2402.07770v1 [cs.IR], 2024. (* equal contributions)
            {' ('}
            <Link href={`/preprints/selby2024quantitative.pdf`}>PDF</Link>
            {')'}
            {' ('}
            <Link href={`/bib/selby2024quantitative.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link href={`https://arxiv.org/abs/2402.07770`}>{t('link')}</Link>
            {')'}
          </li>
        </ul>
      </div>

      <h2>{t('research-projects')}</h2>
      <table>
        <tbody>
          <tr>
            <td>2022.06</td>
            <td>-</td>
            <td>{t('present')}</td>
            <td>
              <Link href="https://www.omu.ac.jp/info/news/entry-10852.html">
                {t('pj-medical-ai')}
              </Link>
            </td>
          </tr>
          <tr>
            <td>2021.09</td>
            <td>-</td>
            <td>2024.03</td>
            <td>
              <Link href="https://opu-imp.github.io/lecycl/">
                Learning Cyclotron (LeCycl)
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
    </>
  )
}
