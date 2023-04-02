import Head from "next/head";
import React, { useState } from "react";
import { useLocale } from '../hooks/useLocale';

export default function Contact () {
  const { t } = useLocale()
  const contactTitle = `${t.CONTACT} - ${t.NAME}`

  const [form, setForm] = useState({
    name: '',
    email: '',
    msg: '',
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        msg: form.msg,
      }),
    })
    .then((res) => {
      console.log('Response recieved');
      if (res.status === 200) {
        console.log('Response succeeded!');
        alert('Succeeded to send a message.')
        setForm({name: '', email: '', msg: ''})
      } else {
        console.log(`Error: Status Code ${res.status}`);
      }
    })
    .catch((e) => {
      console.log(`Error: ${e}`);
    });
  };

  return (
    <>
      <Head>
        <title>{contactTitle}</title>
      </Head>
      <div className="h-full">
        <div className="flex flex-col items-center max-w-2xl mx-auto md:px-0 px-6 py-20 gap-5">
          <h1 className="font-semibold md:text-4xl text-3xl">
            {t.CONTACT}
          </h1>
          <form className="py-10 w-full">
            <div className="flex flex-col mb-6 gap-2">
              <label className="text-gray-500 font-bold text-left">
                {t.FULLNAME}
              </label>
              <input
                className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={(e) => {
                  const val = e.currentTarget.value;
                  setForm((props) => ({
                    ...props,
                    name: val !== null ? val : '',
                  }));
                }}
                value={form.name}
                name="name"
                type="text"
                placeholder={t.FULLNAME}
              />
            </div>
            <div className="flex flex-col mb-6 gap-2">
              <label className="text-gray-500 font-bold text-left">
                {t.EMAIL}
              </label>
              <input
                onChange={(e) => {
                  const val = e.currentTarget.value;
                  setForm((props) => ({
                    ...props,
                    email: val !== null ? val : '',
                  }));
                }}
                value={form.email}
                name="email"
                type="text"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder={t.EMAIL}
              />
            </div>
            <div className="flex flex-col mb-6 gap-2">
              <label className="text-gray-500 font-bold text-left">
                {t.COMMENT}
              </label>
              <textarea
                onChange={(e) => {
                  const val = e.currentTarget.value;
                  setForm((props) => ({
                    ...props,
                    msg: val !== null ? val : '',
                  }));
                }}
                value={form.msg}
                name="text"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder={t.COMMENT}
              />
            </div>
            <button
              className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
              onClick={async (e) => {
                handleSubmit(e);
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
};