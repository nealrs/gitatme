---
layout: post

title: "Stop Talking to Yourself"
date: 2013-12-12 10:00:00
tags: javascript

project: "https://github.com/TalAter/annyang"
author: "https://github.com/TalAter"
discuss: "https://github.com/nealrs/gitatme-comments/issues/15"
demo: "http://gam.s3.amazonaws.com/demo/i15/index.html"
description: "Annyang provides easy access to the Web Speech API, enabling you to define voice commands for your web app."
issue: "15"
---

It really bugs me that Google Now and Siri don't have public voice APIs. Speech recognition is capable of so much more than weather reports and egg timers.

I see a lot of potential in voice based interfaces, but I don't want to reinvent the wheel. Fortunately, once you download <strong><a href="{{ page.author }}" target="_blank" title="Tal Ater">Tal Ater</a></strong>'s JavaScript library <strong><a href="{{ page.project }}" target="_blank" title="Annyang on GitHub">Annyang</a></strong> (Hello!) you're ready to roll.

Annyang provides easy access to the Web Speech API, (make sure you're using Chrome), enabling you to define voice commands for your web app. Need a demo? <strong><a href="{{ page.demo }}" target="_blank" title="Annyang Demo">Try submitting this form entirely hands-free</a></strong>.

Annyang is easy to implement and accessible via CDN:

<pre class="prettyprint lang-html">
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/annyang/0.2.0/annyang.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
if (annyang) {

&nbsp;&nbsp;// define functions up front
&nbsp;&nbsp;var alertName = function(name){
&nbsp;&nbsp;&nbsp;&nbsp;alert("Your name is " + name);
&nbsp;&nbsp;}
	
&nbsp;&nbsp;var alertLoc = function(loc){
&nbsp;&nbsp;&nbsp;&nbsp;alert("You live in " + loc);
&nbsp;&nbsp;}
	
&nbsp;&nbsp;var commands = {
&nbsp;&nbsp;&nbsp;&nbsp;// or define voice commands and functions together
&nbsp;&nbsp;&nbsp;&nbsp;'go home': function(){ window.location = "http://gitat.me";},
		
&nbsp;&nbsp;&nbsp;&nbsp;// define voice commands with one word variables ('My name is Neal')
&nbsp;&nbsp;&nbsp;&nbsp;'my name is :name': alertName,
		
&nbsp;&nbsp;&nbsp;&nbsp;// or multi-world variables (e.g. 'I live in New York City')
&nbsp;&nbsp;&nbsp;&nbsp;'I live in *loc': alertLoc
&nbsp;&nbsp;};
&nbsp;&nbsp;annyang.init(commands);
&nbsp;&nbsp;annyang.start();
}
&lt;/script&gt;
</pre>

Speech recognition isn't going to replace your keyboard or mouse tomorrow, but it's on the horizon. Siri, get excited!

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>