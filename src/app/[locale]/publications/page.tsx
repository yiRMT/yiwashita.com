import { Fragment } from 'react'
import Link from 'next/link'
import { getI18n } from '@/locales/server'
import { getPublicationGroups } from '@/libs/publications'
import { PublicationCategory } from '@/types/publications'
import { buildMetadata } from '@/libs/metadata'

const CATEGORY_HEADING: Record<PublicationCategory, string> = {
  journal: 'journal-papers',
  international: 'international-conference-papers',
  misc: 'misc-papers',
  domestic: 'domestic-conference-papers',
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const t = await getI18n()
  return buildMetadata({
    title: `${t('publications')} - yiwashita.com`,
    description: t('publications-description'),
    locale,
    path: '/publications',
  })
}

export default async function Publications() {
  const groups = getPublicationGroups()
  const t = await getI18n()

  return (
    <>
      <h1>{t('publications')}</h1>
      {groups.map(({ category, publications }) => (
        <Fragment key={category}>
          <h2>{t(CATEGORY_HEADING[category] as 'journal-papers')}</h2>
          <div className="publications">
            <ul>
              {publications.map((pub) => (
                <li key={pub.key}>
                  {pub.authors.map((author, i) => (
                    <Fragment key={i}>
                      {i > 0 && ', '}
                      {author.bold ? <b>{author.name}</b> : author.name}
                    </Fragment>
                  ))}
                  {'. '}
                  {pub.title}
                  {'. '}
                  {pub.venue}
                  {'.'}
                  {pub.equalContrib && ` (${t('equal-contributions')})`}
                  {pub.notPeerReviewed && ` (${t('not-peer-reviewed')})`}
                  {' ('}
                  <Link href={pub.bibPath}>BibTeX</Link>
                  {')'}
                  {pub.url && (
                    <>
                      {' ('}
                      <Link href={pub.url}>{t('link')}</Link>
                      {')'}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Fragment>
      ))}
    </>
  )
}
