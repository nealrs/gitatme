---
layout: post

title: "Put Your Gifs on a Diet"
date: 2014-12-18 10:00:00
tags: node javascript

project: "https://github.com/hughsk/gif-video"
author: "https://github.com/hughsk"
pn: "gif-video"
an: "Hugh Kennedy"
description: "gif-video converts GIF images into HTML5-ready video for considerably better file sizes."
issue: 67

gif: "http://media.giphy.com/media/OWJILXs8QpyiA/giphy.gif"
webm: "http://gam.s3.amazonaws.com/img/i67.webm"
img: "http://gam.s3.amazonaws.com/img/i67.png"
---

Invented in 1987, the animated gif is a storied artifact of interwebs history. However, file size has always been its Achilles heel. For example, this 3 second gif weighs in at a hefty 4.1 MB:

<center><img src="{{page.gif}}" alt="{{ page.pn }} sample gif" width="90%"></center>

Even with LTE & ubiquitous WiFi, that's just ridiculous. The solution? Convert it to WebM with <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>. I was able to get the total file size down to a svelte 106KB, a 39.5x reduction!

  <center>
    <video width="90%" src="{{page.webm}}" poster="{{page.img}}" controls autoplay loop preload="auto" style="border-radius: 5px;">
      <em>Sorry broheim, your browsing situation does not support webm.</em>
    </video>
  </center>

The downside of WebM is that it's not supported by most email clients (or Safari). Translation: you can't use it in your next email campaign &mdash; unless you're only sending it to iOS & Outlook users. Perhaps one day Gmail will get with the program.

{{page.pn}} is available via npm `npm install gif-video`, depends on ffmpeg `brew install ffmpeg --with-libvpx --with-libvorbis --with-fdk-aacc`, and was written by <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Do you even comment bruh?</a></center>
