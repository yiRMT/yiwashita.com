import { createI18nServer } from 'next-international/server'

export const { getI18n } = createI18nServer({
  ja: () => import('./ja'),
  en: () => import('./en'),
})
