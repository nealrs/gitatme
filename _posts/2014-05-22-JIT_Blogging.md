---
layout: post

title: "Just-In-Time Blogging"
date: 2014-05-22 10:00:00
tags: javascript

project: "https://github.com/Xeoncross/jr"
author: "https://github.com/Xeoncross"
pn: "Jr."
an: "David Pennington"
discuss: "https://github.com/nealrs/gitatme-comments/issues/37"
description: "Jr. is a client-side static site generator written in JavaScript"
demo: "http://gam.s3.amazonaws.com/demo/i37/index.html"
issue: "37"
jekyll: http://jekyllrb.com
---

Static site generators like <strong><a href="{{ page.jekyll }}" target="_blank" title="Jekyll on GitHub">Jekyll</a></strong> are rad because they let authors focus on content rather than their CMS. For example, the entire Git @ Me site is written in markdown, compiled into HTML, and then uploaded to my web server.

But, what if you could avoid the HTML bit entirely? In other words: write posts in markdown, upload them to the server, *fin*.

That's exactly what <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}</a></strong> does. It uses JavaScript to render your site on-demand, eliminating the need for static HTML files. The markdown code below is all it took to create <strong><a href="{{ page.demo }}" target="_blank" title="{{ page.pn }} demo">this demo</a></strong>. No joke.

```html
# Say hello to Jr.

This is a demo of [David Pennington](https://github.com/Xeoncross)'s client-side [static site generator](https://github.com/Xeoncross/jr).

The whole page is regular markdown (except for the `jr.js` load)

[gist:1a4804a0b00c95b5dcb8]

*For basic bloggers &amp; the CMS averse, this may be just want you need.*

<script src="js/jr.js"></script>
```

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" >Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Join discussion</a></center>
