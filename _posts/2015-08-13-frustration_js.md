---
layout: post

title: "Stop rage quits with this 1 easy trick"
date: 2015-08-13 10:00:00
tags: javascript

project: "https://github.com/isisAnchalee/Frustrated.js"
author: "https://github.com/isisAnchalee"

pn: "Frustrated.js"
an: "Isis Wenger"

description: "Frustrated.js is a JavaScript library that detects rapid-fire clicks on the client side."
issue: 101
img: "http://gam.s3.amazonaws.com/demo/i101/img/i101.gif"
medium: "https://medium.com/the-coffeelicious/you-may-have-seen-my-face-on-bart-8b9561003e0f"
hashtag: "https://twitter.com/hashtag/ilooklikeanengineer"
demo: "http://gam.s3.amazonaws.com/demo/i101/index.html"

---

Two weeks ago, <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong> was in <strong><a href="{{page.medium}}" title="Isis' Medium post" target="_blank">subway ad</a></strong>. A few Interturds said some dumb stuff and it led to <strong><a href="{{page.hashtag}}" title="#iLookLikeAnEngineer tweets on Twitter" target="_blank">this</a></strong>.

A few days later, I came across <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, one of Isis's repos, and it's hilariously awesome.

Frustrated.js listens for `customerFrustrated` events on your site, which are triggered by rapid-fire clicking &mdash; the type associated with UI freezing, long delays, and other table-flip-inducing bugs in your app.

<strong><a href="{{page.demo}}" title="{{page.pn}} demo" target="_blank">Try it out for yourself</a></strong>, I'll wait.

<center><img src="{{page.img}}" alt="{{page.pn}} in action" class="demo"></center>

Sure, it has comedic value, but {{page.pn}} is actually being used in  production. Mixpanel and Google Analytics can tell you about success &amp; drop off rates for specific actions in your app, but they _can't_ help you diagnose when or why users lose it and rage quit.

If you logged every `customerFrustrated` event and the page it occurred on, you could _objectively_ identify the most frustrating parts of your site and actually do something about them. How's that for actionable metrics?

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
