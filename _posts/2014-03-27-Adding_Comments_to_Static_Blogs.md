---
layout: post

title: "Adding Comments to Static Blogs"
date: 2014-03-27 10:00:00
tags: javascript

project: "https://github.com/hit9/petal"
author: "https://github.com/hit9"
pn: "Petal"
an: "王超"
discuss: "https://github.com/nealrs/gitatme-comments/issues/29"
description: "Petal turns GitHub issues into comment threads."
issue: "29"
issue_demo: "https://github.com/nealrs/gitatme-comments"
img: "http://gam.s3.amazonaws.com/img/issue_29.png"
---

When I first started using Jekyll, the static blog engine behind Git@Me, I was concerned about two things: SEO and comments. Unlike Wordpress, Jekyll isn't bundled with much more than the basics.

The SEO issue is surmountable with site maps, good URL building, and daily prayers to Google, but comments are another story. You have to use a third-party service like Disqus or Livefyre, both of which come with limitations and vendor lock in.

That's why I decided to use GitHub as my comment engine. I already use it everyday, most of the folks interested in commenting use it too, and there's a great API backing it all up.

I have a <strong><a href="{{ page.issue_demo }}" target="_blank" title="Git@Me discussion form on GitHub">public repo</a></strong> specifically for comments and I create a <strong><a href="{{ page.discuss }}" target="_blank" title="Commend thread on GitHub">new issue</a></strong> for every post. This enables a rich commenting experience with support for markdown, post-submission editing, and email notifications.

It's a pretty slick solution, but until recently, I didn't have a way to display comments onsite, readers had to go to GitHub. Fortunately, I found <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}</a></strong>. It's a jQuery plugin that uses a proxy to pull the content from and post to issues without leaving the page.

<center><img src="{{page.img}}" alt="A Git@Me comment thread" title="A Git@Me comment thread"></center> 

You can restyle & modify {{page.pn}} easily using SASS and the included makefile. I suggest replacing the default `Control+Enter` keyboard shortcut with a post button.

```html
<!-- jQuery 1.7+ required -->
<link rel="stylesheet" href="petal.min.css" type="text/css" />
<script src="petal.min.js" type="text/javascript"></script>
<script>
  $(document).ready(function(){
    $.petal.init("user/repo", issue_id)
    // set the user/repo & issue id programmatically via templates.
  })
</script>
<!-- This div is the comment container -->
<div class="petal"></div>
```

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
