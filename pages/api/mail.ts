/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    },
  });

  const data = JSON.parse(req.body);
  await transporter.sendMail({
    from: 'Yuichiro Iwashita <yiwashita.cu@gmail.com>',
    to: data.email,
    subject: '以下の内容でお問い合わせを受け付けました / Recieved your inquiries',
    text: `
    名前/Name: 
    ${data.name}

    メールアドレス/Email: 
    ${data.email}

    お問い合わせ内容/Inquiry: 
    ---------------------------------------------
    ${data.msg}
    ---------------------------------------------
    
    #############################################
    Yuichiro Iwashita, B4 (undergraduate)
    Intelligent Media Processing Group,
    College of Engineering, Osaka Prefecture University

    E-mail (Personal): yiwashita.cu@gmail.com
    E-mail (University): sdb01167@st.osakafu-u.ac.jp
    #############################################
    `,
    html: `
    <p>
    名前/Name: <br>
    ${data.name}<br>
    <br>
    メールアドレス/Email: <br>
    ${data.email}<br>
    <br>
    お問い合わせ内容/Inquiry: <br>
    ---------------------------------------------<br>
    ${data.msg}<br>
    ---------------------------------------------<br>
    <br>
    #############################################<br>
    <b>Yuichiro Iwashita</b><br>
    Intelligent Media Processing Group,<br>
    College of Engineering, Osaka Prefecture University<br>
    <br>
    E-mail (Personal): yiwashita.cu@gmail.com <br>
    E-mail (University): sdb01167@st.osakafu-u.ac.jp <br>
    #############################################
    </p>
    `,
  });

  res.status(200).json({
    success: true,
  });
};