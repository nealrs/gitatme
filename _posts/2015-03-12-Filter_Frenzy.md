---
layout: post

title: "Filter Frenzy"
date: 2015-03-12 10:00:00
tags: javascript

project: "https://github.com/rendro/vintageJS/"
author: "https://github.com/rendro/"
pn: "vintageJS"
an: "Robert Fleischmann"
description: "vintageJS adds Instagram style filter effects to images using the HTML5 canvas element."
issue: 79

img: "http://gam.s3.amazonaws.com/demo/i79/i79.gif"
demo: "http://gam.s3.amazonaws.com/demo/i79/index.html"
---

At first glance, Instagram seems pretty rad. I mean, _everybody_ looks better through Valencia, right? But, it's a closed system and eventually you'll get tired of Valencia, Rise, and the rest of the stock filters.

If you're willing to leave the app behind though, you can create your own filters with JavaScript. All you need is <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>.

Written by <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>, {{page.pn}} can non-destructively adjust an image's brightness, contrast, saturation, vignetting, and more.

<center><a href="{{page.img}}" title="{{page.pn}} demo"><img src="{{page.img}}" alt="{{page.pn}}"></a></center>

Here's the code for the preset vintage filter, which is comparable to IG's Lo-Fi. It features a curve transform, semi-transparent color overlay, and vignette effect:

```javascript
vintage: {
    curves: (function() {
      var rgb = function (x) {
        return -12 * Math.sin( x * 2 * Math.PI / 255 ) + x;
      },
      r = function(x) {
        return -0.2 * Math.pow(255 * x, 0.5) * Math.sin(Math.PI * (-0.0000195 * Math.pow(x, 2) + 0.0125 * x ) ) + x;
      },
      g = function(x) {
        return -0.001045244139166791 * Math.pow(x,2) + 1.2665372554875318 * x;
      },
      b = function(x) {
        return 0.57254902 * x + 53;
      },
      c = {r:[],g:[],b:[]};
      for(var i=0;i<=255;++i) {
        c.r[i] = r( rgb(i) );
        c.g[i] = g( rgb(i) );
        c.b[i] = b( rgb(i) );
      }
      return c;
    })(),
    screen: {
      r: 227,
      g: 12,
      b: 169,
      a: 0.15
    },
    vignette: 0.7
  }
```

Under the hood, {{page.pn}} redraws your original image on a hidden canvas element, applies the filter, base64 encodes the canvas, and then injects the coded data-uri into your original image's `src` attribute. It's very slick and you can download the filtered image.

Try out my <strong><a href="{{ page.demo }}" target="_blank" title="{{ page.pn }} demo">live demo</a></strong> for yourself and see what it's all about!


<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comment with markdown & emoji</a></center>
