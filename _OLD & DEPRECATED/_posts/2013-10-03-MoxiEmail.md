---
layout: post

title: "MoxiEmail"
date: 2013-10-03 10:00:00
tags: python

readme: "https://github.com/SyrusAkbary/validate_email"
fork: "https://github.com/SyrusAkbary/validate_email/fork"
discuss: "https://github.com/nealrs/gitatme-comments/issues/5"
description: "With a little elbow grease, Python, and Validate_email, you can automatically check and verify common email address patterns."
issue: "5"
---

<p><em>Fortune favors the bold</em>. It's the sole prerequisite for success. Forget expensive conferences, bespoke suits, and top 10 MBAs. If you want to make new connections or find your next gig, all you need is chutzpah and an email address!</p>

<p>Thanks to LinkedIn, it's easy to find names and titles of decision makers. Unfortunately, getting their email addresses is tedious and mostly guess work. Mail servers block port 79 and businesses hide behind high friction contact forms. So much for the global village, right?</p> 

<p>Wrong. With a little elbow grease, Python, and <a href= "https://github.com/SyrusAkbary/validate_email" target="_blank"><strong>Validate_email</strong></a> by <a href="https://github.com/SyrusAkbary/" target="_blank"><strong>Syrus Akbary</strong></a>, you can automatically check and verify common email address patterns.</p>

<pre class="prettyprint lang-python">
import sys
from validate_email import validate_email 

# define name, domain, and pattern parameters
fn = sys.argv[1]
ln = sys.argv[2]
d = sys.argv[3]
fi = fn[:1]
li = ln[:1]

p0 = "xxx" #catchall trigger
p1 = fn  # robin
p2 = ln	# hood
p3 = fi+li # rh
p4 = fn+"_"+ln # robin_hood
p5 = fi+"_"+ln # r_hood
p6 = fn+ln # robinhood
p7 = fn+"."+ln # robin.hood
p8 = fn+li # robinh
p9 = fi+ln # rhood
p10 = fn+"."+li # robin.h
p11 = fi+"."+ln # r.hood
p12 = ln+"."+fn # hood.robin
p13 = ln+fi # hoodr

p = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13]

# add a splash of color
HEAD = '\033[95m'
OK = '\033[92m'
WARN = '\033[93m'
FAIL = '\033[91m'
ENDC = '\033[0m'

# run checks for mx records, catchalls, and individual patterns
print HEAD+"Checking..."+ENDC
for x in p:
 i = x+"@"+d
 has_mx = validate_email(i,check_mx=True)
 is_real = validate_email(i,verify=True)
 
 if (has_mx == False):
  print FAIL+"no mx record"+ENDC
  break
 elif (is_real and x == p0):
  print WARN+"catchall detected"+ENDC
  break
 elif (x != p0):
  print i,
  if is_real:
   print ": "+OK+"probably valid"+ENDC
  else:
   print ": probably not valid"
print HEAD+"Done"+ENDC
</pre>

<p>Run it and enter first, last, and domain name. You could also write a script to read in and loop through a spreadsheet of data.</p>

<pre class="prettyprint lang-bsh">
$ python check.py robin hood gmail.com
<span class = "nocode" style="color:pink;">Checking...</span>
robin@gmail.com : probably not valid
hood@gmail.com : probably not valid
rh@gmail.com : probably not valid
robin_hood@gmail.com : probably not valid
r_hood@gmail.com : probably not valid
robinhood@gmail.com : probably valid
robin.hood@gmail.com : probably valid
robinh@gmail.com : <span class = "nocode" style="color:Chartreuse ;">probably valid</span>
rhood@gmail.com : probably not valid
robin.h@gmail.com : <span class = "nocode" style="color:Chartreuse ;">probably valid</span>
r.hood@gmail.com : probably not valid
hood.robin@gmail.com : <span class = "nocode" style="color:Chartreuse ;">probably valid</span>
hoodr@gmail.com : probably not valid
<span class = "nocode" style="color:pink;">Done</span>

$ python check.py robin hood google.com
<span class = "nocode" style="color:pink;">Checking...</span>
<span class = "nocode" style="color:yellow;">catchall detected</span>
<span class = "nocode" style="color:pink;">Done</span>

$ python check.py robin hood go__ogle.com
<span class = "nocode" style="color:pink;">Checking...</span>
<span class = "nocode" style="color:red;">no mx record</span>
<span class = "nocode" style="color:pink;">Done</span>
</pre>

<p>Because of catchalls & wonky mx records, pinging email servers isn't foolproof. However, it's an excellent pre-screen for Rapportive, cutting down on rekeying and bounced emails. Use the time you save to hone your outreach. Be sincere, write succinctly, and don't forget to follow up!</p>

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>