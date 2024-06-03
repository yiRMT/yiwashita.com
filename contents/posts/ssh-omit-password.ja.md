---
title: "SSH接続でパスワードの入力を省略したい"
date: '2022-11-20'
image: {}
tags: ["Linux", "SSH", "Tech"]
---
> 本記事はZennに投稿した[記事](https://zenn.dev/rmt_drums/articles/173b4536f1c6e6)と同じ内容です．

私はよく研究室のサーバにSSH接続するのですが，毎回パスワードを入力するのが面倒になってきました．特にVSCodeでリモート接続するとき，GUIでディレクトリにアクセスするたびにパスワードが聞かれて鬱陶しいです笑．

これを解決する方法がないかと調べていたところ，公開鍵認証を行うことでパスワード入力を省略できることを学んだので，備忘録も兼ねてその手順をみなさんに共有できたらと思います．

この記事では必要最低限の情報しか書いていませんので，オプションなど詳しい情報が欲しい場合は下に挙げた参考サイトなどを読んでください．

# 手順
## キーペアを作成する
まずキーペア（公開鍵と秘密鍵のペア）を作成する必要があります．こちらを実行してください
```bash
hoge@client: ~$ ssh-keygen -t rsa -b 4096
```
以下が実行結果の例です．
- `Enter file in which to save the key (/Users/hoge/.ssh/id_rsa):`はキーペアをどこに保存するか聞いています．指定せずにenterを押せば括弧内の場所に格納されます．
- `Enter passphrase (empty for no passphrase)`が聞かれると思いますが，**何も入力せずにenterを押してください**．こうすることでSSH接続でパスワード入力を省略できるようになります．
```
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/hoge/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again: 
Your identification has been saved in /Users/hoge/.ssh/id_rsa.
Your public key has been saved in /Users/hoge/.ssh/id_rsa.pub.
The key fingerprint is:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
The key's randomart image is:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 公開鍵をサーバにコピーする
上で作成した公開鍵（`id_rsa.pub.`)をサーバに渡します．オプションを指定することで鍵を指定することもできますが，ここでは省略します．
```bash
hoge@client: ~$ ssh-copy-id サーバのユーザ名@サーバのホスト名
```
# 動作確認
```bash
hoge@client: ~$ ssh サーバのユーザ名@サーバのホスト名
```
を実行してみてパスワードが聞かれないか確認してみてください．パスワードが聞かれる場合は上の「キーペアを作成する」で誤ってパスフレーズを指定してしまってる可能性があります．

# 補足事項
## `ssh-keygen`に関する補足
### オプション
| オプション | 説明 |
| ---- | ---- |
| -t type | 暗号化方式を指定する．typeにはrsa, dsaなどが入る．デフォルトはrsa． |
| -b bits | ビット長．デフォルトは2048bit． |
| -f | 秘密鍵ファイルのファイル名を指定する． 同階層に公開鍵も作成される．デフォルトは`~/.ssh/`配下． |

詳しくは[こちら](https://docs.oracle.com/cd/E56342_01/html/E54074/ssh-keygen-1.html)をご確認ください

# 参考
- https://tech-blog.rakus.co.jp/entry/20210727/ssh
- https://qiita.com/tag1216/items/5d06bad7468f731f590e
- https://qiita.com/kazokmr/items/754169cfa996b24fcbf5