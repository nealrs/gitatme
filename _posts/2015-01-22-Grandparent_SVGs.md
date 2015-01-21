---
layout: post

title: "Grandparent Ready SVGs"
date: 2015-01-22 10:00:00
tags: javascript

project: "https://github.com/exupero/saveSvgAsPng"
author: "https://github.com/exupero"
pn: "saveSvgAsPng"
an: "Eric Shull"
description: "saveSvgAsPng is a library for exporting SVGs into PNGs - from the browser yo!"
issue: 72

demo: "http://gam.s3.amazonaws.com/demo/i72/index.html"
---

SVGs have made the web a better place: graphics are sharper & Retina-ready. We have d3.js, the dataviz library that powers all your favorite NYT infographics. SVG even deserves some credit for Bootstrap's massive popularity by way of Font-Awesome, the bundled icon font.

However, it isn't a "consumer" format. I mean, have you ever sent your grandparents an album of vacation SVGs? Of course not, that's what raster graphics (PNG, JPG, and GIF) are for. _(And shoutout to everybody still using TIFF and a scanner from '96!)_

Let users save your SVGs with <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>. Just pass in the node and the script will generate a PNG + initiate the download client-side.

Seriously, this is all the code I needed to power <strong><a href="{{page.demo}}" title="{{page.pn}} demo" target="_blank">my demo</a></strong>:

```js
saveSvgAsPng(document.getElementById("svg"), "neal.png", {scale: 3.0});
```

So go forth and design those beautiful, scalable graphics &mdash; {{page.pn}} will get them grandparent-ready.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comment down 4 what?</a></center>
