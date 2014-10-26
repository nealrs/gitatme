---
layout: post

title: "Diagnose Table-Flippy CSS"
date: 2014-10-30 10:00:00
tags: css

project: "https://github.com/mrmrs/pesticide"
author: "https://github.com/mrmrs"
pn: "Pesticide"
an: "Adam Morse"
description: "Pesticide is Chrome extension that helps you diagnose css layout issues."
img: "http://gam.s3.amazonaws.com/demo/pesticide/demo.gif"
chrome: "https://chrome.google.com/webstore/detail/bblbgcheenepgnnajgfpiicnbbdmmooh"
issue: 60
---

This is my development process:

1. Experience a brief burst of inspiration
2. Go to bar, enjoy a lager, and formulate a solution
3. Bang head against the wall until code works

It's not particularly efficient, but it works for me. The problem is that some things are a lot harder to figure out than others:

**Easy:** How do I handle command line arguments?<br>
**Not so bad:** Why is this for loop all fubar?<br>
**Table-flip:** OMG, where is that 3px of left padding coming from?!

Since a lot of my projects involve CSS and tables are expensive, I'm glad that I discovered <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>. This CSS add-in does exactly one thing: add a colored outline around every element on your page.

<center><img src="{{page.img}}" class="demo" alt="{{ page.pn }} demo">
</center>

{{page.pn}} quickly diagnoses CSS issues and will save you a fortune on furniture. You can use it via <strong><a href="{{ page.chrome }}" target="_blank" title="{{page.pn}} Chrome extension">Chrome extension</a></strong>, bookmarklet, or stylesheet.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Join the discussion</a></center>
