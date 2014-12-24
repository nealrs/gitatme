---
layout: post

title: "OMG, That's so Random!"
date: 2014-12-24 10:00:00
tags: node javascript

project: "https://github.com/svenanders/Rantjs"
author: "https://github.com/svenanders"
pn: "Rantjs"
an: "Sven Anders Robbestad"
description: "Rantjs is a procedural text generator written in JavaScript. The goal is to augment human creativity with the boundless potential of randomness."
issue: 68

rant: "https://github.com/TheBerkin/Rant"
---

A few weeks ago, I came across <strong><a href="{{page.rant}}" title="Rant on GitHub" target="_blank">Rant</a></strong>, a _"language for adding rich variations to text,"_ written in C#. It uses structured expressions:

```html
[rep:3][sep:\n]{The <adj> <noun-person>'s <face> betrayed his <adj.ness>}
```

to generate semi-random output:

```text
The furry woman's blank face betrayed his profitability.
The bored child's grin betrayed his Italian heritage.
The veiny teen's sneer betrayed his professionalism.
```

Neat, right? The thing is, my Mac is a Mono / .NET free zone. Fortunately old Saint Ni&mdash;<strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong> ported me a present: <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{page.pn}}</a></strong>!

While it isn't 100% complete yet, {{page.pn}} works quite well. For example, you can use it to generate click-baity _Upworthy_ headlines:

```js

var rjs = require("rantjs");
var tc = require('to-title-case');

var rant = new rjs.SimpleRant;
var r=[
  'Who Else Wants a <adj> <noun>?',
  'The Secret of <adv> <verb ing> your <noun>',
  'Here is a Method That is Helping <noun.pural> to <verb> <abstract.plural concept>',
  'Little Known Ways to <verb> your <rel>\'s <noun>',
  'Get Rid of <em> <adj> <noun.plural> Once and For All',
  'Here\'s a Quick Way to <verb> <abstract.plural> from <noun>',
  'Now You Can Have <em> <noun pural> without sacrificing your <adj ness>',
  '<emo> <verb> like a member of the <surname> clan',
  'These <rel plural> <verb ed> and their <rel>\'s response will make you <verb>'
  ];

r.map(console.log(tc(rant.rantConstructor)));  
```
I recognize that the output below is more _madlib_ than click-bait, but you can improve that by defining your own tags & vocabularies.

```text
"Who Else Wants a Mellow Accountant?"
"The Secret of Mortally Flattening Your Box"
"Here Is a Method that Is Helping Octopi to Lather Ideas"
"Little Known Ways to Apprehend Your Boss's Avocado"
"Get Rid of Most All-natural Accountants Once and for All"
"Here's a Quick Way to Prevent Bicycles from Masticating Hungrily"
"Now You Can Have Super Flute without Sacrificing Your Smoothness"
"Rage Freeze Like a Member of the Estes Clan"
"These Boys Snuggled and Their Mother's Response Will Make You Puke"

```

BTW, Merry Xmas.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Do you even comment bruh?</a></center>
