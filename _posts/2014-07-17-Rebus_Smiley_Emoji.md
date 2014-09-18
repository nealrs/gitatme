---
layout: post

title: "Rebus > Smiley > Emoji"
date: 2014-07-17 10:00:00
tags: javascript

project: "https://github.com/hassankhan/emojify.js"
author: "https://github.com/hassankhan"
pn: "emojify.js"
an: "Hassan Khan"
discuss: "https://github.com/nealrs/gitatme-comments/issues/45"
description: "Emojify.js converts Emoji keywords into images."
issue: "45"
dict: "http://dictionary.reference.com/browse/rebus?s=t"
img: "http://gam.s3.amazonaws.com/demo/i45/i45.gif"
smirk: "http://hassankhan.github.io/emojify.js/images/emoji/smirk.png"
---
 
When I was in elementary school, I loved rebus stories. Not familiar? Random House defines a <strong><a href="{{ page.dict }}" target="_blank" title="definition of rebus">rebus</a></strong> as: 

> a representation of a word or phrase by pictures, symbols, etc., that suggest that word or phrase or its syllables: _Two gates and a head is a rebus for Gateshead._

Basically, it's the great granddaddy of emoji.

Emoji are excellent for short-handing long messages and expressing how you feel. However, Unicode / SoftBank encoding, Chrome's baffling lack of native support, and Android/iOS/Twitter quirks make cross-platform implementation tricky. 

Until there's a better solution, I suggest <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{page.pn}}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>. It's a Javascript library that converts emoji keywords like _:Smirk:_ into images <img src="{{page.smirk}}" style="width: 1.5em; height: 1.5em; display: inline-block; margin-bottom: -0.25em;vertical-align:baseline;">. 

Here's a rebus of what I was listening to all throughout 2012:

<center><img src="{{page.img}}" alt="{{page.pn}} in action" title="{{page.pn}} in action"></center>

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" >Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Discuss it</a></center>