---
layout: post

title: "Clashing Colors"
date: 2015-03-05 10:00:00
tags: node javascript

project: "https://github.com/jxnblk/colorable"
author: "https://github.com/jxnblk"
pn: "Colorable"
an: "Brent Jackson"
description: "Colorable is a node package for contrast testing color combinations. It prevents you from designing yucky & hard to read things."
issue: 78

demo: "http://jxnblk.com/colorable/?mode=app"
---


Let's say a client hands you a color palette:

<style>
.cswatch{
  padding:4px 8px;
  font-family: Menlo, Monaco, "Courier New", monospace;
  word-wrap; normal;
  display: inline-block;
}
</style>

<span class="cswatch" style="background-color:#E903FC;">E903FC</span><span class="cswatch" style="background-color:#FAE00C;">FAE00C</span><span class="cswatch" style="background-color:#FDF303;">FDF303</span><span class="cswatch" style="background-color:#09AED4;">09AED4</span>


I know, it's pretty garish, but the guy loves _Miami Vice_. Let's humor the poor sap and look at all the color combinations:

<span class="cswatch" style="background-color:#E903FC; color:#FAE00C;">FAE00C</span><span class="cswatch" style="background-color:#E903FC; color:#FDF303;">FDF303</span><span class="cswatch" style="background-color:#E903FC; color:#09AED4;">09AED4</span><span class="cswatch" style="background-color:#FAE00C; color:#E903FC;">E903FC</span><span class="cswatch" style="background-color:#FAE00C; color:#FDF303;">FDF303</span><span class="cswatch" style="background-color:#FAE00C; color:#09AED4;">09AED4</span><span class="cswatch" style="background-color:#FDF303; color:#E903FC;">E903FC</span><span class="cswatch" style="background-color:#FDF303; color:#FAE00C;">FAE00C</span><span class="cswatch" style="background-color:#FDF303; color:#09AED4;">09AED4</span><span class="cswatch" style="background-color:#09AED4; color:#E903FC;">E903FC</span><span class="cswatch" style="background-color:#09AED4; color:#FAE00C;">FAE00C</span><span class="cswatch" style="background-color:#09AED4; color:#FDF303;">FDF303</span>

Yikes on bikes &mdash; that's ugly! But still, are _any_ of these pairs useable? According to <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> by <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>, just one: <span class="cswatch" style="background-color:#E903FC; color:#FDF303;">#FDF303</span><span class="cswatch" style="background-color:#FDF303; color:#E903FC;">#E903FC</span>

{{page.pn}} calculates contrast ratios for every color combination in your palette, checks whether they pass basic `aa` & high contrast `aaa` thresholds, and returns the results in JSON. The greater the ratio, the more suitable the color pair:

```javascript
[
  {
    hex: "#E903FC",
    name: "pink",
    combinations: [{
      hex: "#FAE00C",
      name: "manilla",
      contrast: 2.6740233766119865,
      accessibility: {
        aa: false,
        aaLarge: false,
        aaa: false,
        aaaLarge: false
      }
    },
    {
      hex: "#FDF303",
      name: "lemon",
      contrast: 3.0591253150885827,
      accessibility: {
        aa: false,
        aaLarge: true,
        aaa: false,
        aaaLarge: false
      }
    },
    {
      hex: "#09AED4",
      name: "cyan",
      contrast: 1.3625996936257574,
      accessibility: {
        aa: false,
        aaLarge: false,
        aaa: false,
        aaaLarge: false
      }
    }]
},
...
```

Here's to never clashing with your clients again! _See what I did there?_

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Do you event comment bruh?</a></center>
