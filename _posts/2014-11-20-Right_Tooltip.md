---
layout: post

title: "The Right Tooltip for the Job"
date: 2014-11-20 10:00:00
tags: css

project: "https://github.com/catc/simple-hint"
author: "https://github.com/catc"
pn: "Simple Hint"
an: "Catalin Covic"
description: "Simple-hint is a CSS-only tooltip library packed with a variety of features."
img: "http://gam.s3.amazonaws.com/img/i63.gif"
maslow: "http://en.wikipedia.org/wiki/Abraham_Maslow"
atwood: "http://blog.codinghorror.com/the-principle-of-least-power"
tldr: "http://catc.github.io/simple-hint/#tldr"
issue: 63
---

According to <strong><a href="{{page.maslow}}" title="Abraham Maslow on Wikipedia" target="_blank">Maslow</a></strong>, "If all you have is a hammer, everything looks like a nail." For web developers, <strong><a href="{{page.atwood}}" title="Atwood's Law on Coding Horror" target="_blank">that hammer is JavaScript</a></strong>.

Honestly, it's gotten out of control. Bootstrap, the most popular front-end framework _of all time_, uses jQuery to show and hide tooltips. I literally can't even.

Instead, try <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>. With one stylesheet and a tiny bit of markup, you can create gorgeous CSS-only tooltips:

```html
<span simple-hint="Hi there, I'm a pure CSS tooltip" class="hint-top">Hover over me</span>

```

<center><img src="{{page.img}}" class="demo" alt="{{ page.pn }} demo app">
</center>

And with <strong><a href="{{page.tldr}}" title="{{page.pn}} docs" target="_blank">additional classes</a></strong>, you can add animations, fades, delays, persistence, color typing, and more.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Do you even comment bro?</a></center>
