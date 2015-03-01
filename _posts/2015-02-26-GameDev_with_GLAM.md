---
layout: post

title: "GameDev with GLAM"
date: 2015-02-26 10:00:00
tags: javascript

project: "https://github.com/tparisi/glam"
author: "https://github.com/tparisi"
pn: "GLAM"
an: "Tony Parisi"
description: "GLAM combines the power of WebGL with a set of easy-to-use markup tags and style properties."
issue: 77

demo: "http://nealrs.github.io/bubblezap/"
img: "https://github.com/nealrs/bubblezap/raw/gh-pages/bzap1.png"
video: "http://www.youtube.com/embed/BlMfL2_dn-E"
gallery: "http://tparisi.github.io/glam/#demos"
---

On Monday night I made my first 3D game. It's called <strong><a href="{{page.demo}}" target="_blank" title="Click to play BubbleZap 3D">BubbleZap 3D</a></strong> and the goal is to pop 50 floating bubbles in 60 seconds. It's harder than it looks, so don't forget to move around and look up/down.

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='{{page.video}}' frameborder='0' allowfullscreen alt="BubbleZap demo video"></iframe></div>

How did I make it? I used <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, a framework for creating & animating 3D web content using WebGL & semantic markup. It's the brainchild of <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>, one of the guys who created VRML back in 1994.

Although BubbleZap is basically a re-skin of Tony's Bubble Pop demo with some added game logic, it illustrates several key effects:

- 3D environment with texture mapping
- shading & reflection
- animation & interactivity

The biggest advantage of using {{page.pn}} is that you can create, style, and control scenes using HTML, CSS and JS. So if you know basic web development, you can program in 3D too. Bonus: it supports Cardboard and Oculus VR!

{{page.pn}} is in active development, so don't hesitate to get involved. You can find more examples in the <strong><a href="{{ page.gallery }}" target="_blank" title="{{ page.pn }} demo gallery">demo gallery</a></strong>.

_FYI: BubbleZap is a bit of a CPU hog, but as long as you're patient and using Chrome, it should load on your tablet, phone, or computer._

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Do you event comment bruh?</a></center>
