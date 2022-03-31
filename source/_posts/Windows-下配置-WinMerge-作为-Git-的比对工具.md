---
title: Windows 下配置 WinMerge  作为 Git 的比对工具
tags: []
excerpt: >-
  Windows 下配置 WinMerge  作为 Git 的比对工具

date: 2021-06-22 20:00:00
urlname: WinMerge to merge
---
Windows 下配置 WinMerge  作为 Git 的比对工具

<!-- more -->
### Why use WinMerge

1. 免费开源（不像Beyond Compare 每年12刀（虽然有破解版但是总不放心））
2. 真的好用（比自带的git diff 不知道好用多少）
3. 还挺好看（？）

* * *

### How to install WinMerge in git

1. 去[官方仓库](https://github.com/WinMerge/winmerge/releases)下载对应系统版本的WinMerge并安装（一路默认设置）
2. 找到git配置文件.gitconfig ，windows用户一般在用户文件夹`C:\Users\%username%`下，如果你是别的系统就甭看了，没发现是**Win**merge吗（逃
3. 在其中加入如下配置

``` toml
[diff]
tool = winmerge
[difftool "winmerge"]
cmd = "'C:/Program Files (x86)/WinMerge/WinMergeU.exe'" -e "$LOCAL" "$REMOTE"
[difftool]
prompt = false
[merge]
tool = winmerge
[mergetool "winmerge"]
cmd = "/c/Program\\ Files\\ \\(x86\\)/WinMerge/WinMergeU.exe" -u -e -wl -wr $LOCAL $BASE $REMOTE -o $MERGED
[mergetool]
keepBackup = true
trustExitCode =true
```

* * *

### 使用

比较差异

``` bash
git difftool <file_name>
```

合并冲突

``` bash
git mergetool
```

* * *

## 简化命令

实际使用过程中觉得命令太长，没有效率，可以给它们配置别名。

``` bash
git config --global alias.dft difftool
git config --global alias.mgt mergetool
```

比如我就将 `difftool`、`mergetool` 配置了 `dft`、`mgt` 这样的别名，使用的时候直接如下即可

``` bash
git dft
git mgt
```

## 参考

[use Winmerge inside of Git to file diff](https://stackoverflow.com/a/30614938)  
[Windows 下配置 Beyond Compare 作为 Git 的比对工具](https://p3terx.com/archives/configure-beyond-compare-as-a-git-comparison-tool-under-windows.html)  
[Using WinMerge as the git Diff/Merge Tool on Windows 64bit](https://gist.github.com/shawndumas/6158524#gistcomment-3415073)
