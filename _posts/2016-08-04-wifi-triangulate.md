---
layout: post

title: "Sneaky spy"
date: 2016-08-04 10:00:00 EST
tags: javascript node

an: "Thomas Watson Steen"
author: "https://github.com/watson"
pn: "wifi-triangulate"
project: "https://github.com/watson/wifi-triangulate"

description: "wifi-triangulate returns your position using nearby wifi access points"

issue: 149

img: "http://gam.s3.amazonaws.com/img/i149.png"
---

There are lots of ways for an application to get your current location (latitude / longitude) programmatically, but [{{page.pn}}]({{page.project}}) is a little shady.

Most web apps ask for your permission before accessing your location (there's a whole browser based API for this). But with {{page.pn}}, there's no opt-in and it's quite accurate. Pretty sure you could use this to locate a user, _silently_, without consent.

<a href="{{page.img}}" title="{{page.pn}} demo" ><img src="{{page.img}}" alt="{{page.pn}} demo" class="demo"/></a>

Yes, there are other / easier ways to get a user's location. And no, this library isn't inherently "evil." But please be careful and follow the golden rule of software development: **don't be a dick** (or a sucker).
