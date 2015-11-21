---
layout: post

title: "Node people manager"
date: 2015-11-26 10:00:00 EST
tags: javascript node

project: "https://github.com/johnkpaul/johnkpaul"
author: "https://github.com/johnkpaul"

pn: "johnkpaul"
an: "John K. Paul"

description: "johnkpaul is an npm package which reports John's contact info."

issue: 116

img: "http://gam.s3.amazonaws.com/img/i116.gif"
nealrs: "https://www.npmjs.com/package/nealrs"
---

I follow (roughly) a zillion people on GitHub, so things bubble up pretty quickly in my feed.

Last Friday, I saw that Nicolas Bevacqua had forked a project from Guillermo Rauch, who had forked it from <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>, all within 3 hours.

The project in question was John's <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, which is a cute use of npm, JavaScript, and JSON. It wraps up all your contact info so that you can distribute it with a simple `npm install`.

Here's an example of <strong><a href="{{page.nealrs}}" title="nealrs on npm" target="_blank"><em>my</em> fork</a></strong> in action:

<img src="{{page.img}}" class="demo">

Pretty neat, right? When you install the package, it echoes back all of the author's info&mdash;sort of like a digital business card.

To make your own, fork the project, edit the `info.json` and `package.json` accordingly files, and publish it to npm `npm publish ./`.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
