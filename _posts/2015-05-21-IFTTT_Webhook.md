---
layout: post

title: "If this, then webhook"
date: 2015-05-21 10:00:00
tags: php

project: "https://github.com/captn3m0/ifttt-webhook"
author: "https://github.com/captn3m0"

pn: "ifttt-webhook"
an: "Abhay Rana"

description: "ifttt-webhook is a PHP middleware that spoofs a WordPress blog so that you can create IFTTT webhooks."
issue: 89

chd: "https://twitter.com/hashtag/comedyhackday"
ifttt: "https://ifttt.com"
mom: "https://github.com/nealrs/mom/blob/master/wsgi/app.py"
img: "http://gam.s3.amazonaws.com/img/i89.png"
img2: "http://gam.s3.amazonaws.com/img/i89_2.png"
---

Last weekend, I went to <strong><a href="{{page.chd}}" title="Comedy Hack Day on Twitter (because I said so!)" target="_blank">Comedy Hack Day 8</a></strong>, met some very funny people, and built MomMMS. Designed as an _invisible app_, it texts your mother a short message after every 100 texts to your ratchet friends.

<center><img src="{{page.img2}}" alt="MomMMS in action" class="demo" style="width:500px;"></center>

That's literally all it does, but texts could be triggered at 3pm when you're making dinner plans, or 3am when you're making booty calls. Either way, your mom's getting a text and you have to deal with the consequences.

MomMMS is Android only, but I didn't have to write any native / hybrid code. It's a total MacGyver hack powered by <strong><a href="{{page.ifttt}}" title="If This Then That (IFTTT)" target="_blank">IFTTT</a></strong>. Here's how it works:

1. IFTTT's mobile app keeps track of all my outgoing texts and for each one, it triggers a webhook that I wrote in Python.

2. The webhook checks a Firebase to see how many requests have been logged, and if there more than 99, it clears the db and sends a specially addressed email to my gmail account. If there are less than 99 messages, it adds a new record to the db.

3. Finally, IFTTT's mobile app intercepts the special email and sends a text to my mom.

<center><img src="{{page.img}}" alt="MomMMS triggers in IFTTT app" class="demo" style="width:500px;"></center>

Neat right? But here's the thing &mdash; IFTTT doesn't support webhooks! (It's been the most requested feature for over 3 years.)

Fortunately, there's a workaround: <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>&rsquo;s totally rad <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>.

{{page.pn}} is a PHP script that spoofs WordPress' XML-RPC endpoints. It tricks IFTTT into thinking that it's creating a new WordPress blog post (which is a supported action), but it actually sends JSON to your webhook and runs code on your server!

With IFTTT's Android app and {{page.pn}}, you can build very sophisticated workflows without any Java/PhoneGap code. Fork <strong><a href="{{page.mom}}" title="My MomMMS webhook on GitHub" target="_blank">my webhook</a></strong> and try it for yourself.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
