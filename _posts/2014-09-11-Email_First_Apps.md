---
layout: post

title: "Forget Frameworks &amp; Build Your App with Email"
date: 2014-09-11 10:00:00
tags: php

project: "https://github.com/digedu/bullet"
author: "https://github.com/jv2222"
pn: "Bullet"
an: "Justin Vincent"
discuss: "https://github.com/nealrs/gitatme-comments/issues/53"
description: "Bullet sends your team a daily email that you can use to discuss your progress / important items."
issue: "53"
img: "http://gam.s3.amazonaws.com/demo/i53/i53.png"
---

_I've been writing about JavaScript & Python a lot. What other languages / topics would you like to hear about?_

There are literally hundreds of web & app frameworks out there, but I'm bullish on email. Seriously, email stacks up pretty well as the basis for your next app:

- It's asynchronous
- It requires zero installation
- It runs on any device, network, or OS
- It already has push notifications

Email is especially well suited for reminder & reporting apps like <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}'s</a></strong> super simple <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{page.pn}}</a></strong> team management tool.

Written in under 100 lines of PHP, {{page.pn}} creates a daily email thread that your team can reply to with their accomplishments. _Boom_, instant accountability at morning standups!

Here's an example {{page.pn}} from a marketing team:

<center><img src="{{page.img}}" style="border: 1px solid #111111; border-radius:4px;" alt="{{ page.pn }} example"></center>

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" >Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Discuss it</a></center>
