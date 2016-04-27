---
layout: post

title: "Colorizing classic movies"
date: 2016-04-28 10:00:00 EST
tags: python docker

project: "https://github.com/ackimball/autocolorization"
author: "https://github.com/ackimball"
an: "Andrea Kimball"

author2: "https://github.com/mbartoli"
an2: "Mike Bartoli "

pn: "Autocolorization"

description: "Autocolorization uses a pre-trained CNN & deep learning to colorize, denoise, and upscale black & white movies."

issue: 135

video: "https://www.youtube.co/embed/Mlss8RF-v7I"
devpost: "http://devpost.com/software/autocolorization"
---

Back in the 80s, Ted Turner scandalized the film world by colorizing tons of classic films. Setting aside the artistic implications of modifying an epic like _Citizen Kane_, colorization required a _lot_ of manual labor back then.

Fortunately, it's 2016 and we've got way better resources now. At least, that's what <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong> and <strong><a href="{{page.author2}}" title="{{page.an2}} on GitHub" target="_blank">{{page.an2}}</a></strong> thought when they decided to colorize Jean-Luc Godard's 1960 film _Breathless_ at the 5C Hackathon.

Combining GPU power, Python, and a pre-trained CNN, <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> implements a deep learning algorithm that can colorize, denoise, and upscale b&w frames from full motion video.


<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='{{page.video}}' frameborder='0' allowfullscreen alt="{{page.pn}} demo video"></iframe></div>

It's not perfect, but it's a damn good start and an excellent demo. Everything you need to run {{page.pn}} is packaged up in a Docker container, so go nuts and colorize your favorite Fellini!

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
