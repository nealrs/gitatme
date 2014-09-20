---
layout: post

title: "Tunnels & Testing"
date: 2013-11-21 10:00:00
tags: go

project: "https://github.com/inconshreveable/ngrok"
author: "http://inconshreveable.com"
discuss: "https://github.com/nealrs/gitatme-comments/issues/12"
description: "Ngrok creates a publicly accesible tunnel to your local web server."
issue: "12"
---

Several weeks ago I started writing apps with Flask and I really dig it, but I've had to change how I test and share projects. Unlike basic JavaScript / PHP driven apps, you can't just FTP source to your web host and email your friends a URL. Dependencies, databases, and other details get in the way. The same goes for Rails and Django.

So how can you share your local dev environment with a friend for some fast feedback? You could deploy it to a PaaS like OpenShift or Heroku - but for quick and iterative testing that's overkill.

Instead, get <strong><a href="{{ page.project }}" target="_blank" title="ngrok on GitHub">ngrok</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="Alan Shreve">Alan Shreve</a></strong>. Written in Go, ngrok creates a  publicly accesible tunnel to your local web server. Get up and running by specifying a target port `./ngrok 5000` and sharing the forwarding URL. Tunnels support http & https and have a local web interface for monitoring traffic.

<p><center><strong><img src="{{site.img}}issue_12_fig_1.png" style="text-align:center;" alt="ngrok example" title="ngrok example console" itemprop="image"><br>
the ngrok console</strong>
</center></p>

Ngrok works great out of the box, but if you <strong><a href="https://ngrok.com/signup" target="_blank" title="Signup for ngrok">sign up</a></strong> (free!), you'll get access to custom subdomains, simultaneous tunnels, and password protection. Binaries are available for Windows, OSX, and Unix - so everyone is invited to the party! 

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>