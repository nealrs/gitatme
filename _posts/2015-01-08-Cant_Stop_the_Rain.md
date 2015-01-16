---
layout: post

title: "I Can't Stop the Rain"
date: 2015-01-08 10:00:00
tags: go

project: "https://github.com/jfrazelle/weather"
author: "https://github.com/jfrazelle"
pn: "Weather"
an: "Jessie Frazelle"
description: "Weather is a command line weather app written in Go."
issue: 70

img: "http://gam.s3.amazonaws.com/img/i70.png"
poncho: "http://poncho.is"
---

<strong><a href="{{ page.poncho }}" target="_blank" title="Poncho">Poncho</a></strong> is one of my favorite micro-apps. Every morning I wake up to an email about the weather and if I need an umbrella. Later in the day, I get another about my commute home. It's awesome.

However, Poncho falls short whenever I nip out for lunch or need a multi-day forecast. I know I could check my phone or Weather.com, but I always end up in a Wikipedia loop.

That's why I dig <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>'s aptly named <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> app. Written in Go, it uses forecast.io's API, geo-ip location, and ASCII art to deliver weather reports to your console:

<center><img src="{{page.img}}" alt="{{ page.pn }} demo"></center>

The app also has options for alternate locations `-l 06511`, units `-u si`, and days `-d 3`. Give it a try!

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Do you even comment bruh?</a></center>
