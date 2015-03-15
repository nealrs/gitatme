---
layout: makefile

title: "My Open Source Marketing Stack"
date: 2015-03-15 13:00:00
tags: makefile

description: "I've created my own stack of free & open source email and marketing tools to help me get things done."
---

A few months ago, I took over marketing and community at <strong><a href="http://challengepost.com" target="_blank">ChallengePost</a></strong>. It’s been great. I dig meeting hackers who are passionate about moving themselves and the world forward. FYI, <strong><a href="http://www.jobscore.com/jobs2/challengepost/developer-marketing-manager/aRtqNc4d0r4P7KiGakhP3Q?ref=rss&sid=68" target="_blank">I'm hiring</a></strong>.

Every morning I load up my feed (_coming soon!!_) to see what folks around the world are hacking on. Some popular themes: <strong><a href="http://challengepost.com/software/search?query=sign+language" target="_blank">sign language interpreters</a></strong>, <strong><a href="http://challengepost.com/software/search?query=theremin" target="_blank">theremins</a></strong>, and <strong><a href="http://challengepost.com/software/search?query=vr" target="_blank">augmented / virtual reality</a></strong>.

I can't describe a "typical day" for you, but last week I:

1. Sent out two editions of our newsletter
2. Looked at metrics for and rewrote a bunch of transactional emails
3. Helped my colleagues with a direct outreach campaign
4. Wrote and edited blog posts
5. Responded to three late-night Facebook messages from hackathon organizers
6. Scheduled and managed all of our social media on Facebook & Twitter

That’s in addition to whatever else popped up, special assignments, the ‘Slack suck’, and my own side projects. It seems like a lot, but I’ve created my own stack of email and social media tools to help me get it all done. **And now, you can have them too.**

## Email

>&ldquo;First you get the opens, then you get the clicks, THEN you get the metrics.&rdquo;<br>&mdash; _Tony Montana_

### Gmail-Preview

Ok, Scarface never said that, but he'd agree with me. Now that everybody has a smartphone, email is a journey: push notification ➜ open ➜ click ➜ action. Since everything starts with a notification, _front-load_ your email by pairing a catchy subject line with an enticing pre-header that draws the reader in and provides more context.

With <strong><a href="https://nealrs.github.io/gmail-preview" target="_blank">Gmail-Preview</a></strong>, you can iterate through subject/pre-header combos without test emails or your phone. The app uses a restrictive mobile Gmail layout and will automatically truncate any text that goes over the character display limit.

<center><a href="https://nealrs.github.io/gmail-preview" target="_blank" title="Gmail-Preview app"><img src="http://i.imgur.com/r1NxvKM.gif" alt="Gmail-Preview Screenshot" ></a></center>

Although it's based on a Nexus 5, Gmail-Preview is a good approximation for other email clients. If you'd like to help me write an iOS version or a preview for push notifications (small, expanded, desktop), please get in touch or <strong><a href="https://github.com/nealrs/gmail-preview" target="_blank">fork the project</a></strong>.

>&ldquo;The internet is 95 percent porn and spam.&rdquo;<br>&mdash; _Margaret Atwood_

### Spammy

Emails with spammy subject lines don’t reach inboxes. That’s a fact. But how do you check if your copy crosses the line without actually sending it?

<strong><a href="http://nealrs.github.io/spammy" target="_blank">Spammy</a></strong> compares your subject lines against a corpus of over 100 spam triggers. If you see red, you're dead!

<center><a href="http://nealrs.github.io/spammy" target="_blank" title="Spammy app"><img src="https://pbs.twimg.com/media/B-Ebd2GIMAAQAC-.png" alt="Spammy Screenshot" ></a></center>

>&ldquo;The reason it's always 25, no less, is that it forces you to think waaaay outside the box when writing.&rdquo;<br>&mdash; _Adam Mordecai_


### 25 Subject Lines

I took <strong><a href="http://www.slideshare.net/Upworthy/upworthy-10-ways-to-win-the-internets" target="_blank">Adam's advice</a></strong> to heart when I created <strong><a href="http://nealrs.github.io/25Headlines" target="_blank">25 Headlines</a></strong>, a tool for writing better headlines inspired by Upworthy. After all, nobody is born a great copywriter, you have to practice.

You can apply this to email too with <strong><a href="http://nealrs.github.io/25Headlines/email.html" target="_blank">25 Subject Lines</a></strong>. The app counts characters and uses color coding to tell you when you've gone beyond the optimal length / hit the max.

_Bonus 1_: It's got Spammy built in, so you don't have to switch between apps.

_Bonus 2_: It autosaves to localStorage. So, you can start now, close the window, and come back later without losing your work..

<center><a href="http://nealrs.github.io/25Headlines/email.html" target="_blank" title="25 Subject Lines app"><img src="http://i.imgur.com/UMgQqs4.png?1" alt="25 Subject Lines Screenshot" ></a></center>

## Social Media

> &ldquo; It takes discipline not to let social media steal your time.&rdquo;<br>&mdash; _Alexis Ohanian_

### 25 Tweets

For social media managers, <strong><a href="http://nealrs.github.io/25Headlines/twitter.html" target="_blank">25 Tweets</a></strong> has appropriately calibrated length triggers & color coding just like it's siblings. Use it to craft the perfect tweet or to compile a week's worth.

### UTM Bossmode

If you use Google Analytics or Mixpanel to track inbound traffic & site activity, you’re probably familiar with <strong><a href="http://www.launchdigitalmarketing.com/seo-definitions/what-are-utm-codes/" target="_blank">UTM tags</a></strong> (you know, _http://foo.bar?utm_source=twitter&utm_medium=social…_). But do you tag _all_ of the links in your outbound communications? Your personal emails? Links in tweets and Facebook posts? Are your partners and clients correctly tagging the links they send out?

With <strong><a href="http://nealrs.github.io/UTM-Bossmode" target="_blank">Bossmode</a></strong>, you can give everyone & everything uniquely tagged URLs. Just input the source, medium, campaign, and content tags you want to use and Bossmode will properly encode them and shorten the URL with Bit.ly.

This was the first webapp I built for ChallengePost and also my first <strong><a href="https://www.dropbox.com/s/x711bey069kbnmg/Bossmode.zip" target="_blank">OSX app</a></strong>. I use it at least 20 times a day. If you’ve got the chops, you can repackage Bossmode as a browser extension, (perhaps for our <strong><a href="http://chrome.challengepost.com" target="_blank">Chrome extension challenge</a></strong> that ends March 25th).

<center><a href="http://nealrs.github.io/UTM-Bossmode" target="_blank" title="UTM Bossmode app"><img src="https://raw.githubusercontent.com/nealrs/UTM-Bossmode/master/bossmode.png" alt="UTM Bossmode Screenshot" ></a></center>

###Hootsuite Extractor

I use a combination of Buffer, TweetDeck, Zapier, Hootsuite, and the official web client to manage ChallengePost’s Twitter presence and campaigns. Unfortunately, none of those have a reporting module for "campaign reports" that I can share with my challenge sponsors. So I built one called <strong><a href="" target="_blank">Hootsuite Extractor</a></strong> (HSE).

HSE compiles social reports from HootSuite search streams by scraping the data:

<center><img src="https://d262ilb51hltx0.cloudfront.net/max/1160/1*HVsnHrlGwJQ4NRQXjqUHxw.png" alt="Hootsuite Extractor sample data" ></center>

and turning it into a simple, shareable page:

<center><img src="https://d262ilb51hltx0.cloudfront.net/max/1181/1*FlVNuI0RgDq46gGmIEo9uw.png" alt="Hootsuite Extractor Report" ></center>

HSE isn’t totally open (or stable) yet, but with your help, it could be.

## Full Stack Plz

I also rely on Mailchimp, Facebook Messenger, Litmus, Customer.io, Google Analytics, Mixpanel, RiteTag, Tumblr, MacDown, TextWrangler, and many, many more.

What’s in _your_ stack?

If you <strong><a href="http://challengepost.com/nealrs" target="_blank">follow me on ChallengePost</a></strong>, you'll be the first to learn about my latest projects & tools!

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Comment on this post">Care to comment?</a></center>
