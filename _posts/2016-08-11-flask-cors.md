---
layout: post

title: "Cross Origin Really Sucks"
date: 2016-08-11 10:00:00 EST
tags: python

an: "Cory Dolphin"
author: "https://github.com/corydolphin"
pn: "Flask-CORS"
project: "https://github.com/corydolphin/flask-cors"

description: "Flask-CORS enables CORS (for AJAX requests) in your Flask app with 1 line of code."

issue: 150

---

This was the first half of my Friday night:

1. Build an awesome web apps with Python and Flask
2. Add an API to my app because Flask is so awesome
3. Deploy my app & API to Heroku and make them public

Neat right? Well, the second half didn't go so well:

1. Try to use Flask API client-side via AJAX
2. Realize I need to set CORS headers on your server
3. Fail to configure Apache on server that doesn't really exist / that I don't actually control
- Cry myself to sleep at 5am

So yeah, lots of feels. I built an API to serve data from my database on Heroku to a static website hosted on S3 (via XMLHttpRequest). But, because of CORS, the requests were invalid 😡

> ICYMI: The Same Origin Policy prevents `Foo.com` from accessing resources on `Bar.com` unless Foo is authorized via Cross Origin Resource Sharing. (Scripts, stylesheets, HTML, images, and a few other file types are obviously excluded from this rule.) This is also the bedrock of web security.

Fortunately, after a solid night’s (morning’s?) rest, I discovered [{{page.an}}]({{page.author}})’s [{{page.pn}}]({{page.project}}) library. With 1 line of code, you can enable CORS for particular routes, resources, or your whole Flask app. No server configs. No weird DevOps voodoo.

Seriously, here’s my api route before:

```python
from flask import Flask
application = Flask(__name__)

# without CORS, I can't hit this API clientside
@application.route('/comments/<int:i>', methods = ['GET', 'POST'])
def comments(i):
    clist = getComments(i)
    return clist
```


And after, with {{page.pn}}:

```python
from flask import Flask
from flask_cors import CORS, cross_origin # 1 import
application = Flask(__name__)

@application.route('/comments/<int:i>', methods = ['GET', 'POST'])
# Just 1 line of code (actually, just a decorator, and now I can access my API anywhere!)
@cross_origin() # this is the magic
def comments(i):
    clist = getComments(i)
    return clist
```

YASSSSSS 🙌
