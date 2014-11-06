---
layout: post

title: "Torrents to TV"
date: 2014-11-06 10:00:00
tags: node javascript hardware

project: "https://github.com/xat/castnow"
author: "https://github.com/xat"
pn: "castnow"
an: "Simon Kusterer"
description: "Castnow is a command line Chromecast player written in node.js"
video: "http://www.youtube.com/embed/Z3rtJ_B2yWI"
micdrop: "http://media.giphy.com/media/IOCXHPvn3WErm/giphy.gif"
issue: 61
---

Back in August, Popcorn Time debuted a beautiful media player that made streaming torrents as easy as watching Netflix. It quickly proceeded to melt Hacker News, Reddit, and the MPAA's last nerve. The cease & desists were swift.

There have been a few attempts to clone Popcorn, (popcorntime.io and Joker), but none have addressed the holy grail of streaming: torrents to TV.

Well, I've got a solution that only costs $35. All you need is a Chromecast and <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>.

{{page.pn}} is a node.js app that streams local and remote files, YouTube videos, **and torrents** directly to your TV &mdash; just run `castnow <URL>`. No pre-downloading. No cables. No sketchy media server apps.

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='{{page.video}}' frameborder='0' allowfullscreen></iframe></div>

If you have a Chromecast and aren't afraid of the command line, {{page.pn}} is a slick addition to your home theatre setup.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Join the discussion</a></center>
