import Link from "next/link";
import { useLocale } from "../hooks/useLocale";

export default function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='site-footer'>
      <div className='wrapper'>
        <span>
          © {currentYear} Yuichiro Iwashita. All Rights Reserved.
        </span>
        {' '}
        <Link href='/privacy-policy'>
          {t.PRIVACY_POLICY}
        </Link>
      </div>
    </footer>
  );
};