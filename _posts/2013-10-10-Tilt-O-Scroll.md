---
layout: post

title: "Tilt-O-Scroll"
date: 2013-10-10 10:00:00
tags: javascript

project: "https://github.com/tomgco/gyro.js"
demo: "i6.html"
discuss: "https://github.com/nealrs/gitatme-comments/issues/6"
description: "Gyro.js rolls up sensor protocols for iOS, Chrome, and Firefox into a streamlined API, enabling a broad range of motion dependent behavior on Android & iOS."
issue: "6"
---

<p>Until recently, mobile accelerometer & gyroscope driven actions were fairly device specific & limited to native applications. There just wasn't a reliable way of accessing the sensors across browsers.</p>

<p>Fortunately, the <strong><a href="{{ page.project }}" target="_blank" title="gyro.js">gyro.js</a></strong> library offers relief, rolling up sensor protocols for iOS, Chrome, and Firefox into a streamlined API, enabling a broad range of motion dependent behavior on Android & iOS.</p>

<p>So, instead of scrolling through webpages with your greasy fingers, (what is this 2011?), <strong><a href="{{site.demo}}i6/index.html" target="blank" title="Tilt-O-Scroll Demo">you can use your phone's gyro to automatically scroll up & down when you tilt your phone toward or away from you</a></strong>. After all, your Doritos, TV remote, and venti soy pumpkin spice latte aren't going to work themselves!</p>

<p><strong>10</strong> Set baseline position at 45&deg; from vertical - the way most people hold their phones</br>
<strong>20</strong> Poll gyro sensor at regular intervals to check position</br>
<strong>30</strong> Calculate  difference between current position & baseline</br>
<strong>40</strong> If difference is within trigger bounds, scroll page</br>
<strong>50 </strong>GOTO 20</p>

<p><center><strong><img src="{{site.img}}issue_6_fig_1.png" style="max-width:300px; text-align:center;" alt="Orientation & Tilt Zones" title="Orientation & Tilt Zones" itemprop="image"><br>
Orientation & Tilt Zones</strong>
</center></p>

```js
function tiltScroll(y) { window.scrollBy(0,y); }
function tiltColor(c) { $('p').css( "color", c); }

gyro.frequency = 300;   // set polling interval to 300ms
gyro.startTracking(function(o) {

	var b0 = 45;        // set baseline
	var b1 = o.beta;    // get gyro data
	var db = b1 - b0;   // calculate tilt delta

	var g0 = -45; 		// use gamma plane for landscape orientation
	var g1 = o.gamma;
	var dg = g1 - g0;

	// set angular bounds for up & down scroll zones with a 45 degree 'baseline'
	if ((db > 3 && db < 15) || (dg < -5 && dg > -25)) {
		tiltScroll(-25)     // up
		tiltColor("blue")

	} else if ((db < -5 && db > -25) || (dg > 3 && dg < 15)) {
			tiltScroll(25)  // down
			tiltColor("red")

		} else { tiltColor("black") }  // reset
});
```

<p>To ensure a consistent UX across devices, consider using the percentage change in tilt rather than the absolute difference. 12&deg; & 20&deg; intervals work well for phones, but may not be ideal for tablets. Additionally, if you're designing for both portrait and landscape orientations, you'll probably need to incorporate alpha & accelerometer data.</p>

<p><strong>
	<a class = "nodeco" href="{{site.demo}}i6/index.html" target="_blank" title="Download Tilt-O-Scroll Demo"><i class="icon-cloud-download icon-large "></i> Download the demo</a>,  
  <a class = "nodeco" href={{ page.project }} target="_blank" title="Download gyro.js"><i class="icon-code-fork icon-large "></i> Get gyro.js</a>, and join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
