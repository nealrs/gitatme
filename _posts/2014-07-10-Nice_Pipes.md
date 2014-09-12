---
layout: post

title: "Nice Pipes"
date: 2014-07-10 10:00:00
tags: ruby

project: "https://github.com/rtomayko/bcat"
author: "https://github.com/rtomayko"
pn: "bcat"
an: "Ryan Tomayko"
discuss: "https://github.com/nealrs/gitatme-comments/issues/44"
description: "bcat is a pipe-to-browser utility. It reads from standard input and streams output to a browser window."
issue: "44"
---

I'm comfortable running commands and making edits in the console, but I don't like consuming information that way. Perhaps it's just me, but paging through blocks of monospaced text in a terminal window is no fun.

That's why I was excited to discover <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{page.pn}}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>. It lets me pipe standard output directly to my browser, so it's great for previewing markdown, tailing logs, and reviewing long files.

Here's a sample of what {{page.pn}} can do out of the box:

```sh
# pipe plaintext to default browser
$ echo "hola!" | bcat

# pipe HTML to Safari
$ echo "<h1>WebKit FTW</h1>" | bcat -b safari

# process markdown and then pipe output
$ echo "*ZOMG italics!*" | markdown | bcat

# simultaneously output to console & browser
$ markdown readme.md | btee
```

Install the Ruby gem and take it for a spin!

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" style="margin-right:10px;">Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Join the discussion</a></center>
