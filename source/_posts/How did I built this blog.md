---
title: How did I built this blog
date: 2022-03026 20:36:15
tags:
  - [hexo]
  - [blog]
---

记录了这个站的建立历程

<!-- more -->

# How did I built this blog

## 零：内容框架、托管服务等的选择

### 内容框架：选择 Hexo

- 配置较为简单
- 简洁而快速
- 是静态内容框架
- 社区活跃，插件、主题众多

### 托管服务：选择 Vercel

- 配置较为省心

- CI/CD方便

- 既往使用经验较多

### 包管理器：选择 pnpm

- 节约磁盘空间
- 安装速度快
- 各系统间表现稳定

## 一：使用 Vercel 模板快速创建 Hexo 网站

### 在 Vercel 创建新项目

前往 [Vercel](https://vercel.com/dashboard) ，新增项目。

![image-20220325182649912](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325182649912.png)

### 前往模板中心寻找模板

![image-20220325182905036](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325182905036.png)

### 选择 Hexo

![image-20220325182957226](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325182957226.png)

### 创建 Git 文件夹

![image-20220325183111580](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325183111580.png)

### 完成

![image-20220325183645368](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325183645368.png)

此时已经搭建完成一个基本的 Hexo 站点。

## 二：配置网站

### 本地安装依赖

之前本地已经安装了 pnpm，故直接运行

```powershell
pnpm install
```

结果为

![image-20220325201839522](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325201839522.png)

观察发现 hexo 有新稳定版本6.1.0，故升级。

```powershell
pnpm update ----latest
```

![image-20220325202013959](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325202013959.png)

在本地运行 hexo 服务

![image-20220325202058110](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325202058110.png)

此时网页效果为：

![image-20220325202141659](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325202141659.png)

此时感觉网页效果不佳，准备安装并使用 [Hexo-Theme-Yun](https://yun.yunyoujun.cn/) 主题。

```powershell
pnpm install hexo-theme-yun@latest --save
hexo config theme yun
```

![image-20220325202453027](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325202453027.png)

![image-20220325202524210](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325202524210.png)

此时发现有warn，故修改warn处。

![image-20220325203544377](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325203544377.png)

再对配置文件进行一定的修改：

![image-20220325203724428](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325203724428.png)

并且配置 YUN theme 配置文件

# tbc

 ```powershell
   30 pnpm install hexo-theme-yun@latest --save
   31 hexo config theme yun
   32 hexo s
   33 pnpm install hexo-render-pug hexo-renderer-stylus --save
   34 hexo s
   35 hexo s
   36 pnpm install hexo-generator-feed --save
   37 hexo s
   38 hexo s
   39 hexo s
   40 hexo s
   41 hexo s
   42 hexo s
   43 hexo s
   44 hexo s
   45 hexo s
   46 hexo s
   47 hexo new page about
   48 hexo s
   49 pnpm install --latest
   50 pnpm up --latest
   51 hexo s
   52 pnpm up --latest
   53 hexo generate
   54 hexo clean
   55 hexo generate
   56 hexo s
   57 npm install hexo-wordcount
   58 Get-History
 ```

![image-20220325201544123](C:\Users\YU\AppData\Roaming\Typora\typora-user-images\image-20220325201544123.png)

## 主要参考资料

https://vercel.com/guides/deploying-hexo-with-vercel

https://pnpm.io/cli/update

https://yun.yunyoujun.cn/guide/



