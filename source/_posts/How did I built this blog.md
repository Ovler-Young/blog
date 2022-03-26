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

![image-20220325182649912](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262042218.png)

### 前往模板中心寻找模板

![image-20220325182905036](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262042844.png)

### 选择 Hexo

![image-20220325182957226](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262042155.png)

### 创建 Git 文件夹

![image-20220325183111580](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262042466.png)

### 完成

![image-20220325183645368](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262042772.png)

此时已经搭建完成一个基本的 Hexo 站点。

## 二：配置网站

### 本地安装依赖

之前本地已经安装了 pnpm，故直接运行

```powershell
pnpm install
```

结果为

![image-20220325201839522](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262042828.png)

### 升级 Hexo 版本

观察发现 Hexo 有新稳定版本6.1.0，故升级。

```powershell
pnpm update ----latest
```

![image-20220325202013959](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262042910.png)

在本地运行 hexo 服务

![image-20220325202058110](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262042710.png)

此时发现有warn，故修改warn处，顺便配置文件进行了 ~~本地化~~ 修改：

![image-20220325203724428](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262042834.png)

此时网页效果为：

![image-20220325202141659](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262042942.png)

### 选用 YUN 主题

此时感觉网页效果不佳，准备安装并使用 [Hexo-Theme-Yun](https://yun.yunyoujun.cn/) 主题。

```powershell
pnpm install hexo-theme-yun@latest --save
hexo config theme yun
```

![image-20220325202453027](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262042261.png)

![image-20220325202524210](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262043068.png)



### 配置 YUN theme 

在 YUN 主题的配置文件 `_config.yun.yml` 中做以下配置：

#### 语言设置为中文

```yaml
language: zh-CN
```

#### 配置侧边栏社交图标

##### 特别：关于RSS

RSS 是本人的心头爱，肯定要进行配置。配置 RSS 不止需要在  `_config.yun.yml`  中进行配置，还需要安装 hexo-generator-feed，具体如下：

```powershell
pnpm install hexo-generator-feed --save
```

再在`_config.yml`的末尾加入如下内容作为`hexo-generator-feed`的配置项：

```yaml
feed:
  enable: true
  limit: 20
  hub: https://pubsubhubbub.appspot.com/
  content: true
  order_by: -date
  icon: images/avatar.jpg
  autodiscovery: false
  template:
```

再在 `_config.yun.yml` 中加入以下配置，完成侧边栏的设置。下面的是当时我实际配置文件。

```yaml
# 配置侧边栏社交图标
social:
  - name: RSS
    link: /atom.xml
    icon: icon-rss-line
    color: orange
  - name: GitHub
    link: https://github.com/Ovler-Young
    icon: icon-github-line
    color: "#181717"
  - name: E-Mail
    link: mailto:ovlertheyoung@gmail.com
    icon: icon-mail-line
    color: "#8E71C1"
  - name: 网易云音乐
    link: https://music.163.com/#/user/home?id=310842841
    icon: icon-netease-cloud-music-line
    color: "#C10D0C"
  - name: Telegram
    link: https://t.me/Ovler
    icon: icon-telegram-line
    color: "#0088CC"
  - name: Telegram Channel
    link: https://t.me/shengxiaoguan
    icon: icon-telegram-fill
    color: "#0088CC"
```

#### 配置标语动画

```yaml
banner:
  enable: true
  title: 
    - Ovler
    - 的
    - hexo
  border: true
  cloud:
    enable: true
    color: "white"
  go_down:
    enable: true
    icon: icon-arrow-down-s-line
```

#### 配置侧边栏社交图标

```yaml
cursor:
  enable: true
```

#### 配置侧边栏社交图标

```yaml
avatar:
  enable: true
  url: /images/avatar.jpg
  rounded: true
  opacity: 1
  mickey_mouse: false
  status:
    enable: true
    emoji: 😀
    message: Hello world!
```

#### 配置侧边栏社交图标

```yaml
footer:
  since: 2022
```

#### 使用 霞鹜文楷 字体

个人较为喜欢 [霞鹜文楷](https://github.com/lxgw/LxgwWenKai) 字体，参考[教程](https://github.com/lxgw/LxgwWenKai/issues/24)后配置。

先安装`lxgw-wenkai-webfont`字体包：

```
 pnpm install lxgw-wenkai-webfont --save
```

![image-20220327011612735](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203270116800.png)

再在 `_config.yun.yml` 中加入以下配置，完成霞鹜文楷字体的设置。

```yaml
font:
  cdn:
    enable: true
    lib:
      - https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@latest/style.css
  serif:
    family: "'Songti SC', 'Noto Serif SC', STZhongsong, STKaiti, KaiTi, Roboto, serif"
    weight: 900
  sans_serif:
    family: "'LXGW WenKai', 'PingFang SC', 'Microsoft YaHei', Roboto, Arial, sans-serif"
    weight: 400
  monospace:
    family: "'Source Code Pro', 'Courier New', Courier, Consolas, Monaco, monospace"
```



## tbc

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

![image-20220325201544123](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262050908.png)

配置搜索

```
pnpm install hexo-generator-search --save
```



## 处理 warngins

![image-20220326235513205](https://raw.githubusercontent.com/Ovler-Young/pic/main/202203262355279.png)

Hexo运行总有好多warning，让我很头疼。于是查阅资料，在[这份资料](https://www.haoyizebo.com/posts/710984d0/)中发现了解决办法。故，在`package.json`中加入以下内容：

```json
  "resolutions": {
    "stylus": "^0.57.0"
  }
```

将 `nib` 中的过时package强制解析为新版本。在运行 `pnpm install     ` , 更新包及依赖。

顺便，它也干掉了 pnpm install 时报的4个 deprecated warn.

(nib 咋GitHub更新npm不发包呢…)

剩下两个 pnpm install 的 deprecated warn 都是来自 [css](https://github.com/reworkcss/css) 这个两年没维护的老东西了… 暂时无法处理

## 主要参考资料

https://vercel.com/guides/deploying-hexo-with-vercel

https://pnpm.io/cli/update

https://yun.yunyoujun.cn/guide/

https://www.haoyizebo.com/posts/710984d0/

https://github.com/lxgw/LxgwWenKai/issues/24

