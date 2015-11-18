---
layout: post

title: "Wear it. Share it."
date: 2015-10-15 10:00:00 EST
tags: java android

project: "https://github.com/saurabhsjoshi/WearShare"
author: "https://github.com/saurabhsjoshi"

pn: "WearShare"
an: "Saurabh Joshi"

description: "WearShare is an Anroid app that enables you share files from your Android Wear smartwatch using the Send Anywhere API."

issue: 110

video: "https://www.youtube.co/embed/J0yF_UKcabY"
devpost: "http://devpost.com/software/wearshare"
apk: "https://drive.google.com/file/d/0B00NNevpQm_-bUlEN2h3UTg1T0k/view?usp=sharing"
---

This week's project, <strong><a href="{{page.devpost}}" title="{{page.pn}} on Devpost" target="_blank">{{page.pn}}</a></strong> is one of the neatest smartwatch apps I've ever seen. Using an Android smartwatch and the Send Anywhere API, <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>'s project enables you to send and receive files on your phone, all from your wrist.

The demo video explains it all, because I can't even:

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='{{page.video}}' frameborder='0' allowfullscreen alt="{{page.pn}} demo video"></iframe></div>

Basically, you select files on your phone via your watch and swipe to send, which generates a 6 digit PIN code that expires after 10 minutes.

To download files, the receiver inputs the code into any Send Anywhere client app (web, mobile, desktop). You can even just _speak_ the 6 digit code and {{page.pn}} will recognize it and start the download.

The only thing that bugs me about this project is that it's not called Shareware. I mean, _come on_! In any case, you can <strong><a href="{{page.apk}}" target="_blank" title="Download {{page.pn}}">download the APK</a></strong> for yourself or <strong><a href="{{page.project}}" target="_blank" title="{{page.pn}} on GitHub">fork it
 on GitHub</a></strong>.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
