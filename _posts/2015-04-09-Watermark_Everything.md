---
layout: post

title: "Watermark Everything"
date: 2015-04-09 10:00:00
tags: python

project: "https://github.com/jasimmk/watermarker"
author: "https://github.com/jasimmk"
pn: "WaterMarker"
an: "Jasim Muhammed"
description: "WaterMarker is a Python CLI tool for watermarking, converting and resizing images in bulk."
issue: 83
img0: "http://gam.s3.amazonaws.com/img/i83_3.jpg"
img1: "http://gam.s3.amazonaws.com/img/i83_2.png"
---

Web publishers use a lot of tactics to prevent you from downloading their images: transparent image overlays, non-viewable source code, etc. &mdash; **but they all suck.** You can circumvent almost any of them with your browser's built-in developer tools.

If you want to discourage unauthorized downloading &mdash; which is all you can really do &mdash; I suggest a low-tech approach: watermarking.

For example, let's say I want to mark my vacation photos from Venice. I'm going to use <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, a Python CLI written by <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>. First, a text mark:

```bash
./watermarker ~/i.jpg ~/o --wm-text 'G@M' --wm-text-font 'Comic Sans MS' --wm-position 'TOP_CENTER'

```
<center><img src="{{page.img0}}" alt="{{page.pn}} - text" class="demo"></center>

Ugly, but effective. Next, I'll overlay an image (of my beautiful face) and convert the output to PNG:

```bash
./watermarker ~/i.jpg ~/o --wm-image ~/wm.png --output-format png --wm-position 'BOTTOM_CENTER'
```

<center><img src="{{page.img1}}" alt="{{page.pn}} - image" class="demo"></center>

Neat, right? And since {{page.pn}} has flags for resizing and bulk processing, I can watermark _all_ of my vacation photos with a single terminal command.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comment with markdown & emoji</a></center>
