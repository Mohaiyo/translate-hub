<h1 align="center">
Translate Hub
</h1>

<div align="center">
利用云平台上的翻译 API 或 AI 功能，结合 Alfred 工作流程，实现快速翻译，提升您的工作效率。

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config) [![Alfy](https://img.shields.io/badge/Alfy-Sindre%20Sorhus-blue?color=black)](https://github.com/sindresorhus/alfy)

</div>

[English](./README.md) | **中文**

## 安装

你需要[ Node.js 18+](https://nodejs.org/en) 和 [Alfred 4](https://www.alfredapp.com/) 以上的版本 以及 [Powerpack](https://www.alfredapp.com/powerpack/).

### 使用 npm 安装

```bash
npm install -g @mohaiyo/translate-hub
```

### 使用 pnpm 安装

```bash
pnpm install -g @mohaiyo/translate-hub
```

### 手动安装

[下载工作流](https://github.com/Mohaiyo/translate-hub/releases)

## 变更日志

[变更日志](https://github.com/Mohaiyo/translate-hub/releases)

## 如何使用

### 如何设置 API 平台

打开 Alfred 并且输入`trc use [openai]`。可以看到内置的平台，选择你要使用的平台，内置的是 aliyun。

### 如何设置目标语言

打开 Alfred 并且输入`trc target [english]`。可以看到内置的目标语言选项，选择你要翻译成的目标语言，内置的是英语(en)。

### 如何使用翻译功能

使用前，请先设置你要使用的平台的对应的 API KEY。如何设置，请查看[设置环境变量](#设置环境变量)

打开 Alfred 并且输入`tr [输入你想要翻译的单词或者语句]`。例如: tr 谁是世界上最可爱的人儿？

按`enter`键或者`cmd+C`键复制翻译后的文本到剪贴板。

按`cmd+L`键以大文本显示翻译。

## 设置环境变量

|              name               | value |                     description                     |
| :-----------------------------: | :---: | :-------------------------------------------------: |
|   ALIBABA_CLOUD_ACCESS_KEY_ID   |       |   如果你使用阿里云翻译，请设置对应的 ACCES KEY ID   |
| ALIBABA_CLOUD_ACCESS_KEY_SECRET |       | 如果你使用阿里云翻译，请设置对应的 ACCES KEY SECRET |
|         OPENAI_API_KEY          |       |      如果你使用 OpenAI,请设置对应的 OpenAi Key      |

环境变量设置截图

![env config](./public/media/workflow-env-config.png)
![env variable](./public/media/workflow-env-variable.png)

## 热键

如果您下载工作流，则可能必须自己手动设置热键。

![trc hotkey](./public/media/trc-hotkey.png)
![hotkey config](./public/media/hotkey-config.png)

## 截图

![trc use](./public/media/trc-use.png)
![trc use](./public/media/trc-target.png)
![trc use](./public/media/after-translated.png)

## 相关

- [alfy](https://github.com/sindresorhus/alfy) - 使用 alfy 快速创建一个 Alfred 工作流
