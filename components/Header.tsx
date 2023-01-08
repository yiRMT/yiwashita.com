import Link from 'next/link';
import { useLocale } from '../hooks/useLocale';

export default function Header() {
  const { t } = useLocale();
  return (
    <header className='relative z-50'>
      <nav className="fixed top-0 left-0 right-0 bg-gray-300/70 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900/70 backdrop-blur-sm">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href={'/'} className="flex items-center text-gray-700">
            <a className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {t.NAME}
            </a>
          </Link>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-2" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link href={'/'}>
                  <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    {t.HOME}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/blog/'}>
                  <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    {t.BLOG}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/contact'}>
                  <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    {t.CONTACT}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/ja'} locale="ja">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    JA
                  </a>
                </Link>
              </li>
              <li>
                <div>
                  <Link href={'/en'} locale="en">
                    <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                      EN
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}