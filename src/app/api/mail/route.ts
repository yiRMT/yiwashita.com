import type { NextApiRequest, NextApiResponse } from 'next'

export async function POST(req: Request): Promise<Response> {
  const nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  const data = await req.json() as { name: string, email: string, msg: string }
  try {
    await transporter.sendMail({
      from: 'Yuichiro Iwashita <contact@yiwashita.com>',
      to: `${data.name} <${data.email}`,
      cc: 'Yuichiro Iwashita <contact@yiwashita.com>',
      subject:
        '以下の内容でお問い合わせを受け付けました / Recieved your inquiries',
      text: `名前 / Full Name:
${data.name}

メールアドレス / Email:
${data.email}

お問い合わせ内容 / Inquiry:
${data.msg}

--
Yuichiro Iwashita, B.Eng., Master's student

Intelligent Media Processing Research Group,
Dept. of Core Informatics,
Graduate School of Informatics,
Osaka Metropolitan University
1-1 Gakuen-cho, Nakaku, Sakai, Osaka 599-8531, JAPAN

Web: https://yiwashita.com/en

E-mail (Personal): contact@yiwashita.com`,
    })
  } catch (error: any) {
    return new Response('Server error', { status: 500 })
  }

  return new Response('Success', { status: 200 })
}
