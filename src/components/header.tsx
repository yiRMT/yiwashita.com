'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCurrentLocale, useChangeLocale, useI18n } from "@/locales/client";

export default function Header() {
  const t = useI18n()
  const currentLocale = useCurrentLocale();
  const nextLocale = currentLocale === 'ja' ? 'en' : 'ja';
  const changeLocale = useChangeLocale();
  
  const currentPath = usePathname().replace(`${currentLocale}/`, '').replace(`${currentLocale}`, '')

  const regexList = [
    /\/projects*/,
    /\/posts*/
  ];

  return (
    <header className='site-header'>
      <div className='wrapper'>
        <div className='title-container'>
          <Link href='/'>{t('name')}</Link>
        </div>
        <nav className="nav-container">
          <ul>
            <li className={currentPath === '/' ? 'nav-active' : ''}>
              <Link href='/'>{t('home')}</Link>
            </li>
            <li className={regexList[0].test(currentPath) ? 'nav-active' : ''}>
              <Link href='/projects'>{t('projects')}</Link>
            </li>
            <li className={regexList[1].test(currentPath) ? 'nav-active' : ''}>
              <Link href='/posts'>{t('blog')}</Link>
            </li>
            <li className={currentPath === '/contact' ? 'nav-active' : ''}>
              <Link href='/contact'>{t('contact')}</Link>
            </li>
            <li>
              <div className="nav-switch" onClick={() => changeLocale(nextLocale)}>
                {nextLocale === 'ja' ? '日本語' : 'English'}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}