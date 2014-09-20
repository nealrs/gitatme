---
layout: post

title: "Garbage In, Awesome Out"
date: 2014-08-21 10:00:00
tags: python

project: "https://github.com/LuminosoInsight/python-ftfy"
author: "https://github.com/rspeer"
pn: "ftfy"
an: "Rob Speer"
discuss: "https://github.com/nealrs/gitatme-comments/issues/50"
description: "ftfy is a python module that fixes problems with text & Unicode encoding."
issue: "50"
db: "http://dasbrun.ch"
---

`Ctrl-C` and `Ctrl-V` may be the world's best-known keyboard shortcuts, but they're fraught with deceit. Copying & pasting creates a false sense of security that what you see is _always_ what you're going to get. **It is not.**

Try copy-pasting text from a PDF, special characters from MS Word, or logs from your console. At some point, you'll run into gobbledygook like �, Ã¶ or, åŒ. That's called _mojibake_ and it's your computer's way of saying, "I have _no_ idea what this means."

To avoid these embarrassing situations, run your text through <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{page.pn}}</a></strong>, a Python library that converts most Unicode text into UTF-8, (the _de facto_ web standard).


Created by <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong> at Luminoso, {{page.pn}} can also uncurl quote marks, strip out control/color sequences, and convert HTML entities back into their original text. Basically, it's a magical Unicode unicorn.

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" style="margin-right:10px;">Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Discuss it</a></center>
