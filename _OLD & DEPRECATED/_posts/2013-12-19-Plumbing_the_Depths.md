---
layout: post

title: "Plumbing the Depths"
date: 2013-12-19 10:00:00
tags: javascript

project: "https://github.com/robflaherty/jquery-scrolldepth"
author: "https://github.com/robflaherty"
discuss: "https://github.com/nealrs/gitatme-comments/issues/16"
lw: "http://gitat.me/2013/11/07/Pixel-lytics.html"
description: "Scroll Depth records scroll depth via the Google Analytics Event API -- enabling you to see what is going on below the fold."
issue: "16"
---

<strong><a href = "{{ page.lw }}" target="_blank" title = "Pixel-lytics">Last month</a></strong> I wrote about analytics and measuring _key metrics_ instead of _everything_. Today, in that same vein, I want to highlight a tool which provides specific and actionable data about your site's visitors.

<strong><a href="{{ page.project }}" target="_blank" title="Scroll Depth on GitHub">Scroll Depth</a></strong>, written by <strong><a href="{{ page.author }}" target="_blank" title="Rob Flaherty on GitHub">Rob Flaherty</a></strong>, records a user's 'scroll depth' via the Google Analytics Event API. Why is this data desirable? Because it enables you to see what's going on _below the fold_.

With zero configuration, Scroll Depth reports when you reach the 25%, 50%, 75%, and 100% scroll points and how long it took to get there. It can also record when you scroll in key DOM elements like divs containing sales copy & call-to-action buttons. 

So, let's say your A/B testing short and long landing pages. How can you tell if and how long the average visitor spends reading copy below the fold? Bookend it with empty span tags and include the ids when you initialize the plugin. I think you can do the math from there. 

<pre class="prettyprint lang-js">
// no configuration, report if & when user reaches 25/50/75/100% scroll points
$.scrollDepth();

$.scrollDepth({
  // don't track scroll depth for pages shorter than 2500 pixels
  minHeight: 2500,
  
  // track when you scroll key elements into view
  elements: ['#email_button', '#intro_video']
});
</pre>

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>