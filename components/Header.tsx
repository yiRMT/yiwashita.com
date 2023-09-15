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
    <header className='sticky flex flex-wrap sm:justify-start z-50'>
      <nav className="w-full sm:flex sm:items-center fixed top-0 left-0 right-0 bg-gray-300/70 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-slate-900/70 backdrop-blur">
        <div className="flex items-center justify-between">
          <Link href={'/'} className=''>
            <a className="flex-none text-xl font-semibold text-gray-700 dark:text-white">
              {t.NAME}
            </a>
          </Link>
        </div>
        <div className="basis-full grow block" >
          <ul className='flex flex-wrap gap-3 sm:gap-5 mt-5 items-center sm:justify-end sm:mt-0 sm:pl-5'>
            <li>
              <Link href={'/'}>
                {currentPath === '/' ? (
                  <a className="text-gray-400 dark:text-white hover:text-gray-400 dark:hover:text-white">
                    {t.HOME}
                  </a>
                ) : (
                  <a className="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white">
                    {t.HOME}
                  </a>
                )}
              </Link>
            </li>
            <li>
              <Link href={'/projects/'}>
                {regexList[0].test(currentPath) ? (
                  <a className="text-gray-400 dark:text-white hover:text-gray-400 dark:hover:text-white">
                    {t.PROJECTS}
                  </a>
                ) : (
                  <a className="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white">
                    {t.PROJECTS}
                  </a>
                )}
              </Link>
            </li>
            <li>
              <Link href={'/posts/'}>
                {regexList[1].test(currentPath) ? (
                  <a className="text-gray-400 dark:text-white hover:text-gray-400 dark:hover:text-white">
                    {t.BLOG}
                  </a>
                ) : (
                  <a className="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white">
                    {t.BLOG}
                  </a>
                )}
              </Link>
            </li>
            <li>
              <Link href={'/contact'}>
                {currentPath === '/contact' ? (
                  <a className="text-gray-400 dark:text-white hover:text-gray-400 dark:hover:text-white">
                    {t.CONTACT}
                  </a>
                ) : (
                  <a className="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white">
                    {t.CONTACT}
                  </a>
                )}
              </Link>
            </li>
            <li>
              <div className='flex place-items-center'>
                <span className='text-gray-700 dark:text-gray-400'>EN</span>
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
                <span className='text-gray-700 dark:text-gray-400'>JA</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}