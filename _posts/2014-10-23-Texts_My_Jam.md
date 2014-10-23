---
layout: post

title: "Texts My Jam!"
date: 2014-10-23 10:00:00
tags: ruby

project: "https://github.com/AndrewSB/play-my-jam"
author: "https://github.com/AndrewSB"
pn: "Play My Jam"
an: "Andrew Breckenridge"
description: "Play My Jam streams your favorite songs to your phone, by actually calling you."
img: "http://gam.s3.amazonaws.com/img/textstream.png"
bm: "http://boilermake2014.challengepost.com"
---

Everybody has their own criteria about what makes a great hackathon project, but mine is pretty simple: will I still be using it in a week?

It's been 4 days since <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}'s</a></strong> team demoed <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> at <strong><a href="{{ page.bm }}" target="_blank" title="BoilerMake projects on ChallengePost">BoilerMake</a></strong> and I'm still digging it.

This Twilio / YouTube mashup streams music to your smartphone using &mdash; wait for it &mdash; _phone calls_.

<center><img src="{{page.img}}" class="demo" alt="{{ page.pn }} SMS interface">
_{{page.pn}} can search by song or artist_</center>



**How it works:**

1. Text your favorite artist or song to 918.212.9899.
2. The app searches YouTube for the corresponding video / artist's most popular song.
3. The app texts you back to confirm the song.
4. Finally, the app uses YouTubeInMP3's API to call you back & play the song.

{{page.pn}} is fun, hackable, and just might motivate you to pick up once in a while.

_Want to play a fun game?_ Send your friends a song with this syntax: `{song/artist} -num {xxx.xxx.xxxx}`. But be warned, things can escalate quickly.

FYI: since this _is_ a hack — you may get some errors.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Join the discussion</a></center>
