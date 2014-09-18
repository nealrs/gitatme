---
layout: post

title: "Functional Forms"
date: 2014-04-17 10:00:00
tags: css javascript

project: "https://github.com/kumailht/gridforms"
author: "https://github.com/kumailht"
pn: "Gridforms"
an: "Kumail Hunaid"
discuss: "https://github.com/nealrs/gitatme-comments/issues/32"
description: "Gridforms is a front-end jQuery plugin for creating grid based forms."
issue: "32"
form: "http://gam.s3.amazonaws.com/demo/i32/offerform.pdf"
demo: "http://gam.s3.amazonaws.com/demo/i32/i32.html"

---

HTML forms are great for logins & e-commerce, but not for lengthy data entry tasks. Here's an example: the <strong><a href="{{ page.form }}" target="_blank" title="standard real estate offer form">standard offer form</a></strong> used by most NYC realtors.

Replicating that with traditional `input` controls & styling would be a positioning nightmare and you'd probably have to resort to the Voldermort of HTML (*tables*).  

Fortunately, <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}</a></strong> came up with <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong>, a front-end framework for building denser, print-style forms. It's responsive, highlights the active field, and supports tab navigation.

Demo: <strong><a href="{{ page.demo }}" target="_blank" title="{{ page.pn }} demo">*interactive* offer form</a></strong> (best viewed on desktop).

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" >Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Join the discussion</a></center>