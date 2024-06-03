'use client'

import { useI18n } from "@/locales/client";

export default function PrivacyPolicy() {
  const t = useI18n()

  return (
    <>
      <h1>{t('privacy-policy')}</h1>
      <p>{t('privacy-policy-fulltext')}</p>
    </>
  )
}