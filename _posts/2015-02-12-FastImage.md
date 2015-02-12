---
layout: post

title: "The Fast & the Furious Users"
date: 2015-02-12 10:00:00
tags: ruby

project: "https://github.com/sdsykes/fastimage"
author: "https://github.com/sdsykes/fastimage"
pn: "FastImage"
an: "Stephen Sykes"
description: "FastImage determines an image's size / type without downloading the whole thing."
issue: 75

benchmark: "https://github.com/sdsykes/fastimage#benchmark"
ports: "https://github.com/sdsykes/fastimage#fastimage-in-other-languages"
---

Your next webapp better be fast and intuitive. Why? Because your users have no patience and will blame all their frustrations on "bad UX."

For example, imagine an app where users submit links to hi-res images. What if the app:

  1. can only process JPGs & PNGs?
  2. requires images be least 600 pixels wide?
  3. accepts up to 10 URLs at a time?

That sounds pretty reasonable &mdash; but it could take _ages_ to download, process, and report errors for every image. In the meantime, users will get bored and you&#39;ll never make it to the top of Product Hunt.

That's why you need the <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> Ruby gem from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>. Since most image formats store their metadata at the beginning, {{page.pn}} can extract size & format info without downloading the entire file.

For example, here's a little routine our app could use:

```ruby
require 'fastimage'

def checkImg(x)
  puts "\nchecking: "+x

  # size() returns [width, height]
  if FastImage.size(x)[0] >= 600
    puts "size check - PASS"
  else
    puts "size check - FAIL"
  end

  if ["jpeg", "png"].include? FastImage.type(x).to_s
    puts "format check - PASS"
  else
    puts "format check - FAIL"
  end
end

# too small, wrong format, and just right
checkImg("http://placehold.it/599x300.png/09f/fff")
checkImg("http://placehold.it/650x200.gif/e4r/fff")
checkImg("http://placehold.it/625x400.png/e4f/fff")

# output

#checking: http://placehold.it/599x300.png/09f/fff
#size check - FAIL
#format check - PASS

#checking: http://placehold.it/650x200.gif/e4r/fff
#size check - PASS
#format check - FAIL

#checking: http://placehold.it/625x400.png/e4f/fff
#size check - PASS
#format check - PASS
```
You can check the <strong><a href="{{page.benchmark}}" title="{{page.pn}} benhmarks" target="_blank">benchmarks</a></strong> in the readme, but trust me &mdash; it's _fast_. And bonus: there are <strong><a href="{{page.ports}}" title="{{page.pn}} ports for Python, Go, and Swift" target="_blank">ports for Python, Go, and Swift</a></strong>.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Do you event comment bruh?</a></center>
