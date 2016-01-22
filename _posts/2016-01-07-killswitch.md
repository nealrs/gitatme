---
layout: post

title: "Don't go nuclear"
date: 2016-01-07 10:00:00 EST
tags: php

description: "Killing your client's site is a petty short term solution to overdue bills. You can almost always achieve a more collaborative outcome by thinking about tradable issues, your ZOPA, and other negotiation tactics.  Hopefully, you'll never have to go nuclear"

issue: 120

r1: "https://github.com/bagwaa/killswitch"
r2: "https://github.com/animesht/killswitch"
r3: "https://github.com/AndrewChamp/website-killswitch"

gif: "https://media.giphy.com/media/bMza4SFYBEb8k/giphy.gif"
---

I once read a story about a fancy robotic parking garage. You'd drive in and it'd lift up your car, file it away, and wait for you to come back and punch in the right code. Then it'd spit your car back out on the street. At least, that's how it was _supposed_ to work.

After the city's parking authority fell behind on their garage bills, the company shut they down the garage remotely, effectively ransoming the city's cars 🙈 Nobody in. Nobody out 🙅

Did the garage company overreact? Perhaps. But developers, especially small contractors working on custom software projects, face this kind of dilemma _all the freaking time_. And sometimes, their only possible recourse is to **shut it down**.

<img src="{{page.gif}}" class="demo">

For web apps, you can do this by building in a "kill switch," which enables you to remotely shut down the app and inform users that your client owes you money.

There are lots of such repos on GitHub and I'm sad to report that most of them are written in PHP 😑 Apparently, nobody gets screwed harder than your friendly neighborhood PHP guy.

- <strong><a href="{{page.r1}}" title="Richard Bagshaw's kill switch" target="_blank">Richard Bagshaw's kill switch</a></strong> integrates with Laravel 5.
- Animesh Tripathi's version uses a MySQL database to let you <strong><a href="{{page.r2}}" title="Animesh Tripathi's version uses a MySQL database to let you control a ton of kill switches at once" target="_blank">control a ton of kill switches at once</a></strong>. Personally, I'd be a little worried if you have so many deadbeat clients that you need to spin up a database to manage them.
- Andrew Champ's kill switch uses a <strong><a href="{{page.r3}}" title="Andrew Champ's kill switch uses a remote xml file to trigger his kill switch." target="_blank">remote xml file</a></strong> to trigger his kill switch.

So look, instead of showing you how to use these, I want to stress the following:

**You are a human being. You are the work you do are valuable. If clients, recruiters, or your boss can't see that, you need to educate them or move on.**

Killing a client's site is a petty and largely short term solution. You'll achieve a more collaborative outcome by thinking about tradable issues, your ZOPA, and other negotiation tactics. Hopefully, you'll never have to go nuclear 💣

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
