---
layout: post

title: "Be Your Own Beethoven"
date: 2014-01-30 10:00:00
tags: ruby

project: "https://github.com/jstrait/beats"
author: "https://github.com/jstrait"
yaml: "http://gam.s3.amazonaws.com/demo/i21/i21.txt"
wav: "http://gam.s3.amazonaws.com/demo/i21/i21.wav"
discuss: "https://github.com/nealrs/gitatme-comments/issues/21"
description: "Beats is a command-line drum machine, written in Ruby"
issue: "21"
---

During the summer of 1995, I attended Duquesne University's (now defunct) Multicultural Computer Academy. In-between classes on Pascal and HTML, I got my first introduction to electronic music. I really liked the idea of 'coding' music, and spent a whole day writing a program in Basic that played Für Elise through my 486's built-in speaker.

At some point during that exercise it clicked for me &mdash; code and composition are the same thing: a set of instructions executed in a specific order.

Later, I got into hip-hop and learned about sampling & drum machines. Instead of writing music note by note, producers were creating tracks bottom up, using discrete building blocks sampled from other artists. It was like playing with musical Legos!

If you think you've got what it takes to be the next Pharrell or Rick Rubin, check out <strong><a href="{{ page.project }}" target="_blank" title="Beats on GitHub">Beats</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="Joel Strait on GitHub">Joel Strait</a></strong>, a command-line drum machine written in Ruby. It let's you 'code' a track using samples & loops like cymbal crashes and drum kicks.

Beats accepts YAML input, outputs WAV files, and is BYO samples/drum kit. Here's what the below <strong><a href="{{ page.yaml }}" target="_blank" title="Sample YAML Input">input</a></strong> sounds like [drum samples are from an <strong><a href="http://samples.kb6.de/gjrwo975fghfog986fsk/[KB6]_Alesis_HR16A.rar" target="_blank" title = "Download the Alesis HR-16A drumkit">Alesis HR-16A</a></strong>]:

<audio src={{ page.wav }} controls="controls" </audio>

```
Song:
  Tempo: 100
  Flow:
    - Verse:   x4

  Kit:
    - bass:    Alesis_HR16A_01.wav
    - clap:    Alesis_HR16A_17.wav
    - hihat:   Alesis_HR16A_16.wav
    - tom:     Alesis_HR16A_56.wav
    - snare:   Alesis_HR16A_39.wav

Verse:
  - bass:      |X..XX...X..XX...|
  - clap:      |..X...........XX|
  - hihat:     |..X...X...X...X.|
  - tom:       |X......X.......X|
  - snare:     |...........XX...|
```

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
