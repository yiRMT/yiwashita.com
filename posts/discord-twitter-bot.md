---
title: "Discordツイ速Botの作り方（2023年Ver）"
date: '2023-04-01'
image: {}
tags: ["Discord", "Twitter", "Zapier", "Tech"]
---
*本記事はZennに投稿した[記事](https://zenn.dev/rmt_drums/articles/discord-twitter-bot)と同じ内容です．*

みなさんはあるユーザの最新ツイートをDiscordやSlackに自動投稿したいと思ったことはありませんか？例えばニュースツイートを自動投稿して〇〇タイムズを用意したら便利ですよね。
これまで、タスク自動化サービスの[IFTTT](https://ifttt.com/)がそれを実現し、多くのユーザに使われてきました。しかし、TwitterがAPIの規約を改正したことでIFTTTなどのタスク自動化サービスがTwitterをサポートしなくなってきています。
そんな中、[Zapier](https://zapier.com/)は今後もTwitterをサポートすると発表しました🎉
https://twitter.com/zapier/status/1624079511783616514?s=20

本記事ではZapierを使ってDiscordに最新ツイートを自動投稿する方法を紹介します。

# Zapier

## アカウントの作成

まずは[こちら](https://zapier.com/)からZapierアカウントを作成してください。
https://zapier.com/

## Zapの作成

![Zapの作成](/posts/discord-twitter-bot/create-zap.png)

アカウントが作成できたら、自動化フローを設定していきます。ZapierではこのフローのことをZapと呼びます。

Zapierのダッシュボードを開き、**+ Create Zap**をクリックしてください。

### Triggerの設定

![Triggerの設定](/posts/discord-twitter-bot/trigger.png)

Triggerでは各種APIにリクエストを送り、そのレスポンスを収集することを行います。今回はTwitter APIにリクエストを送り、ツイートデータを収集します。

まずアプリを設定します。ここでは**Twitter**を選択してください。次に、以下の設定を行ってください。

- Event: **User Tweet**を選択
- Account: あなたのTwitterアカウントを登録してください。
- Trigger: Discordに投稿したいTwitterのユーザ名を入力してください。（例: @Twitter）

Testで投稿データを正しく収集できるか試してみましょう。

### Actionの設定

![Actionの設定](/posts/discord-twitter-bot/action.png)

ActionではTriggerで収集したデータを編集してアウトプットすることを行います。今回はTriggerで収集したデータから最新ツイートを抽出し、Discordにメッセージとして投稿することを行います。

まずアプリとして**Discord**を選択してください。次に、以下の設定を行ってください。

* Event: **Send Channel Message**を選択してください。
* Account: あなたがメッセージを投稿したいDiscordサーバを登録してください。登録すると、DiscordサーバにZapierというBotが追加されます。
* Action: メッセージの投稿内容を登録します。
  * Channel (必須): 投稿先チャンネル名
  * Message Text (必須): メッセージ本文。Triggerで収集したデータを選択します。まずはTextのみで良いでしょう。
  * Bot Name: ボット名。必須ではありませんが、ボットに名前をつけてあげると面白いでしょう。
  * Bot Icon: ボットのアイコン。これも必須ではありませんが、Twitterのプロフィール画像を設定してはどうでしょうか？

TestでメッセージをDiscordのチャンネルに投稿できるかテストしてみましょう。

## Publish

![Publish](/posts/discord-twitter-bot/publish.png)

最後に、作成した自動化フローを公開しましょう。最後に表示される**Publish Zap**をクリックするか、右上の**Publish**をクリックすることで公開されます。

以上で自動化フローの作成は終了です。

# 補足

* ZapierもIFTTTと同様にTwitter APIを使ったサービスをいつか停止するかもしれません。
* 自動化タスクを1回動かすごとに1 Taskを消費します。無料プランでは100回まで実行可能です。また、5つまで自動化フローを作成できます。
* 今回はDiscordにメッセージを投稿する方法を紹介しましたが、Slackに投稿することも可能です。
* ZapierでWebhookを使って実装することも可能ですが、有料です。