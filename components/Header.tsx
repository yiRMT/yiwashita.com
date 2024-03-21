import Link from 'next/link';
import { useLocale } from '../hooks/useLocale';
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import { Switch } from '@mui/material';

export default function Header() {
  const { locale, t } = useLocale();
  const router = useRouter()
  const anotherLocale = locale === 'ja' ? 'en' : 'ja';
  const currentPath = router.asPath;
  const regexList = [
    /\/projects*/,
    /\/posts*/
  ];

  return (
    <header className='site-header'>
      <div className='wrapper'>
        <div className='logo-container'>
          <Link href={'/'}>
            <a 
              className={
                'nav-link ' +
                  (router.asPath === '/' || router.asPath === ''
                    ? 'nav-active'
                    : '')
              }
            >
              {t.NAME}
            </a>
          </Link>
        </div>
        <nav className="nav-container">
          <ul>
            <li>
              <Link href={'/'}>
                {currentPath === '/' ? (
                  <a className=''>
                    {t.HOME}
                  </a>
                ) : (
                  <a>
                    {t.HOME}
                  </a>
                )}
              </Link>
            </li>
            <li>
              <Link href={'/projects/'}>
                {regexList[0].test(currentPath) ? (
                  <a>
                    {t.PROJECTS}
                  </a>
                ) : (
                  <a>
                    {t.PROJECTS}
                  </a>
                )}
              </Link>
            </li>
            <li>
              <Link href={'/posts/'}>
                {regexList[1].test(currentPath) ? (
                  <a>
                    {t.BLOG}
                  </a>
                ) : (
                  <a>
                    {t.BLOG}
                  </a>
                )}
              </Link>
            </li>
            <li>
              <Link href={'/contact'}>
                {currentPath === '/contact' ? (
                  <a>
                    {t.CONTACT}
                  </a>
                ) : (
                  <a>
                    {t.CONTACT}
                  </a>
                )}
              </Link>
            </li>
            <li>
              <div className='lang-container'>
                <span className=''>EN</span>
                <Switch
                  checked={locale === 'ja'}
                  onChange={() => {}}
                  onClick={() => {
                    if (router.asPath === '/') {
                      router.push('/', '/', { locale: anotherLocale })
                    } else {
                      router.push(router.asPath, router.asPath, { locale: anotherLocale })
                    }
                  }}
                  color="default" 
                />
                <span className=''>JA</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}