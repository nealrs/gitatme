---
layout: post

title: "Get jazzy with web audio"
date: 2015-04-30 10:00:00
tags: javascript

project: "https://github.com/markmarkoh/birdman"
author: "https://github.com/markmarkoh"

pn: "Birdman"
an: "Mark DiMarco"

description: "Recreate the Birdman opening credits with HTML5 Web Audio APIs."
issue: 86

demo: http://markmarkoh.com/birdman/
video: https://www.youtube.com/embed/QtTH9K9nBtY
---

Instead of a library, script, or app, this week I want to show you an awesome web demo.

<strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong> recreated the opening credits to _Birdman_ using JavaScript and the HTML5 Web Audio API. <strong><a href="{{page.demo}}" title="{{page.pn}} on GitHub" target="_blank">It works on mobile & desktop</a></strong>, natch.

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='{{page.video}}' frameborder='0' allowfullscreen alt="{{page.pn}} demo video"></iframe></div>

So, how does it work? First, Mark prefetches an mp3 and uses a high pass filter to identify every loud cymbal & drum hit. These are the 'peaks' of the percussion track and there are 198 of them. Then, with an array of time codes corresponding to each peak, he calls `window.setTimeout` to show and hide individual elements on screen.

It's a combination of timed performance and programing muscle. <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">Take a look at the code</a></strong>, fork it, and try making your own cinematic intro!

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
