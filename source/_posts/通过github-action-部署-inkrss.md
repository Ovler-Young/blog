---
title: 通过github action 部署 inkrss
tags: []
excerpt: >-
  inkrss 是一个 RSS 订阅服务，可以通过 GitHub 和 Cloudflare workers 自行部署。 
date: 2021-08-02 16:26:00
urlname: inkrss
---

inkrss 是一个 RSS 订阅服务，可以通过 GitHub 和 Cloudflare workers 自行部署。

<!-- more -->

### 导入库

因为会涉及到的cloudflare api 将保存在secrets中，故开私人仓库降低风险。

![your repositories](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310834304.png "your repositories")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310835923.png "image.png")

![9.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310835956.png "9.png")

![10.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310835031.png "10.png")

黏贴 [https://github.com/pureink/inkrss](https://github.com/pureink/inkrss)

![13.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310835818.png "13.png")

![26.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310836219.png "26.png")

![27.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310835690.png "27.png")

### 新建workflow

![28.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310835599.png "28.png")

![29.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310835894.png "29.png")

![30.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310835888.png "30.png")

黏贴下面的内容

```yml
name: Deploy

on:
  push:
    branches:

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy to Cloudflare Workers
    steps:
      - uses: actions/checkout@master
      - name: Publish
        uses: cloudflare/wrangler-action@1.3.0
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          wranglerVersion: '1.13.0'
```

![52.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310835095.png "52.png")

![53.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310835499.png "53.png")

![661.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310835933.png "661.png")

![662.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310835891.png "662.png")![663.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310836904.png "663.png")

![663.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310837233.png "663.png")

黏贴下面的（注意修改自己的仓库

```yml
name: fetch origin
on:
  push:
    branches:
      - main
  schedule:
    - cron: 0 */24 * * *   # 每隔12小时
jobs:
  update_external_airflow_fork:
    runs-on: ubuntu-latest
    steps:
      - uses: TobKed/github-forks-sync-action@master
        with:
           github_token: ${{ secrets.GITHUB_TOKEN }} # 令牌
           upstream_repository: pureink/inkrss  # 上游仓库
           target_repository: gchengyu/inkrss_new  # 你要推送的仓库
           upstream_branch: main  # 默认是拉取上游仓库的 master 分支
           target_branch: origin  # 默认推送到你的仓库 master 分支
           force: false  # 是否强制推送
           tags: true  # 确定是否使用 - tags
```

![1.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310837995.png "1.png")

![2.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310837051.png "2.png")

### 获取CF\_API\_TOKEN并填入secrets

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310837531.png "image.png")

![59.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310837676.png "59.png")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310837932.png "image.png")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310837979.png "image.png")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310837802.png "image.png")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310837903.png "image.png")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310837153.png "image.png")![67.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310837877.png "67.png")

![71.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310837176.png "71.png")  
![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310838570.png "image.png")

![73.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310838049.png "73.png")

![74.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310838132.png "74.png")

![80.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310838679.png "80.png")

![81.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310838567.png "81.png")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310838789.png "image.png")

![89.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310838716.png "89.png")

![90.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310838249.png "90.png")

Name`CF_API_TOKEN` Value就是刚刚复制的令牌

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310838352.png "image.png")

### 获取KV的id并保存备用

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310838436.png "image.png")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310838681.png "image.png")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310838613.png "image.png")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310839511.png "image.png")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310839028.png "image.png")

### 获取账户id并保存备用

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310839379.png "image.png")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310839616.png "image.png")

## 然后回去填wrangler.toml

![349.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310839615.png "349.png")

![image.png](https://cdn.jsdelivr.net/gh/Ovler-Young/pic/202203310839607.png "image.png")

下面的内容黏贴进去填好

```toml
name = "inkrss"
type = "webpack"
account_id = "" #上面获得的账户id
workers_dev = true
route = ""
zone_id = ""
webpack_config = "webpack.config.js"
target_type = "webpack"
kv_namespaces = [
   { binding = "KV" , id = ""} #id是上面获得的KV的id
]
[triggers]
crons = ["*/1 * * * *"]
[site]
bucket = "./public"
entry-point = "./"
```

保存即可，会自动部署的。

### 然后后面的配置请参考 [https://blog.imzjw.cn/posts/inkrss/](https://blog.imzjw.cn/posts/inkrss/) 中 通知方式 及之后的内容
