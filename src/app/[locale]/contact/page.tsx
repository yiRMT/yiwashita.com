import ContactForm from '@/components/contactform'
import { getI18n } from '@/locales/server'

export async function generateMetadata() {
  const t = await getI18n()
  return {
    title: `${t('contact')} - yiwashita.com`,
  }
}

export default async function Contact() {
  const t = await getI18n()

  return (
    <>
      <h1>{t('contact')}</h1>
      <div className="contact-container">
        <ContactForm />
      </div>
    </>
  )
}
