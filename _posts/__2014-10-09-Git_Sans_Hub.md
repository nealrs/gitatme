---
layout: post

title: "Git Sans Hub"
date: 2014-10-09 10:00:00
tags: javascript python

project: "https://github.com/alberthier/git-webui"
author: "https://github.com/alberthier"
pn: "Git WebUI"
an: "Éric Alber"
description: "Git WebUI is a standalone web based user interface for git repositories."
img: "https://raw.githubusercontent.com/alberthier/git-webui/master/src/share/git-webui/webui/img/doc/log-commit.png"
---

A year ago, the only thing I knew about NoSQL was that MongoDB didn't support joins. And after using MySQL on & off since college, that totally blew my mind. _Seriously, no joins?!_ Fortunately I discovered Firebase, which was a great introduction to NoSQL, and now I'm hooked.

This week I made another NoSQL discovery: <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> &mdash; a sleek 1,200 line document-oriented database written in Python. Created by <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>, {{page.pn}}'s API is easy to grok and fits into your projects with minimal effort:

<center><img src="{{page.img}}" style="border: 1px solid #111111; border-radius:4px;" alt="{{ page.pn }} example">
_Example commit log with diff viewer_</center>

Is Git WebUI a full featured git client or a replacement for GitHub? Nope. You can really only stage, commit, and view diffs with it. In my opinion, it's a compliment to other git tools and a neat hack.

A key use case is sharing local repos containing sensitive info without a middle man:

1. Run `git webui` in your repo directory
2. Tell colleagues on your local network to clone it using `git clone http://your.ip:8000/ repoName`
3. Afterwards, terminate the server via `ctrl+c`

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Join the discussion</a></center>
