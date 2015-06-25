---
layout: post

title: "Build mobile apps without mobile developers"
date: 2015-06-25 10:00:00
tags: java html swift

author: "https://github.com/nabilfreeman"

pn: "Android & iOS Webview Boilerplates"
an: "Nabil Freeman"

description: "The Android & iOS Webview Boilerplates are Android Studio & Xcode projects that allows you can use to create a simple app for your website or as a starting point for your HTML5 based android app."
issue: 94

blerg: "http://blerg.me"
video: "http://gam.s3.amazonaws.com/demo/i94/i94.mp4"
apk: "http://gam.s3.amazonaws.com/demo/i94/blergme.apk"
android: "https://github.com/nabilfreeman/android-webview-boilerplate"
ios: "https://github.com/nabilfreeman/ios-universal-webview-boilerplate"
macgap: "http://gitat.me/2014/02/20/Mind_The_MacGap/"
commit: "https://github.com/nealrs/android-webview-boilerplate/commit/e0e224bcbe1c6ed2af5aa964b163bf2256379c09"
---

**Fact: I'm awful at mobile apps.** I've tried Java, Swift, and Objective C, but it never works out. Every app I've written has been a colossal failure that just barely limped along. And it doesn't help that native IDEs have such steep learning curves.

**Fact: I'm good at web apps.** I can write JS/CSS/HTML, design mobile first, account for offline, etc. But, that won't get me on the 'top paid apps' list, will it?

Actually, it might. With <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>'s {{page.pn}}, I can take my webapps native _without_ hiring specialized developers.

For example, I made apps for <strong><a href="{{page.blerg}}" title="blerg.me" target="_blank">blerg.me</a></strong> in about an hour &mdash; most of which was spent upgrading Xcode, installing Android Studio, and creating app icons. I could even sell these on the AppStore or Google Play.

Here's a screencast from my phone:

<div style="text-align:center;">
<video width="270" height="480" autoplay controls loop>
  <source src="{{page.video}}" type="video/mp4">
  Ugh, your browser doesn't support video elements.
</video>
</div>

Install Blerg Me on your Android by <strong><a href="{{page.apk}}" title="Download the Blerg Me APK for Android" target="_blank">downloading the APK</a></strong>.

Get the <strong><a href="{{page.ios}}" title="iOS / Swift boilerplate repo on GitHub" target="_blank">iOS boilerplate</a></strong>. Get the <strong><a href="{{page.android}}" title="Android / Java boilerplate repo on GitHub" target="_blank">Android boilerplate</a></strong>.

<em>FYI, <strong><a href="{{page.commit}}" title="My fork of the Android webview boilerplate" target="_blank">I had to futz with Gradle</a></strong> to get my Android app working. Hopefully Nabil will accept my PR soon.</em>

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
