---
layout: post

title: "Log & Hip Hop"
date: 2013-11-28 10:00:00
tags: ruby

project: "https://github.com/blahed/chainsaw"
author: "https://github.com/blahed"
secondary: "https://github.com/mojombo/chronic"
discuss: "https://github.com/nealrs/gitatme-comments/issues/13"
description: "If server logs could rap, they'd sound a lot like Mike Jones: Back then you didn't tail me / Now I'm hot you all grep me!"
issue: "13"
---
If server logs could rap, they'd sound a lot like Mike Jones: _Back then you didn't tail me / Now I'm hot you all grep me!_ (See what I did there?)

Jokes aside, if you're working with logs that span a long period of time, check out <strong><a href="{{ page.project }}" target="_blank" title="Chainsaw on GitHub">Chainsaw</a></strong>. Written by <strong><a href="{{ page.author }}" target="_blank" title="Travis Dunn">Travis Dunn</a></strong>, it analyzes log files and returns entries for subset time periods. 

Chainsaw automatically recognizes common log formats (Apache, Nginx, Ruby, Python, Rails, MongoDB, etc) and is super flexible. You can use relative (last week), complex (2 months ago Sunday at 1:00 pm), and specific (2013-10-01 - 2013-11-15) time strings. It also has a text filter so you can query simultaneously for time & content.

<pre class="prettyprint lang-ruby">
$ chainsaw access.log 2 months ago Sunday at 1:00 pm
# return log entries from target time until now.

$ chainsaw access.log -f GET last week
# return all entries from last week forward containing the phrase GET.

$ chainsaw access.log -i october - 2013-11-15
# return entries from october through the middle of november and print them one-by-one when you hit return.
</pre>

Chainsaw is easy to use, efficient, and plays well with others: 

- Couple it with sendmail and cron to send out daily/weekly issue reports with corresponding log entries.  
- Use Twilio's API to trigger an SOS text whenever your app exceeds an event threshold.

_And before I succumb to the 'itis', I'd like to give thanks. I'm thankful for your support, readership, and awesome feedback. Happy Turkey Day!_  

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>