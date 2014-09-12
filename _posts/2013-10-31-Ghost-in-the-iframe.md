---
layout: post

title: "Ghost in the Iframe"
date: 2013-10-31 10:00:00
tags: javascript

project: "https://github.com/shokai/xframe.js"
author: "https://github.com/shokai"
discuss: "https://github.com/nealrs/gitatme-comments/issues/9"
description: "xframe.js enables you to scroll through cross-domain iframes with JavaScript. Once again, UI design is your prerogative."
issue: "9"
---
Skip the haunted house this year. You can spook a room full of designers and engineers with just one word. Turn down the lights and slowly creak out _frameset_. Goose bumps, right?

And to _really_ terrify them, follow it up with <em><strong><a href="http://en.wikipedia.org/wiki/Same-origin_policy" target="_blank" title="same origin policy on Wikipedia">same-origin policy</a></strong></em>. Don't get the joke? I'll explain.

Inline frames enable you to present content from different sources as a single document. However, because of the same-origin policy, that's about all you can do. Interactivity between cross-domain elements is extremely limited.

For a parent page hosted at X.com with iframe content from Y.com, there isn't an easy way to manipulate the iframe's DOM. Want to scroll the iframe from the parent page? Sorry, no dice. You'll have to focus on it with your mouse to scroll, and that's not always practical from a UI standpoint.

Fortunately, <strong><a href="{{ page.project }}" target="_blank" title="xframe.js">xframe.js</a></strong> overcomes some of these contraints. Created by <strong><a href="{{ page.author }}" target="_blank" title="Sho Hashimoto on GitHub">Sho Hashimoto</a></strong>, xframes enable you to scroll through cross-domain iframes with JavaScript. Once again, UI design is your prerogative.

<strong><a href="{{site.demo}}i9/index.html" target="_blank" title="HTML5 video background demo">Here's a demo</a></strong>, although implementation is quite straightforward:

```html
<html>
<head>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="xframe.min.js"></script>

<script type="text/javascript">
  var xframe = null;
  var url = "http://gitat.me";

  $(document).ready(function(){
    xframe = new XFrame("div#frame");
    xframe.load(url); // load iframe
    xframe.mouseScroll = true; // enable mouse scrolling
  });
</script>

</head>
<body>

  <!-- scroll via javascript or mouse -->
  <button onclick="xframe.scrollY(50)">scroll down</button>
  <button onclick="xframe.scrollY(-50)">scroll up</button>

  <div id="frame" style="width:450px; height:300px; padding:10px;"></div>

</body>
</html>
```

Granted, there are more powerful ways (easyXDM & postMessage) to enable cross-domain interaction, but in this case xframe.js requires less code. That's a trick _and_ a treat&mdash;Happy Halloween!

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
