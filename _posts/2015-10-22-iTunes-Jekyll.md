---
layout: post

title: "Jekyll & HiFi"
date: 2015-10-22 10:00:00 EST
tags: ruby

project: "https://github.com/taxigy/itunes-jekyll-template"
author: "https://github.com/taxigy"

pn: "itunes-jekyll-template"
an: "Rishat Muhametshin"

description: "itunes-jekyll-template is a Jekyll template for creating iTunes compliant podcast feeds."

issue: 111

commit: "http://commit.devpost.com"
fork: "https://github.com/challengepost/commit-video-feed"
itunes: "http://www.apple.com/itunes/podcasts/specs.html#duration"

---

After publishing the first episode of <strong><a href="{{page.commit}}" target="_blank" title="The Commit podcast">The Commit</a></strong>, Devpost's new video podcast on YouTube, Richard and I went all out with new mics, a mixer, pro lights, and some awesome guests. But, we we've dependent entirely on our weekly newsletter to bring in subscribers.

What we really need is distribution, aka iTunes syndication.

The last time I setup a podcast in iTunes was 8 years ago and it was a hack job using WordPress + half-maintained plugins. This time around, I'm doing it right: setting up 2 individual podcasts, one for audio and one for video. It'll mirror our growing YouTube channel and open up The Commit to a bigger audience.

The mechanics of publishing a podcast iTunes are fairly simple:

1. Host your audio files somewhere (easy, S3 + CloudFront!)
2. Create an iTunes compliant RSS feed (UGH, this part sucks)
3. Validate the feed (google it)
4. Submit feed to iTunes (like 3 clicks)
5. Once approved, tell people to subscribe (you're shameless, right?)

Ok, <strong><a href="{{page.itunes}}" target="_blank" title="iTunes feed specs">the feed specs aren't <em>that</em> complicated</a></strong>, but writing RSS XML is awful and I'd prefer not to. It'd be more efficient to use a CMS, like Jekyll, (the static site generator which powers Git@Me), to create the markup.

And thanks to a template I found on GitHub, <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, that's exactly what I'm doing!

Written by <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>, {{page.pn}} creates iTunes feeds using three ingredients:

1. `config.yml`, a YAML file which contains general details about the podcast (URL, name, author, license, cover art URL, etc.)
2. `_posts`, a directory of markdown files with details on each specific podcast episode (name, summary, date, filename, file type, etc.)
3. `itunes-feed-layout.xml`, a layout file which contains all the tags / logic necessary for Jekyll to write out the feed code.

First things first, the {{page.pn}} repo isn't very well organized. After reviewing the README, <strong><a href="{{page.fork}}" target="_blank" title="my {{page.pn}} fork on GitHub">I forked the repo and created the following (working) directory structure</a></strong>:

```
~/feed
.
_config.yml
_layouts
_posts
feed.md
```

`_layouts` contains my (renamed) `feed.xml` file. `feed.md` is a dummy page which instructs Jekyll to process all the individual posts according to the `feed.xml` layout. FYI, you should edit `_config.yml` & `feed.xml` as necessary for your podcast. The default configuration assumes that your podcast contains explicit content and that you're serving MP3s.

Next up, add each episode's info to an individual file in  `_posts`. Here's an example from `2015-10-15-14.md`:

```yaml
---
title:  "Input / Output"
subtitle: "New stuff!"
date:   2015-10-15 12:00:00
category: podcast
number: 14
duration: 6:16
length: 578027337
media: https://s3.amazonaws.com/devpostcommit/media/Episode14.mp4
---
First up, we've got a new product announcement for all the hackathon hackers. Next, nostalgia for our favorite mice, keyboards, and PS/2 input devices of yore (er, 1998). And as usual, staff picks: <a href="http://devpost.com/software/sahara-s3zdw4">Sahara</a> and <a href="http://devpost.com/software/project-saoui">Project SAOUI</a>.
```

Up top, we we YAML (between the `---`s) for episode specific details, and below, HTML to describe the episode, (although you're probably better off with plaintext).

After you compile the 'site' with Jekyll, open up`_site/index.html` to see your feed. If it looks good (and validates!), upload it on s3, submit it to the iTunes store, and start working on your next episode!  

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0">
  <channel>
    <title>The Devpost Commit</title>
    <link>http://commit.devpost.com</link>
    <itunes:author>Devpost Inc.</itunes:author>
    <copyright>&#xA9; 2015 Devpost Inc.</copyright>
    <language>en-us</language>
    <pubDate>Tue, 20 Oct 2015 00:10:26 -0400</pubDate>
    <lastBuildDate>Tue, 20 Oct 2015 00:10:26 -0400</lastBuildDate>
    <itunes:category text="Technology">
      <itunes:category text="Tech News"/>
    </itunes:category>
    <itunes:explicit>No</itunes:explicit>
    <itunes:image href="http://devpostcommit.s3.amazonaws.com/art.jpg"/>
    <itunes:subtitle>Hackers, hackathons, and assorted nerdery</itunes:subtitle>
    <description>On The Commit, Devpost's weekly podcast, Richard and Neal talk about our favorite projects, interview leading hackers and evangelists, and keep you up to date developer news. New episodes hit the street every Thursday!
</description>
    <itunes:summary>On The Commit, Devpost's weekly podcast, Richard and Neal talk about our favorite projects, interview leading hackers and evangelists, and keep you up to date developer news. New episodes hit the street every Thursday!
</itunes:summary>
    <itunes:owner>
      <itunes:name>Devpost Inc.</itunes:name>
      <itunes:email>podcast@devpost.com</itunes:email>
    </itunes:owner>
    <item>
      <title>Episode 14: Input / Output</title>
      <itunes:explicit>No</itunes:explicit>
      <itunes:author>Devpost Inc.</itunes:author>
      <itunes:duration>376.0</itunes:duration>
      <pubDate>Thu, 15 Oct 2015 08:00:00 -0400</pubDate>
      <itunes:subtitle>New stuff!</itunes:subtitle>
      <itunes:summary><![CDATA[First up, we’ve got a new product announcement for all the hackathon hackers. Next, nostalgia for our favorite mice, keyboards, and PS/2 input devices of yore (er, 1998). And as usual, staff picks: Sahara and Project SAOUI.
]]></itunes:summary>
      <description><![CDATA[<p>First up, we’ve got a new product announcement for all the hackathon hackers. Next, nostalgia for our favorite mice, keyboards, and PS/2 input devices of yore (er, 1998). And as usual, staff picks: <a href="http://devpost.com/software/sahara-s3zdw4">Sahara</a> and <a href="http://devpost.com/software/project-saoui">Project SAOUI</a>.</p>]]></description>
      <guid isPermaLink="true">https://s3.amazonaws.com/devpostcommit/media/Episode14.mp4</guid>
      <category>Technology</category>
      <enclosure length="578027337" url="https://s3.amazonaws.com/devpostcommit/media/Episode14.mp4" type="video/mp4"/>
    </item>
  </channel>
</rss>
```

Bonus: with a couple extra properties, some creative naming (`audio_file`, `audio_file_size`, `video_file`, `video_file_size`), and an additional layout file, I could actually generate both my audio &amp; video feeds using one set of `_posts` files. 2 feeds, 1 stone!

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
