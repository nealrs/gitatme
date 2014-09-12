---
layout: post

title: "The Keyboard Shortcut to Success"
date: 2013-12-26 10:00:00
tags: javascript

project: "https://github.com/ccampbell/mousetrap"
author: "https://github.com/ccampbell"
discuss: "https://github.com/nealrs/gitatme-comments/issues/17"
demo: ""
description: "Keyboard shortcuts are awesome - add them to your web app with Mousetrap"
issue: "17"
---

In business school, there's a theory that bankers shouldn't be allowed to have computer mice until they master Excel's numerous keyboard shortcuts. I'm not sure if any banks actually do it, but I like the idea.

Relying on your mouse to access a menu or format text is as inefficient as hunt & peck typing. Fortunately for the web, keyboard shortcuts are gaining popularity.

I've been experimenting with <strong><a href="{{ page.project }}" target="_blank" title="Mousetrap on GitHub">Mousetrap</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="Craig Campbell on GitHub">Craig Campbell</a></strong> and I really dig it. It's a small, well maintained library for creating keyboard shortcuts and has no dependencies (looking at you jQuery).

Mousetrap is very intuitive, all you have to do is bind the key sequence to a callback. My favorite feature is how it automagically handles <code>?</code> and <code>^</code> without worrying about the <code>shift</code> modifier. You can grok the docs for more, but here are a few shortcuts I'm adding to my next app:

```js
// single key shortcut
Mousetrap.bind("?", function() {
  console.log('Yep, this app is keyboard enabled!');
  showHelp();
});

// multi-key shortcut
Mousetrap.bind('capslock+G', function() {
  alert('Capslock is stupid.');
});

// gmail style, sequential key-press shortcut
Mousetrap.bind('y u n o', showMeme());

// and of course, the konami code of misspent youth
Mousetrap.bind('up up down down left right left right b a enter', easterEgg());
```

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
