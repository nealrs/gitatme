---
layout: post

title: "Social Money Scams"
date: 2014-11-26 10:00:00
tags: ruby python

project: "https://github.com/jaewoongh/can-you-spare-me-a-dollar"
author: "https://github.com/jaewoongh"
pn: "Can you spare me a dollar?"
an: "Jaewoong Hwang"
description: "Can you spare me a dollar? is a simple script asking all of your Venmo friends a dollar."
options: "https://github.com/jaewoongh/can-you-spare-me-a-dollar#options"
issue: 64
---

Last week, a buddy from b-school texted me about an "exciting new app idea": P2P lending via Venmo. And while usury is awful, it got me thinking about the API's Terms of Service and potential hacks. After some googling, I landed on <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>'s <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> project. 

As the name implies, CYSMAD asks all your friends to Venmo you a dollar. It's a fun hack. However, it's real purpose is to "creatively misuse an existing API in order to reveal something about the service," (as an academic exercise). 

Look at the <strong><a href="{{page.options}}" title="{{page.pn}} options" target="_blank">command line options</a></strong> and you'll see that Jaewoong has laid the groundwork for Venmo scams thanks to his script's broad reach `-d`, high upside `-c`, and malleable messaging `-t`.

For example, you could privately ask 5,000 people to donate $5 in order to "save the whales" &mdash; and to reduce your exposure, instead of asking your _direct_ friends, ask _their_ friends, their _friends'_ friends, and their _friends' friends'_ friends):

```bash
./script.rb -a "private" -l 5000 -Fd 3 -c 5 -n "Let's save the whales, donate $5 today!" -t VENMO_TOKEN 
```

With great APIs comes great responsibility, and that applies equally to providers, developers, and consumers. So don't be a dick.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Do you even comment bro?</a></center>
