---
layout: post

title: "Scraper Scuffles"
date: 2016-09-01 10:00:00 EST
tags: python

an: "Randall Degges"
author: "https://github.com/rdegges"
pn: "useragent-api"
project: "https://github.com/rdegges/useragent-api"

description: "useragent-api is a Python API which returns a random user agent string -- great for tricking anti-scraper measures."

issue: 153

---

Web scraping is in the middle of an arms race. Last week, I read [an article by Francis Kim](https://franciskim.co/2016/08/24/dont-need-no-stinking-api-web-scraping-2016-beyond/) about how scraping&mdash;every hacker's favorite tool for getting around APIs, data-mining, and liberating data&mdash;has become harder, because sites are getting better at identifying scrapers and shutting them out.

Francis lays out a bunch of solutions ([including an alarming anti-CAPTCHA service](http://antigate.com/)) for defeating anti-scraping measures. However I was surprised that neither he nor any commenters mentioned user agent strings.

PhantomJS, Selenium, and other automation tools usually allow you to spoof a particular UA, so why aren't more people using this to make their scrapers appear to be real, random browsers?

A few days later, I came across [{{page.an}}' {{page.pn}}]({{page.project}}) which returns a random UA string every time you make a request. It's not a panacea, but is an elegant solution for masking your scripts intentions &amp; provenance.

Unlike the Cold War, I think the battle over scraping is going to get _hot_. Keep your eyes peeled.
