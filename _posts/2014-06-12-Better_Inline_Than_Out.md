---
layout: post

title: "Better Inline Than Out"
date: 2014-06-12 10:00:00
tags: javascript

project: "https://github.com/sloria/AreYouSure.js"
author: "https://github.com/sloria"
pn: "AreYouSure.js"
an: "Steven Loria"
discuss: "https://github.com/nealrs/gitatme-comments/issues/40"
description: "Create inline confirmation dialogs in Javascript with AreYouSure.js"
issue: "40"
demo: "http://gam.s3.amazonaws.com/demo/i40/index.html"
img: "http://gam.s3.amazonaws.com/demo/i40/i40.gif"
---
 
With modal dialogs, every decision is a show-stopper. Unless you're working on an irreversible action like a bank transfer, blocking the entire UI doesn't make sense. 

If you need to confirm or collect user input, try doing it inline with {{ page.an }}'s <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{page.pn}}</a></strong>. It's a JavaScript library that creates inline dialogs which you can style and use to trigger events. 

{{page.pn}} offers customizable prompts (via jQuery or data attributes) and callback support, so it's flexible enough for whatever you through at it. <strong><a href="{{page.demo}}" target="_blank" title="{{page.pn}} Demo">Live demo here</a></strong>.

<center><img src="{{page.img}}" alt="{{page.pn}} in action" title="{{page.pn}} in action" style="border:1px solid #021a40;"></center>

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" style="margin-right:10px;">Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Join discussion</a></center>