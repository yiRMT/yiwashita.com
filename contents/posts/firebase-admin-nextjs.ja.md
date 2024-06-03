---
title: "Next.jsにFirebase Adminを導入したときにハマったこと"
date: '2023-05-26'
image: {}
tags: ["Tech", "Firebase", "Next.js"]
---
これから実験を行う関係で，Firebase上に置かれた実験参加者のアカウント管理を便利にするWebアプリを作った．
一応コードは[ここ](https://github.com/yiRMT/peer-pressure-admin)においている．

その際に，[Firebase Admin SDK](https://firebase.google.com/docs/admin/setup?hl=ja)をNext.jsによるアプリに導入しようとしたのだが，いくつかハマったポイントがあったので紹介する．
> Firebase Admin SDKは管理者権限でFirebaseの操作が可能なフレームワークである．Node.jsやPython版などが存在するのだが，今回はNode.js版を導入した．https://firebase.google.com/docs/admin/setup?hl=ja

Firebase Admin SDKはサーバーサイドで使うフレームワークらしくて，クライアントサイドでは動作しない．
実は私はNext.jsのページファイル上でFirebase Admin SDKを実行しようとしてもできなくて詰まっていた😇

では，Next.jsで動かすにはどうすれば良いか？
Next.jsではサーバーサイドの処理を動かす機能がいくつかあり，その一つであるAPI Routesを利用することで解決した．

以下ではAPI Routesを使ってFirebase Admin SDKの機能を実行する例を説明する．

## 管理用ファイルの作成

まずFirebaseのプロジェクトのコンソールからFirebase Admin SDKの秘密鍵を入手して欲しい．
これは辞書で与えられるので，その辞書を環境変数として
```
FIREBASE_SERVICE_ACCOUNT_KEY=ここに秘密鍵の辞書をペースト
```
を設定してほしい．
`.env`ファイルなどに書けば良い．

次に，Firebaseの管理用ファイルを用意する．例えば`/firebase/server.js`を作成する．
```
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

var app;

if (!getApps()?.length) {
  app = initializeApp({
    credential: cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
    ),
  })
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

## APIの作成

Firebase Admin SDKの機能を使えるようにする．
ここでは例として，あるUIDに対応するユーザデータを取得してみる．

まず`/pages/api/getuser.js`を作成する．
そして，`getuser.js`に以下のようなコードを書く．

```
import { auth } from '../../firebase/server'

const handler = async (req, res) => {
  const uid = req.body.uid;

  try {
    const userRecord = await auth.getUser(uid);
    console.log(`Successfully fetched user data: ${userRecord.toJSON()}`)
    res.status(200).json(userRecord)
  } catch (error) {
    console.log('Error fetching user data:', error);
    res.status(500).json({ error });
  }
}

export default handler
```

これでAPIが作られた．
このAPIをページなどから呼び出すことで実行できる．

## APIの呼び出し

例えば`/pages/index.js`から上記のAPIを呼び出す例を考えてみる．
`index.js`の中身は省略するが，例えば
```
const getUser = async (uid) => {
  try {
    const response = await fetch('/api/getuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ uid: uid }),
    });
  } catch (error) {
    console.log(error);
  }
}
```
を実行すると引数で与えられたuidのユーザデータを取得できる．

こんな感じに，Next.jsではアプリ内部にREST APIのようなAPIを作成することでサーバーサイドの処理を実行できる．