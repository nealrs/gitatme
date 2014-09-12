---
layout: post

title: "A RegEx Fairytale"
date: 2013-09-05 10:00:00
tags: javascript

readme: "https://github.com/VerbalExpressions/JSVerbalExpressions"
fork: "https://github.com/VerbalExpressions/JSVerbalExpressions/fork"
discuss: "https://github.com/nealrs/gitatme-comments/issues/1"
description: "VerbalExpressions enables you to construct RegEx statements that you can actually understand. Think of it as SQL-level simplicity for Regular Expressions."
issue: "1"
---

Whether you're a novice or a seasoned developer, **<a href="http://en.wikipedia.org/wiki/Regular_expression">Regular Expressions</a>** are notoriously tricky. It's a bit like asking Rumpelstiltskin for help. Sure he can validate your form inputs - but you'll need to hand over your firstborn child and make him a sandwich too. Next time, try **<a href="https://github.com/VerbalExpressions/JSVerbalExpressions" target="_blank">VerbalExpressions.</a>**

VerbalExpressions enables you to construct RegEx statements that you can actually understand. Think of it as SQL-level simplicity for Regular Expressions. For example, to validate a URL in javascript:

```js
/* Normal RegEx gobbledy gook: */
/^(http)(s)?(\:\/\/)(www\.)?([^\ ]*)$/

/* VerbalExpressions statement: */
VerEx().startOfLine().then( "http" ).maybe( "s" ).then( "://" ).maybe( "www." ).anythingBut( " " ).endOfLine()
```


How cool is that? RegEx you can read! VerbalExpressions ports are available for Javascript, Ruby, PHP, and more. So what are you waiting for?

**Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a>**
