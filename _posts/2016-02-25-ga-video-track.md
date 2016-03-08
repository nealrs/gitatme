---
layout: post

title: "Who's watching?"
date: 2016-02-25 10:00:00 EST
tags: javascript

project: "https://gist.github.com/placeless/6067714"

description: "This week's project is a script for tracking HTML5 video events in Google Analytics."

issue: 127

video: "http://gam.s3.amazonaws.com/img/i127.mp4"
---

Now that HTML5 video &amp; .mp4 are well supported across browsers, you don't need YouTube in order to add video to my web projects. And, for small web projects, storing files on s3 is effectively free.

The only thing you miss out on with YouTube is view counts / metrics. But is that worth an iframe? I don't think so. <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">I found a JavaScript gist that tracks video in Google Analytics.</a></strong>

Here's what you'll see in GA (btw, don't spend all day looking at your realtime stats, you'll go bonkers):

<center>
  <video src="{{page.video}}" poster="{{page.img}}" controls autoplay loop preload="auto" style="width: 100% !important; height: auto !important;">
    <em>Sorry broheim, your browsing situation does not support webm.</em>
  </video>
</center>

The code is pretty easy to understand, so even a total n00b can get this up and running in about 5 minutes. Here are the most important bits:

```javascript
// get basic video info
var vid = document.getElementById('video')
var title = 'My Video'

//Listen for video events (ended, play, pause)

vid.addEventListener('ended', videoEnd, false);
vid.addEventListener('play', videoPlay, false);
vid.addEventListener('pause', videoPause, false);

// send events to Google Analytics

function videoEnd () {
	ga('send', 'event', 'video', '100% video played', title);
}

function videoPlay () {
	ga('send', 'event', 'video', 'video played', title)
	setKeyFrames(this.duration); // see the full code to see how this works
}

function videoPause () {
	ga('send', 'event', 'video', 'video paused', title);
```

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
