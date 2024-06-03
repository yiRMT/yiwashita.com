---
title: "VSCodeでLaTeXを使う"
date: '2023-05-13'
image: {}
tags: ["Tech", "Research"]
---
最近はLaTeXをOverleafやCloudlatexで使う人が増えてきたが，私はローカル，特にVSCodeで動かすことを推している．
確かに，LaTeXの環境構築は厄介である．
しかし，やはり自分の好みのエディタで作業する方が執筆に集中できると思う．
VSCodeでLaTeXを動かすとなればLaTeX Workshopという拡張機能を使用するが，設定方法がわからない人が多いと思う．
今回は私の設定を紹介するので，ぜひ参考にしてほしい．

> TeXLiveがローカルにインストールされていること，LaTeX WorkshopがVSCodeにインストールされていることを前提とします

拡張機能の設定はGUIでもできるが，慣れてくるとCUIの方が使いやすいので，今回は`settings.json`を使って設定する．

## settings.jsonを開く

ツールバーの「表示」→「コマンドパレット」→"settings"などと入力すると次の画像のような項目があると思うので，それを開く．
![settings.jsonを開く](/posts/vscode-latex/settings.png)

## settings.jsonの記入

このブログの末尾に`settings.json`を載せたので，それをコピペして使ってほしい．
ここではその概要を簡単に説明する．[^1]

LaTeX Workshopのコンパイルは2つの要素からなる．一つはツール（tools）．もう一つはレシピ（recipes）である．
ツールではコンパイル時のLaTeXの設定をする．
設定項目にあるnameはツールにつける名称で，commandはコンパイルに使うLaTeXドライバである．argsはコンパイル時の引数である．
こうして設定したツールを使ってレシピでワークフローを作成する．
例えばコンパイルを2回連続で行うレシピを作ることができる．

## settings.jsonのサンプル

```json
{
    "latex-workshop.latex.tools": [
        {
            "name": "latexmk",
            "command": "latexmk",
            "args": [
                "-l",
                "-synctex=1",
                "-interaction=nonstopmode",
                "%DOCFILE%.tex",
                "-file-line-error",
                "-halt-on-error",
            ]
        },
        {
            "name": "ptex2pdf",
            "command": "ptex2pdf",
            "args": [
                "-l",
                "-ot",
                "-interaction=nonstopmode",
                "-synctex=1 -file-line-error",
                "%DOCFILE%.tex"
            ],
            "env": {
                "PATH": "/usr/local/texlive/2022/bin/universal-darwin/"
            }
        },
    ],

    "latex-workshop.latex.recipes": [
        {
            "name": "latexmk 🔃",
            "tools": [
                "latexmk"
            ]
        },
        {
            "name": "pLaTeX2e",
            "tools": [
                "ptex2pdf"
            ]
        },
        {
            "name": "toolchain",
            "tools": [
                "latexmk"
            ]
        },
        {
            "name": "pLaTeX2e x2",
            "tools": [
                "ptex2pdf",
                "ptex2pdf"
            ]
        },
        {
            "name": "pLaTeX2e x3",
            "tools": [
                "ptex2pdf",
                "ptex2pdf",
                "ptex2pdf"
            ]
        },
        
    ],
    
    "latex-workshop.latex.autoClean.run": "onBuilt",
    "latex-workshop.latex.clean.fileTypes": [
        "*.log",
        "*.aux",
        "*.bbl",
        "*.blg",
        "*.idx",
        "*.ind",
        "*.lof",
        "*.lot",
        "*.out",
        "*.acn",
        "*.acr",
        "*.alg",
        "*.glg",
        "*.glo",
        "*.gls",
        "*.ist",
        "*.fls",
        "*.fdb_latexmk",
        "*_minted*",
        "*.snm",
        "*.nav",
        "*.vrb",
        "*.dvi",
    ],
    
    // Intellisense
    "latex-workshop.intellisense.package.enabled": true,
    
    // How to open pdf when TeX file has compiled
    "latex-workshop.view.pdf.viewer": "tab",
    
    // SyncTeX
    "latex-workshop.view.pdf.internal.synctex.keybinding": "ctrl-click",
    "latex-workshop.synctex.afterBuild.enabled": true,
    "latex-workshop.synctex.path": "synctex",
    "latex-workshop.synctex.synctexjs.enabled": true,
}
```


[^1]: 詳しい説明は[このWiki](https://github.com/James-Yu/LaTeX-Workshop/wiki/Compile)に載っている