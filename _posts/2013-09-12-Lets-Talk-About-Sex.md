---
layout: post

title: "Let's Talk About Sex!"
date: 2013-09-12 10:00:00
tags: ruby

readme: "https://github.com/bmuller/sexmachine"
fork: "https://github.com/bmuller/sexmachine/fork"
discuss: "https://github.com/nealrs/gitatme-comments/issues/2"
description: "Sex Machine implements Jörg Michael's Gender program to determine if a name is male, female, mostly male, mostly female, or too androgynous for a definitive conclusion."
issue: "2"
---

Pop quiz hotshot! How many of the following git -at me subscribers (Taylor, Sacha, Jamie, and Brooklyn) are male? Would your answer change if they were British or Russian?

With the increasing number of androgynous, curiously spelled, and region-specific names, gender is a touchy subject. Much like asking a woman when her baby is due, it's not a detail you want to guess at blindly. You're liable to walk away with a black eye.

For most applications, gender is a nice data point to have, but it doesn't affect core functionality. Consequently, you may decide to eliminate it, reducing **<a href="https://medium.com/design-startups/3c390ea15d1" target="_blank">signup friction</a>** and concerns about **<a href="http://www.theguardian.com/world/2013/sep/05/nsa-gchq-encryption-codes-security" target="_blank">data security</a>**.

And that's all well and good - until you get traction and want to monetize your user base. Targeted ads, data mining, selling anonymized data - whatever it is - gender suddenly becomes an important piece of the puzzle. So now what?

Enter <a href="https://github.com/bmuller/sexmachine" target="_blank">**Sex Machine**</a>. This Ruby gem from <a href="https://github.com/bmuller" target="_blank">**Brian Muller** </a>implements <a href="http://www.heise.de/ct/ftp/07/17/182/" target="_blank">**Jörg Michael's Gender program**</a>, which uses a comprehensive regionalized dictionary to determine if a name is male, female, mostly male, mostly female, or too androgynous for a definitive conclusion.

```ruby
# Basic examples
require 'sexmachine'
d = SexMachine::Detector.new
d.get_gender("Neal") ## Male
d.get_gender("Sam") ## Mostly Male
d.get_gender("Eliane") ## Female

# Regional & spelling variations
d.get_gender("Sasha") ## Mostly Male
d.get_gender("Sasha", :great_britain) ## Female
d.get_gender("Sacha") ## Mostly Female

d.get_gender("Cam") ## Mostly Male
d.get_gender("Cam", :great_britain) ## Mostly Female

# This one is just for fun
d.get_gender("Sterling") ## Male
d.get_gender("Mallory") ## Mostly Female
d.get_gender("Archer") ## Androgynous
```

If your app already has access to first name and location, adding gender immediately transforms your app-specific data into a useful and salable dataset. That alone could be the difference between a $10M and $50M valuation.

Want to contribute to this project or try it out for yourself? Install the gem right now and get to hacking: `gem install sexmachine`

**Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a>**
