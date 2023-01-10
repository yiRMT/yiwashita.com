/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USER,
      clientId: process.env.MAIL_CLIENTID,
      clientSecret: process.env.MAIL_CLIENTSECRET,
      refreshToken: process.env.MAIL_REFRESHTOKEN,
      accessToken: process.env.MAIL_ACCESSTOKEN,
      expires: process.env.MAIL_EXPIRESIN
    },
  });

  const data = JSON.parse(req.body);
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: data.email,
    subject: '以下の内容でお問い合わせを受け付けました',
    text: `
    名前
    ${data.name}
    
    メールアドレス
    ${data.email}
    
    お問い合わせ内容
    ${data.msg}
    `,
  });

  res.status(200).json({
    success: true,
  });
};