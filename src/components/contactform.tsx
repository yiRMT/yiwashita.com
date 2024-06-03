'use client'

import { useState } from 'react'
import { useI18n } from '@/locales/client'

export default function ContactForm() {
  const t = useI18n()

  const [form, setForm] = useState({
    name: '',
    email: '',
    msg: '',
  })

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const response = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        msg: form.msg,
      }),
    })

    if (response.ok) {
      alert('Succeeded to send a message.')
      setForm({ name: '', email: '', msg: '' })
    } else {
      alert('Failed to send a message.')
    }
  }

  return (
    <form>
      <div className="form-item">
        <label>{t('full-name')}</label>
        <input
          onChange={(e) => {
            const val = e.currentTarget.value
            setForm((props) => ({
              ...props,
              name: val !== null ? val : '',
            }))
          }}
          value={form.name}
          name="name"
          type="text"
          placeholder={t('full-name')}
        />
      </div>
      <div className="form-item">
        <label>{t('email')}</label>
        <input
          onChange={(e) => {
            const val = e.currentTarget.value
            setForm((props) => ({
              ...props,
              email: val !== null ? val : '',
            }))
          }}
          value={form.email}
          name="email"
          type="email"
          placeholder={t('email')}
        />
      </div>
      <div className="form-item">
        <label>{t('body')}</label>
        <textarea
          onChange={(e) => {
            const val = e.currentTarget.value
            setForm((props) => ({
              ...props,
              msg: val !== null ? val : '',
            }))
          }}
          value={form.msg}
          name="text"
          placeholder={t('body')}
        />
      </div>
      <button onClick={handleSubmit} type="submit">
        {t('submit')}
      </button>
    </form>
  )
}
