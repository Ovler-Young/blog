---
title: How did I built this blog
date: 2022-03-26 20:36:15
updated: 2022-03-31 02:30:16
tags:
  - [hexo]
  - [blog]
urlname: blog_build
categories:
- Technology
---

## 零：内容框架、托管服务等的选择及必要的准备

### 内容框架：选择 Hexo

- 配置较为简单
- 简洁而快速
- 是静态内容框架
- 社区活跃，插件、主题众多

### 托管服务：选择 Vercel

- 配置较为省心

- CI/CD方便

- 既往使用经验较多

可以从[官网](https://vercel.com/signup)注册。

### 包管理器：选择 pnpm

- 节约磁盘空间

- 安装速度快

- 各系统间表现稳定

安装可以参考[官方教程](https://www.pnpm.cn/installation)。

### 存储处；选择 GitHub

- 与 Vercel 深度结合
- 使用场景多样
- 全球最大

可以从[官网](https://github.com/signup)注册。

## 一：使用 Vercel 模板快速创建 Hexo 网站

### 在 Vercel 创建新项目

前往 [Vercel](https://vercel.com/new) ，新增项目。

![image-20220325182649912](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647996.png)

### 前往模板中心寻找模板

![image-20220325182905036](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647650.png)

### 选择 Hexo

![image-20220325182957226](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647418.png)

### 创建 Git 文件夹

![image-20220325183111580](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647046.png)

### 完成

![image-20220325183645368](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647937.png)

此时已经搭建完成一个基本的 Hexo 站点。

## 二：配置网站

### 本地安装依赖

之前本地已经安装了 pnpm，故直接运行

```powershell
pnpm install
```

结果为

![image-20220325201839522](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647045.png)

### 升级 Hexo 版本

观察发现 Hexo 有新稳定版本6.1.0，故升级。

```powershell
pnpm update ----latest
```

![image-20220325202013959](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647866.png)

在本地运行 hexo 服务

![image-20220325202058110](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647331.png)

此时发现有warn，故修改warn处，顺便配置文件进行了 ~~本地化~~ 修改：

![image-20220325203724428](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647536.png)

此时网页效果为：

![image-20220325202141659](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647227.png)

### 选用 YUN 主题

此时感觉网页效果不佳，准备安装并使用 [Hexo-Theme-Yun](https://yun.yunyoujun.cn/) 主题。

```powershell
pnpm install hexo-theme-yun@latest --save
hexo config theme yun
```

![image-20220325202453027](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647294.png)

![image-20220325202524210](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647495.png)

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

#### 配置替换鼠标光标

```yaml
cursor:
  enable: true
```

#### 配置侧边栏头像

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

#### 配置页脚

配置了年份和运行时间

```yaml
footer:
  since: 2022
  live_time:
    enable: true
    prefix: 本博客已运行
    suffix: (●'◡'●)
    start_time: "2022-03-21T17:05:00"
```

#### 使用 霞鹜文楷 字体

个人较为喜欢 [霞鹜文楷](https://github.com/lxgw/LxgwWenKai) 字体，参考[教程](https://github.com/lxgw/LxgwWenKai/issues/24)后配置。

先安装`lxgw-wenkai-webfont`字体包：

```powershell
 pnpm install lxgw-wenkai-webfont --save
```

![image-20220327011612735](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647191.png)

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

#### 配置友链

新建页面：

```powershell
hexo new page links
```

![image-20220331023933139](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310239171.png)

根据文档对友链进行配置：

> 进入 `source/links/index.md`，设置 `links` 字段。
>
> - `url`: 博客链接
> - `avatar`: 头像图片链接
> - `name`: 怎么称呼？
> - `blog`: 站点名称
> - `desc`: 一句话描述
> - `color`: 代表色，默认是灰色 `gray`

根据文档，我的友链配置为：

```yaml
---
layout: links
title: Friends
date: 2019-06-21 13:06:06
keywords: 链接
description: 一个emm，咖啡馆？
comments: true
links:
  - url: https://hexo.180811.xyz
    avatar: https://hexo.180811.xyz/images/avatar.jpg
    name: Ovler
    blog: Ovler 的 Hexo
    desc: Feeling tired.
    color: "#a5f4e8" # 代表色
    email: ovlertheyoung@gmail.com
  - url: https://blog.180811.xyz
    avatar: https://hexo.180811.xyz/images/avatar.jpg
    name: Ovler
    blog: Ovler 的 typecho
    desc: 以前的博客站，似乎，好久没更新了
    color: "#df5749" # 代表色
    email: ovlertheyoung@gmail.com
placeholder: 还没想好说些什么 # 默认对友链的描述
tip: 友链加载中～如失败请刷新重试～
---

## 友链

一个emm，咖啡馆？

来坐坐吧！

目前还没啥来加的，大佬们可以通过侧边栏的各种联系方式联系到我来加友链，我会尽快回复的！
```

目前只有自娱自乐，也希望日后能加多一些。

### 配置页面

#### 配置链接

参考 <https://hexo.io/zh-cn/docs/permalinks> 中配置修改

#### 配置搜索

配置搜索需要安装 hexo-generator-search，具体如下：

```powershell
pnpm install hexo-generator-search --save
```

![image-20220327012220168](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271647769.png)

再在主题文件`_config.yun.yml`的末尾加入如下内容作为`hexo-generator-feed`的配置项：

```yaml
# 关闭默认的引擎搜索
engine_search:
  enable: false
# 开启本地搜索
local_search:
  enable: true
```

#### 配置 tags

安装 hexo-generator-tag，具体如下(截图时已安装)：

```powershell
pnpm install hexo-generator-tag --save
```

![image-20220327014615469](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271648458.png)

参考主题的[教程](https://yun.yunyoujun.cn/guide/page.html#%E6%A0%87%E7%AD%BE-tags), 有

> 新建 `tags` 页面，在博客根目录下输入：
>
> ```bash
> hexo new page tags
> ```
>
> 修改 `source/tags/index.md` 的 `Front Matter`
>
> ```yaml
> ---
> date: 2017-10-09 19:11:58
> comments: false
> type: tags
> ---
> ```
>
> 在 `_config.yun.yml` 中设置：
>
> ```yaml
> wordcloud:
> enable: true
> ```
>
> 来使用彩色的词云替代原生的标签云。

#### 配置分类

因为原有配置中已经包含了`hexo-generator-tag`依赖，配置分类不再需要安装新插件。

新建页面：

```powershell
hexo new page categories
```

![image-20220331023215967](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310232056.png)

修改新生成文档的头部信息：

```yaml
---
title: categories
date: 2022-03-31 02:27:20
comments: false
type: categories
---
```

### 处理 warngins

![image-20220326235513205](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203271648971.png)

Hexo运行总有好多warning，让我很头疼。于是查阅资料，在[这份资料](https://www.haoyizebo.com/posts/710984d0/)中发现了解决办法。故，在`package.json`中加入以下内容：

```json
  "resolutions": {
    "stylus": "^0.57.0"
  }
```

将 `nib` 中的过时package强制解析为新版本。在运行 `pnpm install` , 更新包及依赖。

顺便，它也干掉了 pnpm install 时报的4个 deprecated warn.

(nib 咋GitHub更新npm不发包呢…)

剩下两个 pnpm install 的 deprecated warn 都是来自 [CSS](https://github.com/reworkcss/css) 这个两年没维护的老东西了… 暂时无法处理

### 旧文章导入

之前已有过一个[博客](https://blog.180811.xyz)，为typecho搭建，这次也一并迁移过来。

先在本地安装 `hexo-migrator-rss` 插件：

```powershell
$ pnpm install hexo-migrator-rss --save
Packages: +56
++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 529, reused 500, downloaded 27, added 56, done

dependencies:
```

![image-20220331082820673](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310828886.png)

再运行 `hexo migrate rss <source>` 命令，我的情况是：

```powershell
hexo migrate rss https://180811.xyz/index.php/feed/
```

![image-20220331083006026](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310830157.png)成功导入四篇内容。

再对导入的文章做一遍校对，这里就不再赘述了。

## 另：还要干啥

- 补完站点介绍与个人页面

- ~~写写怎么搞个 [HexoPlusPlus](https://github.com/HexoPlusPlus/HexoPlusPlus) 来管理 Hexo~~

  UPD： [HexoPlusPlus](https://github.com/HexoPlusPlus/HexoPlusPlus)， 它， achieved了……等替代品 [Wexagonal](https://github.com/Wexagonal/Wexagonal) 变得可用中…
  
- 还有啊，别做鸽子了：（

  不过感谢你们的催更，嘻嘻

- 绑定网址

## 主要参考资料

<https://vercel.com/guides/deploying-hexo-with-vercel>

<https://pnpm.io/cli/update>

<https://yun.yunyoujun.cn/guide/>

<https://www.haoyizebo.com/posts/710984d0/>

<https://github.com/lxgw/LxgwWenKai/issues/24>

<https://hexo.io/zh-cn/docs/permalinks>

<https://hexo.io/zh-cn/docs/migration#RSS>
