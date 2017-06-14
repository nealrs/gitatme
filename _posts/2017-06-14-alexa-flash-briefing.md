---
layout: post

title: "Turn your blog into a podcast"
date: 2017-06-14 8:50:00 EST
tags: json, alexa

description: "Turn your Jekyll blog into an Amazon Flash Briefing Skill. Instant podcasting!"
issue: 163

---

_Git@Me is still on hiatus, but I really wanted to publish this post. And yeah, I try not to blog about stuff I make, but I think you'll want to try this out._

This week's hack combines three things: blogs, podcasts, and Amazon Alexa. Why? Well, blogs have become passé, podcasting is having a moment, and Alexa's Flash Briefing feature is first class feature for distributing your content.

The _best_ Flash Briefing skills, like NPR, use prerecorded audio, but the API supports text-to-speech too, so you have Alexa read your latest posts to you every time you invoke the flash briefing. Basically, it's an instant podcast. Pretty neat, right?

My [alexafeed.json](https://gist.github.com/nealrs/e6985003ca56cc6f8c980efbb0d0e670#file-examplefeed-json) Jekyll plugin creates a Alexa Flash Briefing compatible json feed. It uses the latest 3 posts from the _current day_ and puts them in the correct JSON format. It strips HTML, weird characters, and new lines, - so the JSON validates. By default, it includes the _entire_ post, but you can customize it to just use excerpts -- which I recommend.

There are a few prerequisites:

1. You already have a standard, live, working Jekyll blog that's deployed to a public server.

2. You update your blog _at least daily_. If not, your content will get stale quickly and nobody wants to hear the same story over and over in their briefing - especially if you write long posts._

Get it up and running:

1. Download alexafeed.json and place it in the root folder of your Jekyll blog.
2. Generate your site, and verify that `http://your.site/alexa.json` is producing valid JSON.
3. [Follow all the steps in this tutorial](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/steps-to-create-a-flash-briefing-skill) and input your site URL in step 8.
4. Enable your skill by opening the Alexa app on your phone, navigating to the Skills tab, clicking _Your Skills_, and selecting your Flash Briefing Skill.
5. Say "Alexa, what’s my Flash Briefing?" to your Echo.
6. Pat yourself on the back and have a beer.
7. Submit your skill for certification.
8. Upon certification, tell all your friends to add your Skill to their Briefing (Alexa skills do have URLs)

There are a few customization options:

- Flash briefing feeds support between 1 and 5 items, so change the `limit:3` depending on how frequently you publish new content.

- Change `post.content` to `post.excerpt` on line 12 if you don't want Alexa to read out your entire post. Excerpts cut content at the first `\n\n`. I'd actually recommend doing this if your posts exceed 500 words.

- `streamURL` is set as null, because as designed, this is a text-to-speech feed, unlike the NPR feeds which are audio driven. If you want to instead use audio, you'll need to host audio, include a filename pointer in your post markdown, and change the briefing type of your skill.
