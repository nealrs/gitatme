---
layout: post

title: "Copy. Paste. Python."
date: 2016-07-14 10:00:00 EST
tags: python

an: "Al Sweigart"
author: "https://github.com/asweigart"
pn: "Pyperclip"
project: "https://github.com/asweigart/pypercli"

description: "Pyperclip is a cross-platform Python module for copy and paste clipboard functions. It works with Python 2 and 3."

issue: 146

img: "http://gam.s3.amazonaws.com/img/i146.gif"
---

`Control-c` and `Control-v` were the first keyboard shortcuts I ever learned, (quickly followed by `Control-Alt-Delete`). I probably copy/paste upwards of 100 a day, but I often feel like I'm secretly hiding things from my computer when I use copy/paste.

Imagine handing your friend a diplomatic pouch full of missile codes, forbidding him from looking inside, and then asking for it back. That's what the clipboard is like!

Anywhoozles, I found a cool Python package that lets you programmatically access your clipboard. It's called [{{page.pn}}]({{page.project}}), was written by [{{page.an}}]({{page.author}}), and works on OSX, Windows, and Linux. It's only got two methods: `.copy()` and `.paste()`, but that's all you'll need.

<img src="{{page.img}}" alt="{{page.pn}} demo gif" class="demo"/>
