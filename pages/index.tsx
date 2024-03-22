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
          <ul className='mb-4 px-1 flex flex-col gap-3 list-decimal'>
            <li>
              <b>Yuichiro Iwashita</b>, Andrew Vargo, Motoi Iwata, Koichi Kise. Personalizing Augmented Flashcards Towards Long-Term Vocabulary Learning. In Proceedings of the Augmented Humans International Conference (AHs 2024), ACM, 2024. (to be published)
            </li>
            <li>
              <Link href={`https://arxiv.org/abs/2402.07770`} passHref>
                <a target='_blank' rel="noopener noreferrer" className='hover:underline'>
                  David Selby*, Kai Spriestersbach*, <b>Yuichiro Iwashita</b>*, Dennis Bappert, Archana Warrier, Sumantrak Mukherjee, Sergey Redyuk, Muhammad Nabeel Asim, Koichi Kise, Sebastian Vollmer. Quantitative Knowledge Retrieval from Large Language Models. arXiv preprint arXiv:2402.07770v1 [cs.IR], 2024. (* equal contributions)
                </a>
              </Link>
            </li>
            <li>
              <Link href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1940&prev_func=search_result&search_year_b=2023&search_year_e=2023&lang=${locale}`} passHref>
                <a target='_blank' rel="noopener noreferrer" className='hover:underline'>
                  {locale == 'ja' ? (
                    <>
                      劉 少楠, 野々宮 悠太, <b>岩下 雄一郎</b>, 木村 誠一, 齋藤 美紅, 山崎 桜花, 石丸 翔也, 仲子 聡一郎, 岡村 浩史, 岩村 雅一, 黄瀬 浩一, 新谷 歩. 集中治療室における再入室イベントを予測する機械学習ベースの生存時間解析モデルに時系列データが与える影響. 第43回医療情報学連合大会 (第24回日本医療情報学会学術大会) 論文集, 日本医療情報学会, 2023.
                    </>
                  ) : (
                    <>
                      Shaonan Liu, Yuta Nonomiya, <b>Yuichiro Iwashita</b>, Seiichi Kimura, Miku Saito, Oka Yamasaki, Shoya Ishimaru, Soichiro Nakako, Hiroshi Okamura, Masakazu Iwamura, Koichi Kise, Ayumi Shintani. Effects of time-series data on machine learning-based survival analysis models for predicting readmission events in intensive care units. In Proceedings of the 43rd Joint Conference on Medical Informatics (the 24th conference of the Japan Association for Medical Informatics), JAMI, 2023.
                    </>
                  )}
                </a>
              </Link>
            </li>
            <li>
              <Link href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1941&prev_func=search_result&search_year_b=2023&search_year_e=2023&lang=${locale}`} passHref>
                <a target='_blank' rel="noopener noreferrer" className='hover:underline'>
                  {locale == 'ja' ? (
                    <>
                      野々宮 悠太, 柳 健大, 栗生 薫, 内田 時央, <b>岩下 雄一郎</b>, 藤原 史規, 山岡 幹太, 石丸 翔也, 仲子 聡一郎, 岡村 浩史, 岩村 雅一, 黄瀬 浩一, 新谷 歩. 集中治療室における短期的な死亡を予測する再帰型ニューラルネットワークを用いた動的予測モデルの提案：MIMIC-IVデータベースを利用した後方視的コホート研究. 第43回医療情報学連合大会 (第24回日本医療情報学会学術大会) 論文集, 日本医療情報学会, 2023.
                    </>
                  ) : (
                    <>
                      Yuta Nonomiya, Kenta Yanagi, Kaori Kuriu, Tokio Uchida, <b>Yuichiro Iwashita</b>, Fuminori Fujiwara, Kanta Yamaoka, Shoya Ishimaru, Soichiro Nakako, Hiroshi Okamura, Masakazu Iwamura, Koichi Kise, Ayumi Shintani. Recurrent neural network-based dynamic prediction model for short-term mortality in intensive care units: retrospective cohort study using the MIMIC-IV database. In Proceedings of the 43rd Joint Conference on Medical Informatics (the 24th conference of the Japan Association for Medical Informatics), JAMI, 2023.
                    </>
                  )}
                </a>
              </Link>
            </li>
            <li>
              <Link href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1942&prev_func=search_result&search_year_b=2023&search_year_e=2023&lang=${locale}`} passHref>
                <a target='_blank' rel="noopener noreferrer" className='hover:underline'>
                  {locale == 'ja' ? (
                    <>
                      琴浦 陽南, 山本 航平, 堀川 昴輝, 高本 凌平, 野々宮 悠太, <b>岩下 雄一郎</b>, 栗生 薫, 石丸 翔也, 仲子 聡一郎, 岡村 浩史, 岩村 雅一, 黄瀬 浩一, 新谷 歩. 臨床テーブルデータと胸部X線画像を統合したツリー系機械学習モデルによるCOVID-19患者の予後予測. 第43回医療情報学連合大会 (第24回日本医療情報学会学術大会) 論文集, 日本医療情報学会, 2023.
                    </>
                  ) : (
                    <>
                      Hina Kotoura, Kohei Yamamoto, Koki Horikawa, Ryohei Takamoto, Yuta Nonomiya, <b>Yuichiro Iwashita</b>, Kaori Kuriu, Shoya Ishimaru, Soichiro Nakako, Hiroshi Okamura, Masakazu Iwamura, Koichi Kise, Ayumi Shintani. Tree-based machine learning model integrating clinical table data and chest x-ray images to predict prognosis of covid-19 patients. In Proceedings of the 43rd Joint Conference on Medical Informatics (the 24th conference of the Japan Association for Medical Informatics), JAMI, 2023.
                    </>
                  )}
                </a>
              </Link>
            </li>
            <li>
              <Link href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1906&prev_func=search_result&search_year_b=2023&search_year_e=2023&lang=${locale}`} passHref>
                <a target='_blank' rel="noopener noreferrer" className='hover:underline'>
                  {locale == 'ja' ? (
                    <>
                      <b>岩下 雄一郎</b>, 岩田 基, Andrew W. Vargo, 黄瀬 浩一. 英単語学習を長期的に継続するための適応型学習システムの開発. 2023年電子情報通信学会総合大会講演論文集, 電子情報通信学会, 2023.
                    </>
                  ) : (
                    <>
                      <b>Yuichiro Iwashita</b>, Motoi Iwata, Andrew W. Vargo, Koichi Kise. Developing an adaptive learning system for long-term English vocabulary learning. In Proceedings of the 2023 IEICE General Conference, IEICE, 2023.
                    </>
                  )}
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