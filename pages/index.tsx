import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useLocale } from 'hooks/useLocale'

export default function Home() {
  const { locale, t } = useLocale()
  const pageTitle = t.NAME
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>{t.NAME}</h1>
      <div className="bio-container">
        <div className="bio-text">
          <p>{t.INTRODUCTION}</p>
          <p>{t.KEYWORDS}</p>
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

      <h2>{t.AFFILIATION}</h2>
      <table>
        <tbody>
          <tr>
            <td>2023.10</td>
            <td>-</td>
            <td>{t.PRESENT}</td>
            <td>
              <Link href="https://rptu.de/en">{t.RPTU}</Link>
            </td>
          </tr>
          <tr>
            <td>2023.04</td>
            <td>-</td>
            <td>{t.PRESENT}</td>
            <td>
              <Link
                href={
                  locale === 'ja'
                    ? 'https://www.omu.ac.jp/i/'
                    : 'https://www.omu.ac.jp/i/en/'
                }
              >
                {t.MASTER_AFFILIATION}
              </Link>
            </td>
          </tr>
          <tr>
            <td>2021.09</td>
            <td>-</td>
            <td>{t.PRESENT}</td>
            <td>
              <Link
                href={
                  locale === 'ja'
                    ? 'https://imlab.jp'
                    : 'https://imlab.jp/index-e.html'
                }
              >
                {t.BACHELOR_AND_MASTER_LAB}
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
            <td>2024.02</td>
            <td>-</td>
            <td>{t.PRESENT}</td>
            <td>
              {t.SOFTWARE_ENGINEER}
              {', '}
              <Link href="https://affectify.jp">{t.AFFECTIFY}</Link>
            </td>
          </tr>
          <tr>
            <td>2023.09</td>
            <td>-</td>
            <td>{t.PRESENT}</td>
            <td>
              {t.INTERNSHIP}
              {', '}
              <Link href="https://www.dfki.de/en/web">{t.DFKI}</Link>
            </td>
          </tr>
          <tr>
            <td>2023.09</td>
            <td>-</td>
            <td>2023.09</td>
            <td>
              {t.INTERNSHIP}
              {', '}
              <Link
                href={
                  locale === 'ja'
                    ? 'https://corp.rakuten.co.jp'
                    : 'https://global.rakuten.com/corp'
                }
              >
                {t.RAKUTEN}
              </Link>
            </td>
          </tr>
          <tr>
            <td>2023.08</td>
            <td>-</td>
            <td>2023.09</td>
            <td>
              {t.INTERNSHIP}
              {', '}
              <Link
                href={
                  locale === 'ja'
                    ? 'https://corp.freee.co.jp'
                    : 'https://corp.freee.co.jp/en'
                }
              >
                {t.FREEE}
              </Link>
            </td>
          </tr>
          <tr>
            <td>2023.03</td>
            <td>-</td>
            <td>2023.03</td>
            <td>
              {t.INTERNSHIP}
              {', '}
              <Link href="https://www.dfki.de/en/web">{t.DFKI}</Link>
            </td>
          </tr>
          <tr>
            <td>2021.09</td>
            <td>-</td>
            <td>{t.PRESENT}</td>
            <td>
              {t.SERVERADMIN}
              {', '}
              <Link
                href={
                  locale === 'ja'
                    ? 'https://imlab.jp'
                    : 'https://imlab.jp/index-e.html'
                }
              >
                {t.BACHELOR_AND_MASTER_LAB}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>{t.PUBLICATIONS}</h2>
      <h3>{t.INTERNATIONAL_CONFERENCE_PAPERS}</h3>
      <div className="publications">
        <ul>
          <li>
            <b>Yuichiro Iwashita</b>, Andrew Vargo, Motoi Iwata, Koichi Kise.
            Personalizing Augmented Flashcards Towards Long-Term Vocabulary
            Learning. In Proceedings of the Augmented Humans International
            Conference (AHs 2024), ACM, 2024. (to be published)
          </li>
        </ul>
      </div>
      <h3>{t.DOMESTIC_CONFERENCE_PAPERS}</h3>
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
              {t.LINK}
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
              {t.LINK}
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
              {t.LINK}
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
              </>
            ) : (
              <>
                <b>Yuichiro Iwashita</b>, Motoi Iwata, Andrew W. Vargo, Koichi
                Kise. Developing an adaptive learning system for long-term
                English vocabulary learning. In Proceedings of the 2023 IEICE
                General Conference, IEICE, 2023. (in Japanese, without peer
                review)
              </>
            )}
            {' ('}
            <Link
              href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1906&lang=${locale}`}
            >
              {t.LINK}
            </Link>
            {')'}
          </li>
        </ul>
      </div>
      <h3>{t.MISC_PAPERS}</h3>
      <div className="publications">
        <ul>
          <li>
            David Selby*, Kai Spriestersbach*, <b>Yuichiro Iwashita</b>*, Dennis
            Bappert, Archana Warrier, Sumantrak Mukherjee, Sergey Redyuk,
            Muhammad Nabeel Asim, Koichi Kise, Sebastian Vollmer. Quantitative
            Knowledge Retrieval from Large Language Models. arXiv preprint
            arXiv:2402.07770v1 [cs.IR], 2024. (* equal contributions)
            {' ('}
            <Link href={`https://arxiv.org/abs/2402.07770`}>{t.LINK}</Link>
            {')'}
          </li>
        </ul>
      </div>

      <h2>{t.RESEACHPROJECTS}</h2>
      <table>
        <tbody>
          <tr>
            <td>2022.06</td>
            <td>-</td>
            <td>{t.PRESENT}</td>
            <td>
              <Link href="https://www.omu.ac.jp/info/news/entry-10852.html">
                {t.MEDxAI}
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

      <h2>{t.LINKS}</h2>
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
      </ul>
    </>
  )
}
