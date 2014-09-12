---
layout: post

title: "HTML and Video and Backgrounds - Oh My!"
date: 2013-10-24 10:00:00
tags: javascript

project: "https://github.com/sydlawrence/jquery.videoBG"
author: "https://github.com/sydlawrence"
discuss: "https://github.com/nealrs/gitatme-comments/issues/8"
description: "HTML5 video backgrounds powered by jquery.videoBG"
issue: "8"
---
<p>On a boring Sunday afternoon at CMU in 1994, my <strong><a href="http://shyamsunder.org/about" title="pops" target="_blank">dad</a></strong> did the most awesome thing ever. He logged me into a Sparcstation, launched Mosaic, and told me to take it for a spin. It was undeniably badass and got me hooked on hypertext.</p>

<p>My first webpage was your standard Model T: flat, all text, and unabashedly gray. Shortly thereafter, I took full advantage of HTML 3.2, adding gaudy neon backgrounds and tables.</p>

<p>Over caffeinated and 11 years old, I mainlined tacky web trinkets. Hit counters, marquees, Java applets, animated gifs &mdash; everything. And I didn't care how it affected my Page Rank, load time, or cross browser compatibility. I was too busy having a great time.</p>

<p>Fast forward 20 years and not much has changed. Today I'm playing with video backgrounds. HTML5 video backgrounds to be exact, powered by <strong><a href="{{ page.project }}" target="_blank" title="jquery.videoBG">jquery.videoBG</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="Syd Lawrence">Syd Lawrence</a></strong>.</p>

<p><strong><a href="{{site.demo}}i8/index.html" target="_blank" title="HTML5 video background demo">Here's a demo my younger self would have been proud of</a></strong>.</p>

<p>Setup is a breeze, just define the source mp4/ogg/webm videos and point the script at a div or body tag. There's also a static fallback for unsupported browsers & mobile.</p>

```html
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="jquery.videoBG.js"></script>

<script type="text/javascript">
 $(document).ready(function() {
  $('body').videoBG({ /* set target DOM element*/
   position:"fixed",
   zIndex:0,
   mp4:'vid.mp4', /* mp4, ogv, and webm ensure coverage across browsers*/
   ogv:'vid.ogv',
   webm:'vid.webm',
   poster:'static.png', /* static image fallback*/
   opacity:1
  });
 })
</script>
```

<p>It's not a killer app, but it is a blast to play with! And that's just it: the web should be fun. If toddlers can turn cardboard boxes into rocket ships and race cars, imagine what you can do with a little JavaScript.</p>

<p>So today, instead of stressing over API rate limits, unit tests, and 'not provided' search keywords &mdash; take a break and do something that makes you smile!</p>

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
