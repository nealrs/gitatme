---
layout: post

title: "Colorful Consoles"
date: 2014-02-13 10:00:00
tags: ruby

project: "https://github.com/mikowitz/crayon"
author: "https://github.com/mikowitz"
pn: "Crayon"
an: "Michael Berkowitz"
discuss: "https://github.com/nealrs/gitatme-comments/issues/23"
description: "Crayon is a ruby gem for coloring & formatted console output."
issue: "23"
image: "http://gam.s3.amazonaws.com/img/issue_23.png"
twilio: "https://www.twilio.com/engineering/2014/02/05/better-error-messages"
---

20 years after my first experience with Windows (3.11, _for workgroups_!) I still find myself staring at gray terminal windows and console output. Even in the age of APIs & UI/UX designers, log files remain ugly and hard to grok.

Fortunately, things are looking up. Last week, Twilio announced that it was experimenting with <strong><a href="{{page.twilio}}" title="Twilio Engineering Blog" target="_blank">color coded error reports</a></strong>, putting critical debug information front and center. This is great news for developers exploring the API for the first time.

So, how can _you_ be part of the solution? If you're writing in Ruby, get the <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong> gem from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}</a></strong>. With its 'format' driven API, Crayon is like CSS for ANSI escape codes.

Crayon supports eight colors, foregrounds & backgrounds, and bold & underline styling. It's also a lot of fun:

<center><img src="http://gam.s3.amazonaws.com/img/issue_23.png" alt="Happy Valentine's Day from Git@Me!" title="I couldn't resist!"></center>

```ruby
require 'crayon'

a = Crayon.cyan_on_magenta_bold("I'd")
b = Crayon.red_on_white("`mark`")
c = Crayon.yellow("_you_")
d = Crayon.blue_on_white("[down]()")
e = Crayon.green_bold("**any day**")

puts "\n"+a+" "+b+" "+c+" "+d+" "+e+".\n\n"
puts "Happy Valentine's Day from Git@Me - we " + Crayon.red_bold("\xe2\x99\xa5") +"  you.\n\n"
```

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
