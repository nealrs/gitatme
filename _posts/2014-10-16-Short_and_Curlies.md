---
layout: post

title: "The Short & Curlies"
date: 2014-10-16 10:00:00
tags: javascript

project: "https://github.com/sebpearce/curlify"
author: "https://github.com/sebpearce"
pn: "Curlify"
an: "Seb Pearce"
description: "Curlify intelligently converts straight quotes into curly quotes."
demo: "http://gam.s3.amazonaws.com/demo/curlify/sdfsdf"
cover: "http://www.goodreads.com/book/show/379076.The_Language_of_Elk"
---

Web designers make a lot of noise about fonts, colors, and the like &mdash; but it's surprising how many avoid basic typography issues like curly quotes and proper dash usage.

Well, apparently that bothered <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong> enough for him to create <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>.

{{page.pn}} uses a battery of regex filters to convert single quotes (singles, double, and apostrophes) into their curly and _print ready_ equivalents upon page load. It'll also fix your em & en dashes:

```html
<!-- apostrophes -->
'Twas a grand 'ole night for me.
’Twas a grand ’ole night for me.

<!-- single & double quotes -->
"That's a 'magic' sock."
“That’s a ‘magic’ sock.”

<!-- em & en dashes -->
'That freeze-dried sock - from 1800-1817 - is "magic."'
“That freeze-dried sock — from 1800–1817 — is ‘magic.’”
```

FYI &mdash; this method doesn't use HTML entities. If that bothers you, fork the project and submit a pull request!

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Join the discussion</a></center>
