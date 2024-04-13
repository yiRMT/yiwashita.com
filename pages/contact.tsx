import React, { useState } from 'react'
import Head from 'next/head'
import { useLocale } from 'hooks/useLocale'

export default function Contact() {
  const { t } = useLocale()
  const pageTitle = `${t.CONTACT} - ${t.NAME}`

  const [form, setForm] = useState({
    name: '',
    email: '',
    msg: '',
  })

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        msg: form.msg,
      }),
    })
      .then((res) => {
        console.log('Response recieved')
        if (res.status === 200) {
          console.log('Response succeeded!')
          alert('Succeeded to send a message.')
          setForm({ name: '', email: '', msg: '' })
        } else {
          console.log(`Error: Status Code ${res.status}`)
          alert('Failed to send a message.')
        }
      })
      .catch((e) => {
        console.log(`Error: ${e}`)
      })
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>{t.CONTACT}</h1>
      <div className="contact-container">
        <form>
          <div className="form-item">
            <label>{t.FULLNAME}</label>
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
              placeholder={t.FULLNAME}
            />
          </div>
          <div className="form-item">
            <label>{t.EMAIL}</label>
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
              placeholder={t.EMAIL}
            />
          </div>
          <div className="form-item">
            <label>{t.COMMENT}</label>
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
              placeholder={t.COMMENT}
            />
          </div>
          <button
            onClick={async (e) => {
              handleSubmit(e)
            }}
            type="submit"
          >
            {t.SUBMIT}
          </button>
        </form>
      </div>
    </>
  )
}
