---
layout: post

title: "Reverse Chromesthesia"
date: 2015-03-26 10:00:00
tags: javascript

project: "https://github.com/chelseavalentine/Chroma-Keyboard"
author1: "https://github.com/chelseavalentine"
author2: "https://github.com/ycp217"

pn: "Chroma Keyboard"
an1: "Chelsea Valentine"
an2: "Julie Pan"

description: "Chroma Keyboard is a JavaScript piano player controlled through camera input based on chroma-key selections."
issue: 81

demo: "http://chromakeyboard.s3-website-us-east-1.amazonaws.com/"
img: "http://gam.s3.amazonaws.com/img/i81.gif"

chromes: "http://en.wikipedia.org/wiki/Chromesthesia"
pearlhacks: "http://pearlhacks.challengepost.com/"
cp: "http://challengepost.com/software/chroma-keyboard"

---

_I know that I promised you more Ruby / Python / Shell stuff this week, but this project was too cool!_

<strong><a href="{{page.chromes}}" title="Look up Chromesthesia on Wikipedia" target="_blank">Chromesthesia</a></strong> is a type of Synesthesia in which certain sounds trigger the brain to perceive colors. In other words, some people can literally _see sound_. Trippy, right?

But how about the reverse: turning color into sound? That's exactly what <strong><a href="{{page.author1}}" title="{{page.an1}} on ChallengePost" target="_blank">{{page.an1}}</a></strong> and <strong><a href="{{page.author2}}" title="{{page.an2}} on ChallengePost" target="_blank">{{page.an2}}</a></strong> did at <strong><a href="{{page.pearlhacks}}" title="Pearl Hacks on ChallengePost" target="_blank">Pearl Hacks</a></strong>.

By combining a motion tracker with several other JS libraries, they created <strong><a href="{{page.cp}}" title="{{page.pn}} on ChallengePost" target="_blank">{{page.pn}}</a></strong>, a webcam controlled piano. It plays notes based on the colors it recognizes. For example, you could play an A just by holding up a red apple.

<center><img src="{{page.img}}" alt="{{page.pn}} in action" class="demo"></center>

Here's how the colors map to piano notes:
<span style="background-color: red;color:white;padding: 4px 8px;">A</span> <span style="background-color:cyan;color:black;padding: 4px 8px;">C</span>
<span style="background-color: magenta;color:white;padding: 4px 8px;">D</span>
<span style="background-color: yellow;color:black;padding: 4px 8px;">E</span>
<span style="background-color: purple;color:white;padding: 4px 8px;">F</span>
<span style="background-color: green;color:white;padding: 4px 8px;">G</span>

<strong><a href="{{page.demo}}" title="{{page.pn}} Demo" target="_blank">Try playing your own tune with {{page.pn}}</a></strong>, (works best on desktop).

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments</a></center>
