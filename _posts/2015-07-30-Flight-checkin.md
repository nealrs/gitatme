---
layout: post

title: "Hacking the friendly skies"
date: 2015-07-30 10:00:00
tags: objective-c java python ruby javascript php


description: "A quick scan of GitHub confirms that developers hate manually checking in for flights."
issue: 99

img: "http://gam.s3.amazonaws.com/img/i99.gif"
search: "https://github.com/search?o=desc&q=check+in+southwest&ref=searchresults&s=updated&type=Repositories&utf8=%E2%9C%93"
blog: "http://blog.devpost.com/post/124154812036/no-api-no-problem-fake-it-with-browser"
---

_This is issue 99, just like FYI._


Two weeks ago, I wrote about web scrapers &amp; browser automation on the <span style="text-decoration: line-through;">Challenge</span><strong><a href="{{page.blog}}" title="Devpost Blog" target="_blank">Devpost Blog</a></strong>. And on Tuesday, someone wrote back about some issues with scraping & web automation with airline APIs. That got me thinking, "are there any airline APIs &mdash; for something other than fares & flight status?" The short answer is no, but I was surprised by what I found during my research.


There are no less than <strong><a href="{{page.search}}" title="Southwest Airline checkin repos on GitHub" target="_blank">15 repos on GitHub</a></strong> dedicated to automating Southwest Airlines checkins. I don't know what it is, but developers really hate checking in manually and are willing to do anything for premium seating.

<center><img src="{{page.img}}" alt="{{page.pn}} in action" class="demo"></center>

Many of these are browser automation scripts, which makes them excellent learning tools. Want to learn how to identify & fill in form elements, click buttons, or login to a website programmatically? Look at any of these repos and see how the authors did it. You'll find methods that use CSS selectors, regex, and xpath queries.

Once you master Southwest checkins, try logging into Netflix to retrieve the last 3 movies you watched, or download all of your bank statements from your local credit union, (because I _know_ they don't have an API).


<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
