---
layout: post

title: "A Teeny Tiny DB"
date: 2014-10-02 10:00:00
tags: python

project: "https://github.com/msiemens/tinydb"
author: "https://github.com/msiemens"
pn: "TinyDB"
an: "Markus Siemens"
description: "TinyDB is a document oriented database written in Python."
docs: "https://tinydb.readthedocs.org/en/v2.0.0/index.html"
ex: "https://tinydb.readthedocs.org/en/v2.0.0/getting-started.html"
---

A year ago, the only thing I knew about NoSQL was that MongoDB didn't support joins. And after using MySQL on & off since college, that totally blew my mind. _Seriously, no joins?!_ Fortunately I discovered Firebase, which was a great introduction to NoSQL, and now I'm hooked.

This week I made another NoSQL discovery: <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> &mdash; a sleek 1,200 line document-oriented database written in Python. Created by <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>, {{page.pn}}'s API is easy to grok and fits into your projects with minimal effort:

1. Inserts are easy, just feed in a standard `dict`
2. Store data as JSON or in-memory
3. Create tables / collections
4. Query via regex, using comparison operators, and with and/or conditions
5. Update fields across multiple records
6. The <strong><a href="{{ page.docs }}" target="_blank" title="{{ page.pn }} documentation">documentation</a></strong> is excellent
7. Works with Python 2.6 &ndash; 3.4

I'd write you some sample code, but Markus's <strong><a href="{{page.ex}}" title="{{page.pn}} examples" target="_blank">getting started guide</a></strong> is already top-notch. Give {{page.pn}} a shot, I really think you'll like it.


<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Join the discussion</a></center>
