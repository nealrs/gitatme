---
layout: post

title: "Text with a Hair Trigger"
date: 2014-01-16 10:00:00
tags: javascript

project: "https://github.com/JamesMGreene/jquery.textSelect"
author: "https://github.com/JamesMGreene"
discuss: "https://github.com/nealrs/gitatme-comments/issues/19"
demo: "http://gam.s3.amazonaws.com/demo/i19/index.html"
description: "jquery.textSelect triggers an event when a user selects text"
issue: "19"
---

I was digging for under-the-radar JavaScript projects this week when I came upon <strong><a href="{{ page.project }}" target="_blank" title="jquery.textSelect on GitHub">jquery.textSelect</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="James M. Greene on GitHub">James M. Greene</a></strong>. It's a jQuery plugin that triggers a callback whenever you select the bound text.

It's a neat hack and stepping stone for cool UI elements. If you're looking for a weekend project, try building a reusable "tweet this" popup/widget for pull quotes and important passages.

<strong><a href="{{ page.demo }}" target="_blank" title="jquery.textSelect Demo">Demo here</a></strong>, code below:

```html
<html lang="en">
<head>
  <script src="jquery.min.js"></script>
  <script src="jquery.textSelect.js"></script>
  <script>
    $(document).ready(function() {
      // define target element & callback  
      $('.sel').on("textSelect", function(){
        alert("wasn't that fun?");
      });
    });  
  </script>
</head>
<body>
  <h3>jquery.textSelect Demo</h3>
  <p class="sel">highlight or double click me</p>
  <p>don't bother with me though</p>
</body>
</html>
```

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
