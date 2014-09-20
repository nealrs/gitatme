---
layout: post

title: "Dissecting the News"
date: 2014-01-09 10:00:00
tags: python

project: "https://github.com/codelucas/newspaper"
author: "https://github.com/codelucas"
discuss: "https://github.com/nealrs/gitatme-comments/issues/18"
quickstart: "http://newspaper.readthedocs.org/en/latest/user_guide/quickstart.html"
description: "Newspaper is a Python library for extracting and parsing article information from your favorite news sources"
issue: "18"
---

This week I discovered <strong><a href="{{ page.project }}" target="_blank" title="Newspaper on GitHub">Newspaper</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="Lucas Ou-Yang on GitHub">Lucas Ou-Yang</a></strong>. It's a Python library for extracting and parsing information from news sites such as CNN, HuffPo, and BuzzFeed.

Instead of writing and tuning scrapers for individual news sites, Newspaper provides an API to aggregate and parse arbitrary sources. Point Newspaper to a site and it will automatically download a full list of articles. You can then parse them individually to identify keywords, titles, authors, summaries, and more.

Even though Newspaper is new, it's already <strong><a href="{{ page.quickstart }}" target="_blank" title="Newspaper Quickstart">well documented</a></strong> and turning heads. Block out some time this weekend and give it a try!

<pre class="prettyprint lang-python">
## Establish a 'source' and pull basic data (brand, description, articles, etc)
import newspaper
engadget = newspaper.build("http://engadget.com")

## Get number of articles & list their URLs
print engadget.size() 
  # I ran this script at 9pm EST 1/8/2014 and got over 500 results due to CES coverage
for article in engadget.articles:
	print article.url
	  # http://www.engadget.com/2014/01/07/ces-stage-kickoff/ [0]
	  # http://www.engadget.com/2014/01/08/best-of-ces-2014-finalists/ [1]
	  # etc.

## Get source description & brand
print engadget.brand # endgadget
print engadget.description	
  # Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics

## Download & parse the first article
a1 = engadget.articles[0] 
a1.download()
a1.parse()
print a1.text # full text of article
print a1.authors # [u'Brian Heater']
print a1.title # Live from the Engadget CES Stage

## Use natural language processing to gain more insight
a1.nlp()
print a1.summary 
  # YMMV with this function.
print a1.keywords
  # [u'week', u'christen', u'whats', u'working', u'interviews', u'engadget', u'live', u'doesnt', u'ces', u'open', u'event', u'stage']
</pre>

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>