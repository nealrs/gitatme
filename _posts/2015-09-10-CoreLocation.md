---
layout: post

title: "Dude, where's my lat/long?"
date: 2015-09-10 10:00:00
tags: objective-c

project: "https://github.com/fulldecent/corelocationcli"
author: "https://github.com/fulldecent"

pn: "CoreLocationCLI"
an: "William Entriken"

description: "CoreLocationCLI is a Mac app that continuously prints location, speed, and altitude information from the CoreLocation API to the terminal."
issue: 105
img1: "http://gam.s3.amazonaws.com/img/i105a.png"
img2: "http://gam.s3.amazonaws.com/img/i105b.png"
---

While digging through GitHub this week, I found a fun repo that takes advantage of Apple's CoreLocation API. <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, written by <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>, reports your current latitude, longitude, speed, altitude, and heading in your terminal.

<center><img src="{{page.img1}}" alt="{{page.pn}} screenshot" ></center>

I know it's just an API wrapper, but you don't need any geo-ip libraries or databases to get an accurate location&mdash;just good Wi-Fi.

To continuously monitor your location or speed / altitude, just omit the `-once YES` flag and {{page.pn}} will repeat until you kill it. You can also format the output using the `-format` flag, which is useful for data logging.

How accurate is the CoreLocation API? According to Google Maps, very. The blue dot below represents where Google thinks I am, while the red marker is the lat/long from {{page.pn}}.
<center><img src="{{page.img2}}" alt="Verifying CoreLocationCLI's output vs. Google Maps"></center>

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
