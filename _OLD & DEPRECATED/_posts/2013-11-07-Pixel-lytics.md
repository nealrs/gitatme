---
layout: post

title: "Pixel-lytics"
date: 2013-11-07 10:00:00
tags: go

project: "https://github.com/cloudhead/pixelog"
author: "https://github.com/cloudhead"
discuss: "https://github.com/nealrs/gitatme-comments/issues/10"
description: "Using the oldest trick in the book, a transparent 1x1 gif, pixelog let's you  isolate and track specific activities across your app"
issue: "10"
---
Before graduate school I worked at Caterpillar's engine division. I learned a lot about product development and after four years, the smell of diesel fuel always makes me smile.

Caterpillar encourages a data-fearing culture&mdash;and for good reason. When you're designing multi-million dollar machines, you can't eyeball it. As a result, prototypes are heavily instrumented with accelerometers, load cells, GPS, thermocouples, microphones&mdash;the works. 

But whether you wire up 50 sensors or 100, no one is ever satisfied. Powertrain wants higher sampling rates. Chassis demands more strain gauges on critical joints. And Electronics will just die without at least 15 leads on the ECM.

For my team, in charge of pollution & exhaust controls, data was a luxury. We were an internal startup without a big budget, test priority, or 80+ years of history to lean on. We had to do more with less. That meant simplifying our sensor map down to the most critical channels and focusing on specific failure modes. Our focus paid dividends in the field - our product performed excellently with few warranty claims.

Since then, I've traded CAD for plaid & micrometers for MacBooks, but the lesson remains. You don't need to measure everything just because you can.

Consider <strong><a href="{{ page.project }}" target="_blank" title="xframe.js">pixelog</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="xframe.js">Alexis Sellier</a></strong>. Using the oldest trick in the book, a transparent 1x1 gif, you can isolate and track specific activities across your app:

<pre class="prettyprint lang-html">
&lt;!-- place tag on pages you want to track --&gt;
&lt;img src="http://pixelog.server/t.gif"&gt;

&lt;!-- include additional parameters by adding them to the url --&gt;
&lt;img src="http://pixelog.server/t.gif?param1=X&amp;param2=Y"&gt;
</pre>

The pixel server, written in Go, can reside anywhere and logs every request.

<pre class="prettyprint lang-bsh">
# start server on port 8080
go run pixelog.go 

# log output
2013/11/05 22:33:50 203.45.68.12 /t.gif?param1=X&amp;param2=Y "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36" http://app.server/pixel_test/
</pre>

In one line, you've got the answers to 5 key questions:

- When did the user access the page? (date & time) 
- Who are they? (user ip)
- Where are they on the site? (request url)
- What browser are they using? (user agent)
- How did get here? (referrer)

Even if you're beyond MVP, that's useful and actionable data. No JavaScript, no cookies, no extravagant dependencies, just 1 tag and 48 lines of code. Try incorporating pixelog into your next A/B landing page test, or extend it to <strong><a href="https://code.google.com/p/go-wiki/wiki/SendingMail" target="_blank" title="send email with Go"> send you an email</a></strong> when you reach 1000 visits/hour.  

While instrumentation costs for web & mobile (Google Analytics, MixPanel, etc) are effectively zero, measuring everything isn't a panacea. Meaningful analyses take time & money, and the learning curve is steep. Every time I open Google Analytics I feel like a deer caught in the headlights. Instead, focus on one particular problem and gather the data which validates or disproves your hypothesis.

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>