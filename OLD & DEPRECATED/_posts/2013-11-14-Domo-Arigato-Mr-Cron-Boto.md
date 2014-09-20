---
layout: post

title: "Domo Arigato Mr. Cron-boto"
date: 2013-11-14 10:00:00
tags: ruby

project: "https://github.com/vishaltelangre/cron-parser"
author: "https://github.com/vishaltelangre"
discuss: "https://github.com/nealrs/gitatme-comments/issues/11"
description: "Cron::Parse translates patterns into a more natural, sentence-like format and identifies errors & invalid inputs."
issue: "11"
---
Cron is a utility for scheduling console commands. It enables you to setup recurring tasks the same way you plan meetings in Outlook. Need to backup server logs on the third Wednesday of every month at 10:45pm? No problem, add an rsync job to your crontab and you're all set!

Now here's the rub. If you're just getting started with cron, writing <strong><a href="http://en.wikipedia.org/wiki/Cron#Predefined_scheduling_definitions" target="_blank" title="Cron patterns on Wikipedia">patterns</a></strong> - the actual scheduling logic - is a bit cryptic. For example, the cron pattern for that rsync backup is: `45 22 15-21 * Wed` It's easier to decipher than regex, but some more context would be helpful.

To build confidence and really master cron, check out <strong><a href="{{ page.project }}" target="_blank" title="Cron::Parser on GitHub">Cron::Parser</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="Vishal Telangre on GitHub">Vishal Telangre</a></strong>. This Ruby gem translates patterns into a more natural, sentence-like format and identifies errors & invalid inputs:

<pre class="prettyprint lang-ruby">
require 'cron'

# Define pattern, parse it, and print the 'humanized' version
# BTW, the third Wednesday of the month falls between the 15th and the 21st
test = '45 22 15-21 * Wed'
pattern = Cron::Parser.new(test)
puts pattern.meaning 
#=> at 45th minute; on 10pm; on days: 15th, 16th, 17th, 18th, 19th, 20th, 21st; every month; on Wednesday

# Parse just the day of month field
puts pattern.day_of_month_field.meaning
#=> on days: 15th, 16th, 17th, 18th, 19th, 20th, 21st

# Throw an error for invalid patterns
Cron::Parser.new('45 22 15-21 0 Wed')
#=> `investigate_invalid_values!': value: '0' not allowed for 'month' field, run: 'Cron::Parser::MonthField.allowed_values' to know valid values (InvalidMonthFieldError)

</pre>

In my experience, the best startups encourage communication. That's why I send Engineering & Product an email illustrating our sales pipeline every day. But instead of manually running SQL reports, digging through my homebrew CRM, and formatting data in Gmail, I wrote a cron job to do it for me every weekday at 7:15pm.

Minutes spent coding: __45__

Hours saved since 2011: __200+__ 

Number of missed emails: __Zero__

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>