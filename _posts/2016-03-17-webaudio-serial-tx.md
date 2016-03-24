---
layout: post

title: "Data over audio"
date: 2016-03-17 10:00:00 EST
tags: javascript node

project: "https://github.com/substack/webaudio-serial-tx"
author: "https://github.com/substack"
an: "James Halliday"
pn: "webaudio-serial-tx"

description: "webaudio-serial-tx is a node package that encodes serial data over as an audio stream using the webaudio API."

issue: 130

video: "https://www.youtube.co/embed/a8VLnap86pA"
wiki: "https://www.wikiwand.com/en/Universal_asynchronous_receiver/transmitter#/Data_framing"
---

This week's project, <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, let's your phone (or any computer with a headphone jack) transmit serial data to hardware like an Arduino.

**Bottomline:** you can control physical things / servos / motors / hardware from your phone, using just the browser. Super useful for hackathon hackers.

Here's an example of a phone controlled servo from author <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>:

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='{{page.video}}' frameborder='0' allowfullscreen alt="{{page.pn}} demo video"></iframe></div>

How does it work? First, {{page.pn}} implements the UART protocol in JavaScript - which <strong><a href="page.wiki" target="_blank" title="UART on Wikipedia">encodes data as "framed" binary strings</a></strong>.

Next, it uses the WebAudio API to create an output buffer, mapping Os &amps 1s into voltages between -1 &amp 1, which are output via the headphone jack.

Everything is packaged up super nicely, so you can send data in a few lines of code:

```javascript
var serial = require('webaudio-serial-tx');
var port = serial({ baud: 9600 });
// oh man, remember when 9600 baud was a big deal?!

port.write(new Buffer(5000).fill('Hi There!'));
port.start();
```

If you browserify that script & run it in Chrome, you'll hear some digital noise coming out of your speakers&mdash;but trust me, your Arduino (with a few extra caps & resistors) will totally grok it.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
