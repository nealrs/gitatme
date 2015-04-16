---
layout: post

title: "Who Really Understands SEO?"
date: 2015-03-19 10:00:00
tags: node javascript

project: "https://github.com/code4funFr/Google-Scraper"
author: "https://github.com/code4funFr"
pn: "GoogleScraper"
an: "Thomas Blanc-Hector"
description: "GoogleScraper is a nodejs module that extracts links from Google search engine result pages."
issue: 80
img: "http://gam.s3.amazonaws.com/img/i80.png"
serp: "http://en.wikipedia.org/wiki/Search_engine_results_page"

---
_I know I've been writing about JavaScript a lot recently. I'll do my best to find some awesome Ruby / Python / PHP projects next week!_

During a recent search engine optimization (SEO) audit, I realized that I had no idea what my search rankings were or how to track them. Since then, I've added "learn about SEO" to my quarterly goals.

I found a bunch of SaaS products for monitoring search engine results page (<strong><a href="{{page.serp}}" title="What is a SERP?" target="_blank">SERP</a></strong>) rankings, but I wanted to learn by hacking. I think I've found a solution in <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>. Created by <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>, this node module runs keyword searches and returns the results as an array of links.

All you have to do is define a keyword, specify how deep you want to search, and let 'er rip! _BTW, you should clone the repo and install from source. The npm package is outdated._

<center><a href="{{page.img}}" target="_blank" title="take a closer look at the {{page.pn}} demo"><img src="{{page.img}}" alt="{{page.pn}}" class="demo"></a></center>

The list won't be in the _exact_ same order as your own Google searches, but it should be close. Bottom line: if you don't see your site within the first 10&ndash;15 results, you've got a problem.

What I like most about {{page.pn}} is how simple it is. Behind the scenes, it's just running Google searches, downloading the HTML, and extracting links which match a particular CSS class. There aren't any subscriptions, API keys, or exotic dependencies.

_For continuous monitoring, write a script to loop through your top keywords and email the results to you every week. Shouldn't take more than a few lines of JavaScript and a cron job._

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comment with markdown & emoji</a></center>
