---
layout: post

title: "What's for lunch?"
date: 2015-07-23 10:00:00
tags: javascript

project: "https://github.com/UsainBloot/wheel-of-lunch"
author: "https://github.com/UsainBloot"

pn: "Wheel of Lunch"
an: "Jack Palmer"

description: "Spin the Wheel of Lunch to find a great lunch spot near you."
issue: 98

img: "http://gam.s3.amazonaws.com/img/i98.gif"
demo: "http://usainbloot.github.io/wheel-of-lunch"
woh: "http://nealrs.github.io/hackwheel/"
hiring: "http://info.challengepost.com/jobs"
---

_FYI: Our second anniversary is six weeks away. If you're in NYC on September 3rd, I'd love to buy you a beer and chat about nerd shit. **[Email me](mailto:neal@gitat.me)** if you're interested._

Americans are weird about eating lunch at work. We treat it as a chore, often eating at our desks, cramming our face between meetings, and settling for mediocre sandwiches.

Frankly, I suspect that my office mates care more about their coffee, as evidenced by our three coffee making apparatus. Thankfully, we're located in Manhattan's Meatpacking District where exciting restaurants abound (btw, we're <strong><a href="{{page.hiring}}" title="ChallengePost is hiring developers, product managers, and sales people." target="_blank">hiring</a></strong>). That just leaves the one very _#firstworldproblem_: "what do I want to eat?"


Well, wonder no more. Thanks to <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>, all you have to do is spin the <strong><a href="{{page.demo}}" title="{{page.pn}} demo on GitHub" target="_blank">{{page.pn}}</a></strong> and prepare to be wowed. WoL will figure out where you are, pick 12 nearby lunch spots, randomly select one for you, tell you where it is, and celebrate your good gustatory fortune with some HTML5 confetti.

<center><img src="{{page.img}}" alt="{{page.pn}} in action" class="demo"></center>

Before you dismiss it as yet another colorful API mashup, <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">dig into the code</a></strong>. Under the hood, WoL uses Google Places, canvas, geo-ip location, a custom REST API, canvas elements, a decent amount of geometry, and an auto-expanding search algorithm to ensure that it returns 12 locations no matter where you are.

And like any great open source project, {{page.pn}} is hackable. For example, I stripped out the geo-location &amp; Places bits to create my <strong><a href="{{page.woh}}" title="Spin the Wheel-O-Hackthons!" target="_blank">Wheel-O-Hackathons</a></strong>.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
