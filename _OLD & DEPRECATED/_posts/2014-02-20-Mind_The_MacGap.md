---
layout: post

title: "Mind the MacGap"
date: 2014-02-20 10:00:00
tags: objective-c javascript

project: "https://github.com/maccman/macgap"
author: "https://github.com/maccman"
pn: "MacGap"
an: "Alex MacCaw"
discuss: "https://github.com/nealrs/gitatme-comments/issues/24"
description: "MacGap enables you to run HTML/JS webapps natively on OSX." 
issue: "24"

webapp: "http://nealshyam.com/utm/"
app: "http://gam.s3.amazonaws.com/demo/i24/Bossmode.zip"
img: "http://gam.s3.amazonaws.com/demo/i24/i24.png"
---

Have you ever written a JavaScript webapp? Yes? Awesome. How about a desktop app? Like a 'double click on this icon to launch it' app. No? Me neither &mdash; until last week.


With <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}</a></strong>, it only took me 20 minutes to convert my webapp, <strong><a href="{{page.webapp}}" title=" Bossmode web app" target="_blank">Bossmode</a></strong>, into a <strong><a href="{{page.app}}" title="Download Bossmode for OSX" target="_blank">stand alone .app</a></strong> for OSX.

<center><img src="{{page.img}}" alt="Bossmode screenshot" title="Bossmode screenshot"></center> 

Since the app was built in CSS/JS/HTML, I didn't have to learn Objective-C, rebuild the interface, or give up my responsive Bootstrap layout.

MacGap is comprised of two things: 

1. An Xcode project that wraps your webapp in a Webview container
2. A JavaScript API for OS resources (e.g. clipboard & notifications)

After copying your source into the `/public` directory and fixing any resource / path issues, you'll be able to compile & run it from the desktop. And bonus &mdash; you can publish it in the App Store! 

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>