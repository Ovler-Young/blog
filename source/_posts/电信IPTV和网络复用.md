---
title: 电信IPTV和网络复用
date: 2024-02-15 00:00:00
updated: 2024-02-15 00:00:00
tags:
  - [IPTV]
  - [网络]
  - [VLAN]
  - [路由器]
  - [折腾]
urlname: IPTV-and-Network
categories:
  - Technology
---

本文使用设备为 F4600T 和 SK-WR6640X，其他设备应该也可以参考。

## Step 0: 获取光猫超级密码

参考 [教程](https://www.bilibili.com/read/cv27177061/) 拿到了光猫的超级密码

## Step 1: 获取光猫上 IPTV 接口相关信息

1. 在**状态**下的**状态总览**找到**iTV**的“连接名称”
   ![首页下的状态总览](https://hexo.180811.xyz/images/iptv1.png)

2. 进入**网络**，进入**网络设置** - **网络连接**，在**连接名称**处选中在上面找到了连接名称，记录下**VLAN 模式**，**VlanID**和**802.1p 的值**，保存备用
   ![image](https://hexo.180811.xyz/images/iptv2.png)

## Step 2: 设置 VLAN 绑定

在上一步的基础上，点击左侧的**VLAN 绑定**，进行如下操作：

1. 选择
2. 选择插网线的口
3. 填入上一步获取的 VLAN（也可以随便写，和后续保持一致即可）
4. 以及对应的 WAN 连接名称
5. 不要忘了保存

![image](https://hexo.180811.xyz/images/iptv3.png)

## Step 3: 设置路由器

路由器接到上一步中选中的网口，比如我这是网口 3。登录，进行配置，我就以我目前这台创维 SK-WR6640X 为例。

选中**网络设置**，进入 IPTV 配置，启用，模式为桥模式，选中插机顶盒的网口，设置 **VLAN 模式** 、 **VLAN ID** 和 **802.1p** 为上方获取/设置的值，进行确定。

![image](https://hexo.180811.xyz/images/iptv4.png)

重启盒子，即可通过一根和光猫连接的网线，同时完成 IPTV 和上网的功能。

## 参考连接

选定机型为 SK-WR6640X（实际 30 入手）

[集成与外置 FEM 芯片的无线性能对比实测-路由器交流](https://www.acwifi.net/13493.html)

[总结 142 款运营商定制 WiFi6 mesh 路由的配置，供大家参考（有几款可刷 OPENWRT）-无线路由器硬件改造以及故障维修-恩山无线论坛](https://www.right.com.cn/forum/thread-7310424-1-1.html)

获取 F600T 光猫超级密码

[中兴 F4600T 光猫超级密码获取方法（IOS）](https://space.bilibili.com/346995301)

IPTV 相关设置参考

[GitHub - ruur/cmcc-iptv: 移动宽带单线复用(INTERNET+IPTV)](https://github.com/ruur/cmcc-iptv)

[布网简单改造——IPTV 与网络单线复用的*路由器*什么值得买](https://post.smzdm.com/p/718860/)

[单线复用，不用设置光猫-iptv 直播源、网络视频直播资源、直播代码-恩山无线论坛](https://www.right.com.cn/forum/thread-4027895-1-1.html)

[IPTV 单线复用实践及总结 - 知乎](https://zhuanlan.zhihu.com/p/613917869)

## PS

SK-WR6640X 的信号真的很好，30 买到绝对值
