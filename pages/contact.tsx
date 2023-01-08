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
      <div className="h-screen">
        <form className="w-full max-w-sm py-20">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
                placeholder="Name"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={(e) => {
                  const val = e.currentTarget.value;
                  setForm((props) => ({
                    ...props,
                    email: val !== null ? val : '',
                  }));
                }}
                name="email"
                type="text"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Comment
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                onChange={(e) => {
                  const val = e.currentTarget.value;
                  setForm((props) => ({
                    ...props,
                    msg: val !== null ? val : '',
                  }));
                }}
                name="text"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Comment"
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                onClick={async (e) => {
                  await handleSubmit(e);
                }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
};