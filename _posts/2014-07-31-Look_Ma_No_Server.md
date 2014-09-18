---
layout: post

title: "Look Ma, No Server!"
date: 2014-07-31 10:00:00
tags: javascript flash

project: "https://github.com/dcneiner/Downloadify"
author: "https://github.com/dcneiner"
pn: "Downloadify"
an: "Douglas Neiner"
discuss: "https://github.com/nealrs/gitatme-comments/issues/47"
description: "Downloadify enables client-side creation & downloading of text files"
issue: "47"

demo: "http://gam.s3.amazonaws.com/demo/i47/index.html"
---
 
I've been on a client-side kick lately; I publish static blogs with Jekyll, store data in Firebase & local storage, and push metrics to Keen IO.

Until recently, handling downloads was the exception, requiring client &#8652; server interaction. But with <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{page.pn}}</a></strong>, I can now create and initiate downloads entirely client-side.

Written by <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>, this library generates text files via JavaScript and uses a button made from an invisible Flash widget + a png sprite to initiate downloads.

This <strong><a href="{{ page.demo }}" target="_blank" title="{{ page.pn }} demo"> demo</a></strong> (adapted from the original & only for desktop browsers with Flash) creates an .ics file on the fly, which you can import into your calendar.

Here's the catch: {{page.pn}} is a little outdated - the latest commit is from 2009 - but it's a still solid library, with built-in helpers for jQuery & MooTools. If you like what you see, open a pull request.

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" >Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Discuss it</a></center>