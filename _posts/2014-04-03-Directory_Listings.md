---
layout: post

title: "Directory Listings with Metadata"
date: 2014-04-03 10:00:00
tags: shell

project: "https://github.com/supercrabtree/k"
author: "https://github.com/supercrabtree"
pn: "k"
an: "George Crabtree"
discuss: "https://github.com/nealrs/gitatme-comments/issues/30"
description: "k is a zsh script that color codes file size, age, and git status."
issue: "30"
imga: "http://gam.s3.amazonaws.com/img/i30a.png"
imgb: "http://gam.s3.amazonaws.com/img/i30b.png"

---

I recently switched shells to zsh + oh-my-zsh and I really dig it. It's got tab-completion for commands & filenames and a heap of useful aliases.

While researching zsh plugins, I discovered <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}</a></strong>. {{page.pn}} is an alternative to the traditional `ls` command, adding color coding support for file size, age, and git status. 

Bottom line, you can identify oversized, untracked, or new files with one keystroke.

Here is a standard `ls -la` directory listing:
<center><img src="{{page.imga}}" alt="ls -la directory listing" title="ls -la directory listing"></center> 
Compare that to {{page.pn}}:

- Colored bars indicate git status
- Older files shown in darker shades of gray
- File size illustrated on green/red scale

<center><img src="{{page.imgb}}" alt="directory listing with k" title="directory listing with k"></center> 
<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
