---
layout: post

title: "You Down With OGP?"
date: 2014-03-20 10:00:00
tags: python

project: "https://github.com/erikriver/opengraph"
author: "https://github.com/erikriver"
pn: "OpenGraph"
an: "Erik Rivera"
discuss: "https://github.com/nealrs/gitatme-comments/issues/28"
description: "OpenGraph is a Python module for parsing Open Graph Protocol metadata"
issue: "28"
img: "http://gam.s3.amazonaws.com/img/issue_28.png"
ogp: "http://ogp.me/"

---

Sharing links via social media is a pretty mundane task, but have you ever wondered how Google & Facebook always know the exact title, summary, and image to display?

<center><img src="{{page.img}}" alt="Sharing a link on Google+" title="Sharing a link on Google+"></center> 

There's some neat tech at work there and it's based on the <strong><a href="{{ page.ogp }}" target="_blank" title="Open Graph Protocol (OGP)">Open Graph Protocol (OGP)</a></strong>. OGP meta tags enable graph-aware apps to see what's behind a link - if you know how to parse them.

Of course, the last thing you want to do is write _yet another_ HTML parser. Luckily, you don't have to!

<strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}</a></strong> already did the work for you with his <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong> Python module. In three lines of code, {{page.pn}} can tell you if a URL has valid OGP tags and output them as HTML or JSON. QED and on to your next challenge!

<pre class="prettyprint lang-python">
import opengraph

url = opengraph.OpenGraph(url="http://goo.gl/b1CTb3")
url.is_valid()
# returns true since OGP tags are valid

print url.to_json()
# JSON at your service!
'''
{
  "site_name": "Gizmodo",
  "description": "Google just announced its first real foray into the frenzied fray of the smartwatch world: Android Wear. That's an accurate name for a wearable, Android-powered device, sure, but it's also a little misleading. This is a Google Now watch. And that's excellent news.",
  "title": "Android Wear Is Just a Google Now Watch (And That's Great)",
  "url": "http:\/\/gizmodo.com\/android-wear-is-just-a-google-now-watch-and-thats-gre-1546476502",
  "image": "http:\/\/i.kinja-img.com\/gawker-media\/image\/upload\/t_k-bigpic\/tdugvzikcz8dhs4wj0ju.png",
  "scrape": false,
  "locale": "en_US",
  "_url": "http:\/\/goo.gl\/b1CTb3",
  "type": "article"
}
'''
</pre>

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
