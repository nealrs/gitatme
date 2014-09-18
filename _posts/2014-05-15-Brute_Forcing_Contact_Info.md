---
layout: post

title: "Brute Forcing Contact Info"
date: 2014-05-15 10:00:00
tags: python

project: "https://github.com/jordan-wright/rapportive"
author: "https://github.com/jordan-wright"
pn: "rapportive.py"
an: "Jordan Wright"
discuss: "https://github.com/nealrs/gitatme-comments/issues/36"
description: "Rapportive.py is a Python library to automate Rapportive queries & validate email addresses."
gist: "https://gist.github.com/nealrs/969ea467e870b68963f3"
issue: "36"
moxie: "http://gitat.me/2013/10/03/MoxiEmail.html"
---

Today's open source project has a high potential for abuse, but I hope you'll take the high road. Months back I wrote about validating email addresses by <strong><a href="{{page.moxie}}" target="_blank" title="Issue 5 - MoxiEmail">pinging SMTP servers</a></strong>. It was a fun trick, though not very practical.

Now with <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}</a></strong>, you can anonymously and programmatically lookup any email address via Rapportive & LinkedIn.

```python
from rapportive import rapportive
print rapportive.request("neal@audioshocker.com")

# Name: Neal Shyam
# Account Manager ADstruc
# Co-Founder The AudioShocker Podcast
# Editor Git @ Me
#   Twitter http://twitter.com/nealrs
#   LinkedIn http://www.linkedin.com/in/nealrs
#   GitHub https://github.com/nealrs
#   Google+ https://plus.google.com/106729159255897575431/posts
```

Why is this a big deal? Because, coupled with commonly used email address patterns, it's trivial to brute force a LinkedIn member's contact & employment information. So trivial in fact, that <strong><a href="{{ page.gist }}" target="_blank" title="{{page.pn}} demo script - please don't use this for evil">I wrote a script to do it for you</a></strong>. Please use it responsibly.

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" >Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Join discussion</a></center>
