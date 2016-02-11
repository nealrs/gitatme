---
layout: post

title: "Signature of the times"
date: 2016-02-11 10:00:00 EST
tags: javascript

project: "https://github.com/szimek/signature_pad"
author: "https://github.com/szimek"
an: "Szymon Nowak"
pn: "Signature Pad"

description: "Signature Pad is a JavaScript library for drawing smooth signatures using HTML5 Canvas."

issue: 125

img: "http://gam.s3.amazonaws.com/img/i125.gif"
demo: "http://szimek.github.io/signature_pad/"
---

Thanks to the proliferation of Square card readers & POS terminals, signing for purchases on iPads and getting receipts via email is the norm in Brooklyn. And I dig it, because the digital pads & stylii at the grocery store / CVS are awful.

I also like how I can scan a copy of your signature in Preview on OSX and use that to e-sign documents. That's how I signed all the bazillions of forms in my coop application.

But, the $10,000,000 question is: can you do that on the web? YES! All you need is <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>'s excellent <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> JavaScript library.

{{page.pn}} uses HTML Canvas and some spline interpolation magic from Square to create a very fluid signature pad. The best part? you can save / export the drawn image as a base64 encoded PNG for later use.

<img src="{{page.img}}" class="demo">

<strong><a href="{{page.demo}}" title="{{page.pn}} live demo" target="_blank">Try the live demo</a></strong> on your computer, phone, or tablet.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
