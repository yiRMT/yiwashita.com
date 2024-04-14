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
        <div className='title-container'>
          <Link href={'/'}>{t.NAME}</Link>
        </div>
        <nav className="nav-container">
          <ul>
            <li className={currentPath === '/' ? 'nav-active' : ''}>
              <Link href='/'>{t.HOME}</Link>
            </li>
            <li className={regexList[0].test(currentPath) ? 'nav-active' : ''}>
              <Link href='/projects'>{t.PROJECTS}</Link>
            </li>
            <li className={regexList[1].test(currentPath) ? 'nav-active' : ''}>
              <Link href='/posts'>{t.BLOG}</Link>
            </li>
            <li className={currentPath === '/contact' ? 'nav-active' : ''}>
              <Link href='/contact'>{t.CONTACT}</Link>
            </li>
            <li>
              <div className='locale-switch-container'>
                <span>EN</span>
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
                <span>JA</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}