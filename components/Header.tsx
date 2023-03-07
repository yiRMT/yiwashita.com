import Link from 'next/link';
import { useLocale } from '../hooks/useLocale';
import React, {useState} from 'react';

export default function Header() {
  const { t } = useLocale();

  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <header className='sticky flex flex-wrap sm:justify-start z-50'>
      <nav className="w-full sm:flex sm:items-center fixed top-0 left-0 right-0 bg-gray-300/70 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900/70 backdrop-blur">
        <div className="flex items-center justify-between">
          <Link href={'/'} className=''>
            <a className="flex-none text-xl font-semibold text-gray-700 dark:text-white">
              {t.NAME}
            </a>
          </Link>
          
          <div className="sm:hidden">
            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation" onClick={toggleMenu}>
              <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-with-collapse" className="hidden basis-full grow sm:block" >
          <ul className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5'>
            <li>
              <Link href={'/'}>
                <a className="
                  block py-2 pr-4 pl-3
                  text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white
                  border-b sm:border-0 border-gray-100 dark:border-gray-700
                  sm:hover:bg-transparent sm:p-0 hover:bg-gray-50 dark:hover:bg-gray-700">
                  {t.HOME}
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/blog/'}>
                <a className="
                  block py-2 pr-4 pl-3
                  text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white
                  border-b sm:border-0 border-gray-100 dark:border-gray-700
                  sm:hover:bg-transparent sm:p-0 hover:bg-gray-50 dark:hover:bg-gray-700">
                  {t.BLOG}
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/contact'}>
                <a className="
                  block py-2 pr-4 pl-3
                  text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white
                  border-b sm:border-0 border-gray-100 dark:border-gray-700
                  sm:hover:bg-transparent sm:p-0 hover:bg-gray-50 dark:hover:bg-gray-700">
                  {t.CONTACT}
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/ja'} locale="ja">
                <a className="
                  block py-2 pr-4 pl-3
                  text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white
                  border-b sm:border-0 border-gray-100 dark:border-gray-700
                  sm:hover:bg-transparent sm:p-0 hover:bg-gray-50 dark:hover:bg-gray-700">
                  JA
                </a>
              </Link>
            </li>
            <li>
              <div>
                <Link href={'/en'} locale="en">
                  <a className="
                    block py-2 pr-4 pl-3
                    text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white
                    border-b sm:border-0 border-gray-100 dark:border-gray-700
                    sm:hover:bg-transparent sm:p-0 hover:bg-gray-50 dark:hover:bg-gray-700">
                    EN
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}