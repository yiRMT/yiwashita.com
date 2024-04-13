/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  const data = JSON.parse(req.body)
  await transporter.sendMail({
    from: 'Yuichiro Iwashita <yiwashita.cu@gmail.com>',
    to: data.email,
    subject:
      '以下の内容でお問い合わせを受け付けました / Recieved your inquiries',
    text: `
    名前/Name: 
    ${data.name}

    メールアドレス/Email: 
    ${data.email}

    お問い合わせ内容/Inquiry: 
    ---------------------------------------------
    ${data.msg}
    ---------------------------------------------
    
    --
    Yuichiro Iwashita, B.Eng., Master's student

    Intelligent Media Processing Research Group,
    Dept. of Core Informatics,
    Graduate School of Informatics,
    Osaka Metropolitan University
    1-1 Gakuen-cho, Nakaku, Sakai, Osaka 599-8531, JAPAN

    Web: https://yiwashita.com/en

    E-mail (Personal): yiwashita.cu@gmail.com
    `,
  })

  res.status(200).json({
    success: true,
  })
}
