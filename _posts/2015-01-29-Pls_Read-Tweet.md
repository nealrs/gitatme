---
layout: post

title: "Pls Read-Tweet"
date: 2015-01-29 10:00:00
tags: coffeescript

project: "https://github.com/ftrain/savepublishing"
author: "https://github.com/ftrain"
pn: "SavePublishing"
an: "Paul Ford"
description: "SavePublishing turns <140 character sentences into tweetable links."
issue: 73

nyt: "http://www.nytimes.com/2013/08/25/arts/television/the-god-of-snl-will-see-you-now.html"
demo: "http://gam.s3.amazonaws.com/demo/i73/index.html"
---

I really dig it when journalists write <strong><a href="{{page.nyt}}" title="NYT article with tweetable quotes" target="_blank">articles with tweetable quotes</a></strong>. It's a great way to get readers to share the story, while also controlling the language they use.

That got me thinking, what if you could click on _any_ sentence to tweet it? Turns out, there's JavaScript for that: <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>.

Originally created as a bookmarklet, <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>'s script finds every tweetable sentence in the DOM and wraps it up in a Twitter link. <strong><a href="{{page.demo}}" title="{{page.pn}} demo" target="_blank"> Try it out for yourself</a></strong>.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Type and be heard</a></center>
