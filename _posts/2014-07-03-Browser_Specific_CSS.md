---
layout: post

title: "Responsive Design by Browser & OS"
date: 2014-07-03 10:00:00
tags: javascript

project: "https://github.com/rafaelp/css_browser_selector"
author: "https://github.com/rafaelp"
pn: "CSS Browser Selector"
an: "Rafael Lima"
discuss: "https://github.com/nealrs/gitatme-comments/issues/43"
description: "Control page layout & behavior with CSS classes that correspond to browsers, platforms, and operating systems."
issue: "43"
demo: "http://gam.s3.amazonaws.com/demo/i43/index.html"
exp: "https://github.com/verbatim/css_browser_selector"
---

Responsive design is unequivocally cool. But for the most part, it's just a fancy way of reordering content based on screen size.

To provide a more tailored experience, try optimizing for multiple UI variables. <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{page.pn}}</a></strong> lets you style elements for particular browsers and operating systems using classes.

For example, let's say your app is available as a Chrome extension, on Android, and for iOS. Prompt visitors to download the appropriate version by styling the `.chrome`, `.ipad, .iphone`, and `.android` classes. You'll deliver a better user experience and cut down on visual clutter. <strong><a href="{{ page.demo }}" target="_blank" title="{{ page.pn }} Demo">Try my demo</a></strong> on a few different browsers/phones.

```css
/* default styling for <span class="store"></span> */
.store {
  content:url('def.png');
}

/* browser specific styling */
.chrome .store {
  content:url('chrome.png');
}
.ipad, .iphone .store {
  content:url('ios.png');
}
.android .store {
  content:url('android.png');
}
.win .store {
  content:url('win.png');
}
```

Cool right? Well, here's the bad news: the author, <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>, is no longer maintaining this project, and the <strong><a href="{{page.exp}}" target="_blank" title="{{ page.pn }} Experimental fork on GitHub">experimental fork</a></strong> has languished too.

It'd be a pity for this project to end, so please fork it and contribute!

<center><a href="{{page.exp}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" style="margin-right:10px;">Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Discuss it</a></center>
