---
layout: post

title: "Searching for the ivory tower"
date: 2015-05-07 10:00:00
tags: ruby

project: "https://github.com/leereilly/swot"
author: "https://github.com/leereilly"

pn: "Swot"
an: "Lee Reilly"

description: "Swot is a Ruby gem that can identify email addresses or domains names that belong to colleges or universities."
issue: 87

ports: https://github.com/leereilly/swot#see-also
---

With so many new TLDs popping up, (`.party`, `.rocks`, `.academy`, `.club`, `.university`, etc.), it's getting hard to gauge an organization's legitimacy.

It's particularly difficult to determine whether a domain belongs to a real academic institution. Not everyone uses .edu, especially outside the US.

Fortunately, <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong> worked up the <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> Ruby gem, which does exactly that &mdash; and more.

{{page.pn}} verifies educational domains and can return corresponding school names. How does it work? The gem relies on crowd-sourced data to conduct lookups. It's very accurate and will save you TONS of time.

```ruby
require 'swot'

# check emails / domains

Swot::is_academic? 'nealrs@cmu.edu'        # true
Swot::is_academic? 'me@skrol.la'           # false
Swot::is_academic? 'stern.nyu.edu'         # true
Swot::is_academic? 'http://nealshyam.com'  # false

# look up school name

Swot::school_name 'nealrs@cmu.edu'
# Carnegie Mellon University

Swot::school_name 'choate.edu'
# Returns blank, because Choate is a high school.
```

If Ruby isn't your bag, there are <strong><a href="{{page.ports}}" title="{{page.pn}} ports on GitHub" target="_blank">ports</a></strong> for PHP, JavaScript, and Clojure.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
