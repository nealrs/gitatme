---
layout: post

title: "An Email Assembly Line"
date: 2014-02-06 10:00:00
tags: javascript grunt

project: "https://github.com/patrickocoffeyo/ModernMail"
author: "https://github.com/patrickocoffeyo"
pn: "ModernMail"
an: "Patrick Coffey"
discuss: "https://github.com/nealrs/gitatme-comments/issues/22"
description: "ModernMail is a Grunt-driven email authoring tool with Bootstrap & LESS"
grunt:
issue: "22"
---

Despite their shared DNA, (CSS, images, and HTML), email and web design are very different.

Consider CSS &mdash; with web projects, you can define all of your styles in one organized .css file. With email, you have to style every element 'inline,' creating extra work and messy code. And don't even get me started on using tables instead of divs.

Fortunately, you can design great emails without drowning in HTML. Just roll up your sleeves and download <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}</a></strong>.

{{ page.pn }} has four big advantages over pre-built email templates:

1. Support for LESS, so you can go beyond vanilla CSS
2. Bootstrap scaffolding & button components - you can even make it responsive
3. Automatically compiles LESS into CSS & inlines it into HTML file
4. <strong><a href="http://gruntjs.com" title"Grunt">Grunt</a></strong> automatically watches for & manages changes in the background

As a bonus, {{ page.pn }} also generates zip archives which you can use with an email service provider like MailChimp. The entire workflow requires just two commands to monitor changes and compile the final output.

```bash
# 1. Monitor LESS file and update email.html as necessary
$ grunt watch

# 2. Edit styles in app.less

# 3. Edit copy in email.html

# 4. Build final email (compile LESS, inline styles, and generate zip file)
$ grunt
```

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
