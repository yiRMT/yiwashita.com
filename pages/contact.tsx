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
      <div className="flex flex-col gap-5">
        <form className="my-10">
          <div className="flex flex-col my-6 gap-2">
            <label className="font-bold">{t.FULLNAME}</label>
            <input
              className=" bg-gray-200 dark:bg-slate-200 rounded p-4 text-gray-70 dark:text-slate-800 focus:bg-white transition"
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
          <div className="flex flex-col my-6 gap-2">
            <label className="font-bold">{t.EMAIL}</label>
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
              className="bg-gray-200 dark:bg-slate-200 rounded p-4 text-gray-70 dark:text-slate-800 focus:bg-white transition"
              placeholder={t.EMAIL}
            />
          </div>
          <div className="flex flex-col my-6 gap-2">
            <label className="font-bold">{t.COMMENT}</label>
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
              className="bg-gray-200 dark:bg-slate-200 rounded p-4 text-gray-70 dark:text-slate-800 focus:bg-white transition"
              placeholder={t.COMMENT}
            />
          </div>
          <button
            className="w-full shadow bg-gray-700 hover:bg-gray-600 dark:bg-slate-900 hover:dark:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition"
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
