---
layout: post

title: "Augment Your Browser's Reality"
date: 2014-03-06 10:00:00
tags: javascript

project: "https://github.com/eduardolundgren/tracking.js"
author: "https://github.com/eduardolundgren"
pn: "tracking.js"
an: "Eduardo Lundgren"
discuss: "https://github.com/nealrs/gitatme-comments/issues/26"
description: "tracking.js enables browser-based color & facial feature tracking"
issue: "26"

demo: "http://nealrs.github.io/i26"
---

Augmented Reality (AR) is one of those "just over the horizon" technologies that gets a little closer every year. First we had Sixth Sense from MIT (2009). Then Microsoft introduced the Kinect (2010). Later, GoldRun & Word Lens  brought AR to mobile (2011). And now, Google has given us Glass (2012). There's still miles to go, but we've made a lot of progress.

But you know what? I'm done waiting. I found some code that I can use right now, in my browser, to create basic AR interactions. <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}'s</a></strong> JavaScript <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong> library provides an API for color & 'human' feature tracking with your webcam.

You can track the 3D position of a color marker (cyan, magenta, and yellow) or facial feature (eyes, face, mouth, and upper body) and use it to trigger actions.

In my <strong><a href="{{ page.demo }}" target="_blank" title="{{page.project}} demo">demo</a></strong>, (Desktop & Chrome only), introducing a magenta or cyan object into the camera's view will trigger color inversion / report marker position.

<pre class="prettyprint lang-js">
&lt;script src="tracking.min.js"&gt;&lt;/script&gt;
&lt;script src="color.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  // start video tracking
  var videoCamera = new tracking.VideoCamera().render();
  // setup magenta color tracker & log object position
  videoCamera.track({
    type: 'color',
    color: 'magenta',
    onFound: function(track) {
      console.log(track.x + ", " + track.y + ", " + track.z);
    }
  });
&lt;/script&gt;
</pre>

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
