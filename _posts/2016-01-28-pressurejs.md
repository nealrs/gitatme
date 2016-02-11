---
layout: post

title: "Under pressure"
date: 2016-1-28 10:00:00 EST
tags: javascript

project: "https://github.com/yamartino/pressure"
author: "https://github.com/yamartino"
an: "Stuart Yamartino"
pn: "pressure.js"

description: "Pressure is a JavaScript library for handling the iPhone 6s' Force and 3D Touch."

issue: 123

demo: "http://pressurejs.com/"
scaledemo: "http://yamartino.github.io/pressurejs-scale/"
gif: "https://camo.githubusercontent.com/ff9a4c42ce2565fd1ef4e2b55ebcd0e9028d6961/687474703a2f2f79616d617274696e6f2e6769746875622e696f2f70726573737572652f70726573737572652e676966"
---


When I switched to iOS, it took me a while to get used to the new Force and 3D touch features. If you don't use enough pressure, you enter "move icons around mode" instead of activating quick actions like peek and pop. But when it works, it's super neat.

Of course, Force only works in native apps, right? WRONG! <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> brings pressure sensitivity to the web. #Blessup 🙏

Written by <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>, {{page.pn}} is a JavaScript library that tracks how hard you're pressing on an element and if you're deep pressing on it (force click).

What can you do with it? This:

<img src="{{page.gif}}" class="demo">

If you've got an iPhone 6s, 2015 Macbook Pro, or Magic Trackpad 2, <strong><a href="{{page.demo}}" target="_blank" title="{{page.pn}} demo">try out the live demo</a></strong>. And if you've got a spoon nearby, you _must_ see <strong><a href="{{page.scaledemo}}" target="_blank" title="{{page.pn}} scale demo">weight scale demo</a></strong>.

The only major differences between the web and the native implementations are the calibration and lack of haptic feedback. And unfortunately, you can't fake the feedback on iOS with HTML5's vibration API.

Still, _this changes everything_ as more and more people upgrade to force-capable devices. Now go build something with it!

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
