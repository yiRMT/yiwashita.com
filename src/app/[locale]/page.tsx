import Image from 'next/image'
import Link from 'next/link'
import { getI18n } from '@/locales/server'

export async function generateMetadata() {
  const t = await getI18n()
  return {
    title: `${t('name')} - yiwashita.com`,
  }
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
            <td>2025.10</td>
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
            <td>2025.04</td>
            <td>-</td>
            <td>2025.09</td>
            <td>
              {t('kontaktstudent-promotion')}
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
          {/* <tr>
            <td>2021.09</td>
            <td>-</td>
            <td>2025.03</td>
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
          </tr> */}
          <tr>
            <td>2023.10</td>
            <td>-</td>
            <td>2024.09</td>
            <td>
              {t('kontaktstudent')}
              {', '}
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
            <td>2025.05</td>
            <td>-</td>
            <td>{t('present')}</td>
            <td>
              {t('visiting-researcher')}
              {', '}
              <Link href="https://www.omu.ac.jp/orp/org/crc/dfkijp/">{t('omu-dfkijp')}</Link>
            </td>
          </tr>
          <tr>
            <td>2025.04</td>
            <td>-</td>
            <td>{t('present')}</td>
            <td>
              PhD Researcher
              {', '}
              <Link href="https://www.omu.ac.jp/orp/org/crc/dfkijp/">{t('dfki')}</Link>
            </td>
          </tr>
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
      <h3>{t('journal-papers')}</h3>
      <div className="publications">
        <ul>
          <li>
            David Selby*, <b>Yuichiro Iwashita</b>*, Kai Spriestersbach*,
            Mohammad Saad, Dennis Bappert, Archana Warrier, Sumantrak Mukherjee,
            Koichi Kise, Sebastian Vollmer. Had enough of experts? Quantitative
            knowledge retrieval from large language models. Stat, 14, pp.e70054,
            2025. (* equal contributions)
            {' ('}
            <Link
              href={
                'https://onlinelibrary.wiley.com/doi/epdf/10.1002/sta4.70054'
              }
            >
              PDF
            </Link>
            {')'}
            {' ('}
            <Link href={`/bib/selby2025had.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link href={'https://doi.org/10.1002/sta4.70054'}>{t('link')}</Link>
            {')'}
          </li>
        </ul>
      </div>
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
      <h3>{t('misc-papers')}</h3>
      <div className="publications">
        <ul>
          <li>
            <b>Yuichiro Iwashita</b>*, Ahtisham Fazeel Abbasi*, Muhammad Nabeel Asim, 
            Andreas Dengel. A Large-Scale Comparative Analysis of Imputation 
            Methods for Single-Cell RNA Sequencing Data. arXiv preprint
            arXiv:2603.24626 [q-bio.GN], 2026. (* equal contributions)
            {' ('}
            <Link href={`https://arxiv.org/pdf/2603.24626`}>PDF</Link>
            {')'}
            {' ('}
            <Link href={`/bib/iwashita2026largescale.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link href={`https://arxiv.org/abs/2603.24626`}>{t('link')}</Link>
            {')'}
          </li>
          <li>
            Shaonan Liu, <b>Yuichiro Iwashita</b>, Soichiro Nakako,
            Masakazu Iwamura, Koichi Kise. CDMT-EHR: A Continuous-Time 
            Diffusion Framework for Generating Mixed-Type Time-Series 
            Electronic Health Records. arXiv preprint
            arXiv:2603.23719 [cs.LG], 2026.
            {' ('}
            <Link href={`https://arxiv.org/pdf/2603.23719`}>PDF</Link>
            {')'}
            {' ('}
            <Link href={`/bib/liu2026cdmtehr.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link href={`https://arxiv.org/abs/2603.23719`}>{t('link')}</Link>
            {')'}
          </li>
        </ul>
      </div>
      <h3>{t('domestic-conference-papers')}</h3>
      <div className="publications">
        <ul>
          <li>
            劉 少楠, <b>岩下 雄一郎</b>, 仲子 聡一郎, 岩村 雅一, 黄瀬 浩一. 
            連続時間型の拡散モデルを用いた混合型時系列EHRの生成. 
            2026年電子情報通信学会総合大会講演論文集, 電子情報通信学会, 2026. 
            (査読なし)
            {' ('}
            <Link href={`/bib/liu2026continuous_ja.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link
              href={`https://pub.confit.atlas.jp/${locale}/event/general2026/presentation/D-19-16`}
            >
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            劉 少楠, <b>岩下 雄一郎</b>, 仲子 聡一郎, 岩村 雅一, 黄瀬 浩一. 
            院内死亡予測のためのTransformerベースの拡散モデルによる合成時系列EHRの生成. 
            第45回医療情報学連合大会 (第26回日本医療情報学会学術大会) 論文集,
            日本医療情報学会, 2025.
            {' ('}
            <Link href={`/bib/liu2025transformer_ja.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link
              href={`https://pub.confit.atlas.jp/${locale}/event/jcmi2025/presentation/3-D-3-01`}
            >
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            筒崎 乙華, <b>岩下 雄一郎</b>, 劉 少楠, 野々宮 悠太, 井上 達意, 
            仲子 聡一郎, 岡村 浩史, 岩村 雅一, 石丸 翔也, 黄瀬 浩一. 
            マルチモーダルな医療データを用いたICU患者の動的予後予測モデルの提案. 
            第45回医療情報学連合大会 (第26回日本医療情報学会学術大会) 論文集,
            日本医療情報学会, 2025.
            {' ('}
            <Link href={`/bib/tsutsusaki2025multimodal_ja.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link
              href={`https://pub.confit.atlas.jp/${locale}/event/jcmi2025/presentation/3-D-3-03`}
            >
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            <b>岩下 雄一郎</b>, 筒崎 乙華, 落合 梓香, 井上 達意, 野々宮 悠太, 光山 容仁, 仲子 聡一郎, 
            岩村 雅一, Muhammad Nabeel Asim, Andreas Dengel, 黄瀬 浩一. 
            マルチモーダルEHRを用いた動的予測ベンチマークの構築.
            第45回医療情報学連合大会 (第26回日本医療情報学会学術大会) 論文集,
            日本医療情報学会, 2025.
            {' ('}
            <Link href={`/bib/iwashita2025multimodal_ja.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link
              href={`https://pub.confit.atlas.jp/${locale}/event/jcmi2025/presentation/4-E-1-01`}
            >
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            大塚 遙, 岩田 基, <b>岩下 雄一郎</b>, 黄瀬 浩一. 生成 AI
            で画像を作りながら学べる英単語学習システム. インタラクション2025論文集, 情報処理学会, 2025.
            {' ('}
            <Link href={'https://www.interaction-ipsj.org/proceedings/2025/data/pdf/1B-28.pdf'}>PDF</Link>
            {')'}
            {' ('}
            <Link href={`/bib/otsuka2025generative_ja.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link
              href={
                'https://www.interaction-ipsj.org/proceedings/2025/data/bib/1B-28.html'
              }
            >
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            劉 少楠, 野々宮 悠太, <b>岩下 雄一郎</b>, 木村 誠一, 齋藤 美紅, 山崎
            桜花, 石丸 翔也, 仲子 聡一郎, 岡村 浩史, 岩村 雅一, 黄瀬 浩一, 新谷
            歩.
            集中治療室における再入室イベントを予測する機械学習ベースの生存時間解析モデルに時系列データが与える影響.
            第43回医療情報学連合大会 (第24回日本医療情報学会学術大会) 論文集,
            日本医療情報学会, 2023.
            {' ('}
            <Link href={`/bib/liu2023effects_ja.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link
              href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1940&lang=${locale}`}
            >
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            野々宮 悠太, 柳 健大, 栗生 薫, 内田 時央, <b>岩下 雄一郎</b>, 藤原
            史規, 山岡 幹太, 石丸 翔也, 仲子 聡一郎, 岡村 浩史, 岩村 雅一, 黄瀬
            浩一, 新谷 歩.
            集中治療室における短期的な死亡を予測する再帰型ニューラルネットワークを用いた動的予測モデルの提案：MIMIC-IVデータベースを利用した後方視的コホート研究.
            第43回医療情報学連合大会 (第24回日本医療情報学会学術大会) 論文集,
            日本医療情報学会, 2023.
            {' ('}
            <Link href={`/bib/nonomiya2023recurrent_ja.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link
              href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1941&lang=${locale}`}
            >
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            琴浦 陽南, 山本 航平, 堀川 昴輝, 高本 凌平, 野々宮 悠太,{' '}
            <b>岩下 雄一郎</b>, 栗生 薫, 石丸 翔也, 仲子 聡一郎, 岡村 浩史, 岩村
            雅一, 黄瀬 浩一, 新谷 歩.
            臨床テーブルデータと胸部X線画像を統合したツリー系機械学習モデルによるCOVID-19患者の予後予測.
            第43回医療情報学連合大会 (第24回日本医療情報学会学術大会) 論文集,
            日本医療情報学会, 2023.
            {' ('}
            <Link href={`/bib/kotoura2023tree_ja.bib`}>BibTeX</Link>
            {')'}
            {' ('}
            <Link
              href={`https://publication.imlab.jp/cgi-bin/publication_public.cgi?func=show_detail&id=1942&lang=${locale}`}
            >
              {t('link')}
            </Link>
            {')'}
          </li>
          <li>
            <b>岩下 雄一郎</b>, 岩田 基, Andrew W. Vargo, 黄瀬 浩一.
            英単語学習を長期的に継続するための適応型学習システムの開発.
            2023年電子情報通信学会総合大会講演論文集, 電子情報通信学会, 2023.
            (査読なし)
            {' ('}
            <Link href={`/bib/iwashita2023developing_ja.bib`}>BibTeX</Link>
            {')'}
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
    </>
  )
}
