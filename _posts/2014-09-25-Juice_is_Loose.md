---
layout: post

title: "The Juice is Loose"
date: 2014-09-25 10:00:00
tags: javascript node

project: "https://github.com/abeisgreat/Shares.js"
author: "https://github.com/abeisgreat"
pn: "Shares.js"
an: "Abe Haskins"
description: "Shares.js reports social share counts for any URL"
ud: "http://www.urbandictionary.com/define.php?term=juice&defid=30608"
---

Whenever you publish new content: videos, blogs, infographics &mdash; anything with a unique URL &mdash; you want to know if it's got any <strong><a href="{{page.ud}}" title="The Juice via Urban Dictionary" target="_blank">juice</a></strong>. Why? Because more juice &#10143; more traffic &#10143; more revenue.

Since social media reacts in real-time, I recommend measuring your juice with <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on ChallengePost">{{page.an}}'s</a></strong> (heretofore underrated) <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> node module. It reports how many times a link has been shared across the most popular social networks.

{{page.pn}} is great for web projects or rolling your own social _juice-o-meter_. In just a few lines of code, you can build a tool that audits your content everyday:

```js
// you could run this via cron & email yourself a daily report
var shares = require('shares');

function getCounts(url){
  shares.get(url).then(function (counts) {
      console.log(url, "\n", counts, "\n");
  });
}

// load up array with URLs or built a command line interface
var urls = [
      'http://challengepost.com/',
      'http://gitat.me',
    ];

for (var x=0; x < urls.length; x++){
  getCounts(urls[x]);
}

/* OUTPUT

http://challengepost.com/
 { reddit: 12,
  linkedin: 3,
  stumbleupon: 168,
  facebook: 339,
  twitter: 469,
  pinterest: 18,
  buffer: 13 }

http://gitat.me
 { twitter: 105,
  linkedin: 6,
  stumbleupon: 0,
  facebook: 11,
  pinterest: 0,
  buffer: 3,
  reddit: 0 }

*/
```

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank">Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Discuss it</a></center>
