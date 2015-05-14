---
layout: post

title: "Plug & play kill switch"
date: 2015-05-14 10:00:00
tags: python

project: "https://github.com/hephaest0s/usbkill"
author: "https://github.com/hephaest0s"

pn: "usbkill"
an: "Hephaestos"

description: "usbkill is an anti-forensic Python kill-switch that waits for a change on your USB ports and then immediately shuts down your computer."
issue: 88

video: "https://www.youtube.com/embed/0qOG9ppwFfk"
lastpass: "http://lastpass.com"
encryption: "http://lifehacker.com/a-beginners-guide-to-encryption-what-it-is-and-how-to-1508196946"
---

Earlier this week, a colleague suggested that, since we handle a lot of personal information, we should all encrypt our hard drives. After all, passwords offer zero protection once a thief has physical access to your machine. (That said, _please_ use strong passwords.)

But, what if your computer gets stolen or seized _while you're still logged in_? There are specialized USB dongles out there designed to keep your computer awake / on, enabling thieves to rifle your files at their leisure. It's a big chink in your digital armor.

This week's project, <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, aims to fix that. <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>&rsquo; Python script constantly monitors your USB ports. If it detects that a device has been plugged in or removed, your machine immediately shuts down.

Coupled with a strong password & an encrypted drive, {{page.pn}} makes it _much_ harder for thieves to gain unauthorized access your files.

Seeing is believing, so here it is in action:

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='{{page.video}}' frameborder='0' allowfullscreen alt="{{page.pn}} demo video"></iframe></div>

To summarize:

1. <strong><a href="{{page.encryption}}" title="Lifehacker primer on encryption" target="_blank">Encrypt</a></strong> your hard drive.
2. Use strong passwords, two factor authentication, and a decent <strong><a href="{{page.lastpass}}" title="LastPass password manager" target="_blank">password manager</a></strong>.
3. Don't forget about physical access threats.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
