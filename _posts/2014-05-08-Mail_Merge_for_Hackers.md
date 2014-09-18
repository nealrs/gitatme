---
layout: post

title: "Mail Merge for Hackers"
date: 2014-05-08 10:00:00
tags: go

project: "https://github.com/zachlatta/postman"
author: "https://github.com/zachlatta"
pn: "Postman"
an: "Zach Latta"
discuss: "https://github.com/nealrs/gitatme-comments/issues/35"
description: "Postman is a Go command-line utility for batch sending email."
issue: "35"

---

The growth hacker's playbook is heavy on email; the key is to identify the right tool for the job. Emailing a few thousand users about a product update? MailChimp. Cold emailing a pitch to a hundred prospects? Tout.

But what about a basic mail merge, (e.g. first name, title, and city), to forty recipients? The time it'd take me to import contacts into Tout or fight with MailChimp's template designer is better spent writing the actual email.

<strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}</a></strong> is a command line tool for minimal mail merges. All you need is an HTML or plain text template and a CSV of recipients & merge fields.

```bash
# No API keys, just one command & a few flags
$ postman -html t.html -text t.txt -csv r.csv -sender "Foo Bar &lt;foo@bar.com&gt;" -subject "Mail Merge Madness!" -server mail.foo.com -port 587 -user "foo@bar.com" -password "pa$$w0rd"
```

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" >Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Join the discussion</a></center>
