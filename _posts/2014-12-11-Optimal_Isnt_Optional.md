---
layout: post

title: "Optimal Isn't Optional"
date: 2014-12-11 10:00:00
tags: python

project: "https://github.com/DeaconDesperado/flask_mab"
author: "https://github.com/DeaconDesperado"
pn: "Flask-MAB"
an: "Mark Grey"
description: "Flask-MAB is an implementation of the multi-armed bandit optimization pattern as a Flask extension."
issue: 66
wiki: "http://en.wikipedia.org/wiki/Multi-armed_bandit"
a1: "http://michaelthinks.typepad.com/blog/2012/06/the-ab-testing-and-multi-armed-bandit-kerfuffle.html"
a2: "http://ml.posthaven.com/a-slash-b-testing-statistical-hypothesis-testing-or-multi-armed-bandit"
a3: "https://vwo.com/blog/multi-armed-bandit-algorithm/"
a4: "http://stevehanov.ca/blog/index.php?id=132"
a5: "https://www.chrisstucchio.com/blog/2012/bandit_algorithms_vs_ab.html"
a6: "https://news.ycombinator.com/item?id=4052997"
---

Although I don&rsquo;t know much about statistical testing or website optimization, I do want to. That's why I&rsquo;m making a resolution to learn more about it next year. (Please suggest your favorite resources in the comments.)

But, since we're both here, let's talk about <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>: an implementation of the <strong><a href="{{ page.wiki }}" target="_blank" title="Multi-armed Bandit on Wikipedia">multi-armed bandit testing protocol</a></strong> and an alternative to A/B testing.

Written by <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>, {{page.pn}} allows you to test different copy, colors, and other UI elements in your app. And since it's a Flask extension, it bolts right onto your existing Flask app.

Depending on the type of bandit model you choose, MAB tests will converge toward an optimal solution, which means fewer lost conversions during long term tests.

In this example, {{page.pn}} will help us determine the optimal button color for our app based on user responses, (adapted from the readme):

```python
from flask import Flask,render_template
from flask.ext.mab.storage import JSONBanditStorage
from flask.ext.mab.bandits import EpsilonGreedyBandit
from flask.ext.mab import BanditMiddleware,choose_arm,reward_endpt
app = Flask('app')

# define test parameters & randomize color 30% of the time.
cb = EpsilonGreedyBandit(0.3)
cb.add_arm("green","#2ECC40")
cb.add_arm("red","#FF4136")
cb.add_arm("blue","#0074D9")

# setup storage
app.config['MAB_STORAGE_ENGINE'] = 'JSONBanditStorage'
app.config['MAB_STORAGE_OPTS'] = ('./mab.json',)

# initialize and attach middleware to app
mab = BanditMiddleware()
mab.init_app(app)

app.add_bandit('btn',color_bandit)

# main route which passes bandit parameter to main.html template
@app.route("/")
@choose_arm("cb")
def home(cb):
  return render_template("main.html",color=cb)

# route rewards a bandit parameter for succesfull conversion.
@app.route("/converted")
@reward_endpt("cb",1.0)
def reward():
  return render_template("thanks.html")

if __name__ == '__main__':
  app.debug = True
  app.run()
```

After futzing around with {{page.pn}} for an afternoon, it seems like a great tool for beginners like me. It's easy to setup for small projects, it saves data to a single json file, and it can test almost anything you can pass to the UI.

That said, before you use MAB, A/B, or any type of statistical testing in production, you _must_ read <strong><a href="{{ page.a1 }}" target="_blank" title="Michael Leo on MAB vs. A/B">this</a></strong>, <strong><a href="{{ page.a2 }}" target="_blank" title="Cheng-Tao Chu's overview of A/B and MAB">this</a></strong>, <strong><a href="{{ page.a3 }}" target="_blank" title="Visual Website Optimizer's view on why MAB isn't better than A/B">this</a></strong>, <strong><a href="{{ page.a4 }}" target="_blank" title="Steve Hanov's post in suppory of MAB over A/B">this</a></strong>, <strong><a href="{{ page.a5 }}" target="_blank" title="Chris Stucchio in support of MAB">this</a></strong>, and <strong><a href="{{ page.a6 }}" target="_blank" title="HN thread regarding the Visual Website Optimizer piece">this</a></strong>.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Do you even comment bruh?</a></center>
