---
layout: post

title: "Secure your Flask"
date: 2017-06-26 10:00:00 EST
tags: python flask

project: "https://github.com/jpvanhal/flask-basicauth"
author: "https://github.com/jpvanhal/"
an: "Janne Vanhala"
pn: "Flask-BasicAuth"

description: "Secure specific routes or your whole Flask Application with 5 lines of code."
issue: 164

---

_Hey there, I still can't you promise regular posts, but I am trying to write as often as I can!_

Writing & deploying Flask apps is super fun. I love how easily it is to put together a dashboard, proof of concept hack, or even a full-blown app and get it online.

But, while I'm good about using environment variables & not committing my API keys to git, I don't build a lot of security or user authentication into my apps. That's because it requires a bunch of extensions, a database, callbacks, etc.

Most of my apps need a simple login/password, not a full blown user registration system. I mean, I'm usually the only user!. So until now, I've secured my apps through URL obscurity and no crawl meta tags.

But I recently found a very effective, (and very _underrated_), Flask extension called [{{page.pn}}]({{page.project}}) that lets you password protect your apps in 5 lines of code.

Seriously! All you have to do is `pip install {{page.pn}}`, import it into your app, set a login and password (use env variables!), instantiate it, and then add a decorator to each protected route. Or, you can configure it to cover your entire app.

Don't believe me? [Just read the docs](https://flask-basicauth.readthedocs.io/en/latest/) and you'll come around.
