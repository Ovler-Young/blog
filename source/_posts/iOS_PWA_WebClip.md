---
title: 在 iOS 上为网站添加 PWA 支持
date: 2025-10=16 11:10:00
updated: 2025-10-16 11:10:00
tags:
  - [PWA]
  - [iOS]
  - [WebClip]
urlname: iOS-PWA-WebClip
categories:
- Technology
---

## 最初的方案

之前一直在用这个方法来手动给网站添加 PWA 支持：
https://notes.alinpanaitiu.com/Install-any-website-as-PWA-on-iOS

## 遇到的问题

但是呢，在 NotebookLM (https://notebooklm.google) 上这个方式就失效了 😭

问题的根源在于：

> The method doesn't work on websites with a more restrictive [Content Security Policy](https://content-security-policy.com/) because the manifest has to be fetched from an external host (*api.lowtechguys.com* in this case).

简单来说，就是这个网站的内容安全策略比较严格，不允许从外部主机获取 manifest 文件。

## 寻找替代方案

虽然之前设置过 MITM，但实在不想通过这么暴力的方法来修改了，还折腾。于是尝试找替代方案。

突然想起来 WebClip 似乎也可以用来强制 PWA！于是开始尝试创建 WebClip。

## 探索过程

安装 WebClip 需要描述文件。我记得 LiveContainer (https://github.com/LiveContainer/LiveContainer) 利用了 WebClip 来做快速启动，于是去翻了一圈它的 GitHub。

找到了[这个 PR](https://github.com/LiveContainer/LiveContainer/pull/62) 尝试引入相关功能，通过它比较详细地了解了 WebClip 的相关内容～

## 最终解决方案

经过一番搜索，最终找到了完美的工具：
- 项目地址：https://github.com/aolose/webClip
- 在线 Demo：https://ivi.cx

Works Perfectly！