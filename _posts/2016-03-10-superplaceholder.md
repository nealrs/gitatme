---
layout: post

title: "A place(holder) for everything"
date: 2016-03-10 10:00:00 EST
tags: javascript

project: "https://github.com/chinchang/superplaceholder.js"
author: "https://github.com/chinchang"
an: "Kushagra Gour"
pn: "superplaceholder.js"

description: "superplaceholder.js adds multiple instruction placeholders to HTML form inputs."

issue: 129

img: "http://gam.s3.amazonaws.com/img/i129.png"
gif: "http://gam.s3.amazonaws.com/img/i129.gif"
---

I've been working with a lot of forms recently and I am in love with the `placeholder` attribute. It lets you add contextual instructions or an example input to an input field. (That said, it's not a replacement for labels!)

<a href="{{page.img}}" target="_blank" title="a sample placeholder"><img src="{{page.img}}" class="demo"></a>

Now, if you want to demonstrate multiple example inputs or have more complicated instructions, standard placeholders won't cut it. For that, you need a <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>.

<a href="{{page.gif}}" target="_blank" title="{{page.pn}} demo"><img src="{{page.gif}}" class="demo"></a>

Created by <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>, {{page.pn}} cycles through a list of strings once you click into an input field, augmenting the original placeholder. You can control the 'typing speed', speed at which the strings are cycles, and looping behavior.

Here's how you initialize it:

```javascript
superplaceholder({
  // specify the input element
  el: document.querySelector('input'),
  sentences: [ 'Something to show', 'Another thing to show'],
  options: {
    // delay between letters (in milliseconds)
    letterDelay: 100, // milliseconds

    // delay between sentences (in milliseconds)
    sentenceDelay: 1000,

    // should start on input focus. Set false to autostart
    startOnFocus: true,

    // loop through passed sentences
    loop: true,

    // Initially shuffle the passed sentences
    shuffle: false,

    // Show cursor or not. Shows by default
    showCursor: true,

    // String to show as cursor
    cursor: '|'
  }
});
```

Easy, right? You can install it via npm, Bower, or just download the library from GitHub. Now go forth and form some forms!

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
