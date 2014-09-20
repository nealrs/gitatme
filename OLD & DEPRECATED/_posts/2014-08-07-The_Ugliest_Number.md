---
layout: post

title: "1.00 Is the Ugliest Number"
date: 2014-08-07 10:00:00
tags: python

project: "https://github.com/jmoiron/humanize"
author: "https://github.com/jmoiron"
pn: "humanize"
an: "Jason Moiron"
discuss: "https://github.com/nealrs/gitatme-comments/issues/48"
description: "humanize makes numbers, times, dates, and file sizes easier to read & understand"
issue: "48"

---

Numbers, like Shakira's hips, don't lie. But they can get ugly. I mean, how many minutes is 0.375 hours? 19968489 bytes &ndash; what's that in megabytes? And don't even get me started on trailing zeros. If your app is going to be used by _humans_, the output needs context.

Fortunately, you can fix all of that with a single Python import. <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{page.pn}}</a></strong> makes your hideous integers, floats, dates, times, and file sizes pretty and fit for human consumption.  

<pre class="prettyprint lang-python">
# Turn floats into fractions
> humanize.fractional(.375*60)
'22 1/2' 

# Make sense of file sizes
> humanize.naturalsize(19968489)
'20.0 MB'

# Add commas to large numbers and trim trailing zeros
> humanize.intcomma(humanize.fractional(1239.0))
'1,239'

# Report time intervals in plain English
> humanize.naturalday(datetime.datetime.now() - datetime.timedelta(days=1.3))
'yesterday'
</pre>

Written by <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>, {{page.pn}} works with Python 2.7 & 3.3 and is localized for Russian, French, Korean, and English.

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" style="margin-right:10px;">Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Discuss it</a></center>