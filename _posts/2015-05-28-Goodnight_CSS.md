---
layout: post

title: "CSS for all hours"
date: 2015-05-28 10:00:00
tags: javascript

project: "https://github.com/JaredCubilla/goodnight"
author: "https://github.com/JaredCubilla"

pn: "Goodnight"
an: "Jared Cubilla"

description: "Goodnight is a JavaScript library that swaps your stylesheet depending on the time of day."
issue: 90

demo: "http://gam.s3.amazonaws.com/demo/i90/index.html"
img: "http://gam.s3.amazonaws.com/img/i90.gif"
---

How adaptive is your app? Maybe it accounts for browser capabilities, screen size, language, and even location &mdash; but what about _time_?

Recently, developers have started to consider time in their UX. After all, your office isn't a windowless casino. Two examples: Apple's new dark mode in Mavericks and F.lux, which adjusts screen brightness & tint based on the sun cycle.

Smarten up your app with
<strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, a JavaScript library that swaps CSS files based on the time of day:

<center><a href="{{page.demo}}" title="{{page.pn}} Demo" target="_blank"><img src="{{page.img}}" alt="{{page.pn}} in action" class="demo" style="width:500px;"></a></center>

Written by <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>, {{page.pn}} is super easy to implement:

```html
<!-- put this JS before </head> -->
<script src="goodnight.min.js"></script>
<script>
  // apply night styles until 8am and after 7pm
  Goodnight.AM = 8;
  Goodnight.PM = 19;
  Goodnight.css('css/night.css');
</script>

```

If you take advantage of CSS selectors and classes, you can go even further, changing functionality by showing and hiding elements.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
