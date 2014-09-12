---
layout: post

title: "The Client (Side) Is Always Right"
date: 2014-02-27 10:00:00
tags: javascript

project: "https://github.com/mozilla/localForage"
author: "https://github.com/tofumatt"
pn: "localForage"
an: "Matthew Riley MacPherson"
discuss: "https://github.com/nealrs/gitatme-comments/issues/25"
description: "localForage gives your web app asynchronous offline storage"
issue: "25"

demo: "http://nealrs.github.io/ScratchPad/"
---

I think we've reached "peak cloud." Marketers are running around pitching it like a Ginsu knife: _It stores all of your data securely! It's cheap! It's accessible anywhere! And wait, there's more!_

Sounds great, but I don't want all of my personal data on remote servers. Cloud APIs come with rate limits and per request pricing adds up. And on slow or intermittent connections, the cloud is more hinderance than help.

Enter client-side storage. Although it's limited to a few megabytes per domain, it can help you speed up your app by storing user-specific data locally. That way you don't have to make a new API call every time you launch a new tab or refresh the page.

Building on the existing HTML5 localStorage API, <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}</a></strong> has created an asynchronous, multi-protocol interface for client-side storage called <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong>. No matter what storage engines your browser supports &mdash; localStorage, IndexedDB, WebSQL &mdash; it will pick the best one for you and wrap it up with promise & callback support.

So now, you can store and persist data for your app, on/off-line, with a single method. And since {{page.pn}} automatically handles input/output serialization, you can use it for images, numbers, HTML, text, or whatever.

Check it out for yourself in my <strong><a href="{{ page.demo }}" target="_blank" title="localForage demo">scratchpad demo</a></strong>. Write a note, save it, and then refresh the page or clear the text area. You can reload the note by clicking revert, even across browser sessions.

```html
<html>
<head>
  <link href="i25.css" rel="stylesheet">
  <script src="localforage.min.js"></script>
  <script>
    // promise functions for localForage functions
    function onSave(value){
	  console.log("Text saved: "+value);
	}

	function onRevert(value){
	  console.log("Text retreived: "+value);
	  document.getElementById("text").value=value;
	}

	// revert, save, and clear functions using localForage
	function rText(){
	  localforage.getItem('savedText').then(onRevert);
	}

	function sText(){
	  x = document.getElementById("text").value;
	  // localForage uses a key/value pair to access & store data
	  // here, 'savedText' is our key and x is the value
	  localforage.setItem('savedText', x).then(onSave);
	}

	function cText(){
	  document.getElementById("text").value="";
	  console.log("Text cleared");
	}
  </script>
</head>
<body>
  <textarea id="text" class="tarea" placeholder="Enter text, save it, clear it, and revert it!"></textarea><br/>
  <a class="b1" onclick="rText()">Revert</a>&nbsp;&nbsp;
  <a class="b2" onclick="sText()">Save</a>&nbsp;&nbsp;
  <a class="b3" onclick="cText()">Clear</a>
</body>
</html>
```

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
