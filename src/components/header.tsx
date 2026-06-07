'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCurrentLocale, useChangeLocale, useI18n } from '@/locales/client'

export default function Header() {
  const t = useI18n()
  const currentLocale = useCurrentLocale()
  const nextLocale = currentLocale === 'ja' ? 'en' : 'ja'
  const changeLocale = useChangeLocale()

  const pathname = usePathname()
  const currentPath = pathname
    .replace(`/${currentLocale}/`, '/')
    .replace(`/${currentLocale}`, '/')

  const localePrefix = `/${currentLocale}`
  const regexList = [/\/projects*/, /\/posts*/, /\/publications*/]

  // Blog posts exist per-language (currently Japanese only), so switching the
  // locale on a post detail page would land on a missing translation. Disable
  // the language button there (the post list at /posts is unaffected).
  const isPostDetail = /^\/posts\/.+/.test(currentPath)

  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="title-container">
          <Link href={`${localePrefix}`}>{t('name')}</Link>
        </div>
        <nav className="nav-container">
          <ul>
            <li className={currentPath === '/' ? 'nav-active' : ''}>
              <Link href={`${localePrefix}`}>{t('home')}</Link>
            </li>
            <li className={regexList[2].test(currentPath) ? 'nav-active' : ''}>
              <Link href={`${localePrefix}/publications`}>
                {t('publications')}
              </Link>
            </li>
            <li className={regexList[0].test(currentPath) ? 'nav-active' : ''}>
              <Link href={`${localePrefix}/projects`}>{t('projects')}</Link>
            </li>
            <li className={regexList[1].test(currentPath) ? 'nav-active' : ''}>
              <Link href={`${localePrefix}/posts`}>{t('blog')}</Link>
            </li>
            <li>
              <div
                className={`nav-switch${
                  isPostDetail ? ' nav-switch-disabled' : ''
                }`}
                onClick={
                  isPostDetail ? undefined : () => changeLocale(nextLocale)
                }
                aria-disabled={isPostDetail}
              >
                {nextLocale === 'ja' ? '日本語' : 'English'}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
