---
layout: post

title: "Time Keeps on Slippin'"
date: 2013-09-19 10:00:00
tags: ruby

readme: "https://github.com/bokmann/business_time"
fork: "https://github.com/bokmann/business_time/fork"
discuss: "https://github.com/nealrs/gitatme-comments/issues/3"
description: "Business Time is a handy tool for traversing the calendar and doing math in terms of business hours & days." 
issue: "3"
---

Time may be infinite - but your work week and development resources aren't.

In short sprints, it's fairly easy to understand the impact of a one hour delay for a quick bugfix, or lost productivity due to a mid-week holiday. You don't need a full featured project management suite either - just fire up a console window. 

<strong><a href="{{ page.readme }}" target="\_blank">David Bock's Business Time</strong></a> Ruby gem is a handy tool for traversing the calendar and doing math in terms of business hours & days. With a few short statements, you can forecast start & end dates and predict how potential delays will affect dependent activities.

<pre class="prettyprint lang-ruby">
require 'active_support'
require 'business_time'  
today = Time.parse("September 19th, 2013, 10:15 AM")    

# Jump forward two business days
2.business_day.after(today)   
# 2013-09-23 10:15:00 -0400 -- The following Monday    

# Jump back a few business hours 
5.business_hour.before(today)  
# 2013-09-18 13:15:00 -0400 -- The previous afternoon    

# Define a non-standard work schedule 
BusinessTime::Config.work_hours = {  
  :mon=>["10:00","18:00"],  
  :tue=>["10:00","20:00"],  
  :wed=>["9:00","18:00"],  
  :thu=>["10:00","19:00"],  
  :fri=>["10:00","16:00"],  
}  
12.business_hour.after(today)  
# 2013-09-20 14:15:00 -0400
		
# Start from the current time with .from_now and .ago
1.business_hour.from_now  
10.business_days.ago
</pre>

Business Time can account for holidays, variable schedules, and way more. It's a great resource for building time aware and schedule driven applications.

The only catch is that Business Time is only available in Ruby. Blerg. How will your PHP, Python, or Perl app make do without?

To borrow a phrase from Patrick Bateman, _Don't just stare at it, port it!_ This is an excellent opportunity to contribute to an open source project and cross-train your brain. Git started today!

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>