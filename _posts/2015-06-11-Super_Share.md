---
layout: post

title: "Better URLs for Google Drive"
date: 2015-06-11 10:00:00
tags: java

project: "https://github.com/rlancer/super-share"
author: "https://github.com/rlancer"

pn: "Super Share"
an: "Robert Lancer"

description: "Super Share is a Google App Engine program that creates shorter, more memorable URLs for shared files on Google Drive."
issue: 92

longurl: "https://docs.google.com/spreadsheets/d/1kFC3ZEdOo489mwQ17yykHt455v0nnWjSleeRuRlE/edit?usp=sharing"
slides: "http://share.robertlancer.com/Super-Share"
embed: "https://docs.google.com/a/see.pub/presentation/d/1UBP72MskfBrCITeRWR9jQkswXfHT4TXx46a1OQxz6l0/preview"
---


I have a love/hate relationship with Google Docs. I love the revision control and any time/place/platform access. But, I hate the way it organizes files (it doesn't) and I don't like how the URLs are total gibberish: <em><span style="word-wrap: break-word; overflow-wrap:break-word;">{{page.longurl}}</span></em>.

Of course, you can use a shortener like bit.ly or goo.gl, but you still end up with gibberish (_https://goo.gl/2OgSvo_). Fortunately, if you're a Google Apps user, you can take advantage of some nifty permissions, a little Java, and Google's App Engine to create better sharing URLs.

<strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, built by <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>, serves files from your Google Drive via a custom subdomain and without Google's interface/branding.

So, instead of long ugly URLs, you can use something more memorable, like _http://foo.bar.baz/filename_. Robert has a great slide deck explaining {{page.pn}} which, conveniently, you can find at <strong><a href="{{page.project}}" title="{{page.slides}} slide deck" target="_blank">{{page.slides}}</a></strong> or embedded below:

<iframe src="{{page.embed}}" frameborder=0 style="height:500px;width:100%;"/></iframe>

If your business relies on sharing files stored on Google Drive, take a closer look at {{page.pn}}. 


<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
