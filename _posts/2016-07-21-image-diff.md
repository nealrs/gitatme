---
layout: post

title: "What's the diff?"
date: 2016-07-21 10:00:00 EST
tags: node javascript

an: "Uber"
author: "https://github.com/uber"
pn: "image-diff"
project: "https://github.com/uber/image-diff"

description: "image-diff is a node library for creating an image differential between two images using ImageMagick."

issue: 147

img: "http://gam.s3.amazonaws.com/img/i147.gif"
---

One of the key concepts behind version control systems (like git or mercurial), is the differential or "_diff_." By diffing between code at two different states (last commit, and current state), you can see, line by line, what was added &amp; deleted.

Text is well suited to line by line comparison, but what about images? Can you do the same type of before / after comparison? Well, kinda!

[{{page.an}}]({{page.author}})'s [{{page.pn}}]({{page.project}}) node library uses ImageMagick to calculate visual differentials between equally sized images:

<a href="{{page.img}}" title="{{page.pn}} demo" class="demo"><img src="{{page.img}}" alt="{{page.pn}} demo" class="demo"/></a>

The first two frames of the animation are screenshots from my Twitter timeline taken 30 seconds apart. The 3rd frame is the diff, highlighting what changed in red.

Unlike with text, {{page.pn}} can't tell you, which pixels are new / old, but it does show the _aggregate_ change. There's also CLI version you can run without writing any code.
