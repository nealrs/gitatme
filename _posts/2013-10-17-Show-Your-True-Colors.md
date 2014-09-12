---
layout: post

title: "Show Your True Colors"
date: 2013-10-17 10:00:00
tags: python

project: "https://github.com/99designs/colorific"
author: "https://github.com/99designs"
discuss: "https://github.com/nealrs/gitatme-comments/issues/7"
description: "Colorific calculates hex code palettes for images from the command line."
issue: "7"
---
<p>Development is a team effort with a lot of moving parts: UX, front end, back end, wireframes, mockups, testing, etc &mdash; you can't control them all. And since according to Murphy's Law, shit is <em>bound</em> to happen, you may want to pack a spare 'chute!</p>

<p>Let's say you're working front end, building a prototype from mockups. Ideally, your design team will specify color codes, compile graphic assets, and spell out all the details in advance. Specs in hand, you have everything you need to write the HTML, CSS, and JS.

<p>But what if your designer only has time to create logos and hand draw mockups? Can you still assemble a color palette and implement the design? <em>Sí se puede!</em></p>

<p><strong>Option A:</strong> Open each image individually. Mouse around with the color picker. Convert RGB to hex. Get carpal tunnel.</p>

<p><strong>Option B:</strong> Install <strong><a href="{{page.project}}" target="_blank" title="Colorific on GitHub">Colorific</a></strong> from <strong><a href="{{page.author}}" target="_blank" title="99Designs">99Designs</a></strong>. Automatically retrieve hex code palettes for each image in one step. Take a nap.</p>

<p><center><strong>
	<img src="{{site.img}}issue_7_msft.png" style="max-width:300px; text-align:center;" alt="msft.png" title="msft.png"><br>
	<img src="{{site.img}}issue_7_poncho.png" style="max-width:300px; text-align:center;" alt="poncho.png" title="poncho.png"><br>
Microsoft and Poncho logos</strong>
</center></p>

```bash
$ find . -name '*.png' | colorific
./msft.png #6eb006, #1291eb, #ec381b, #fdac09
./poncho.png #76c6fe, #f46b23, #ffef10, #bbe3ff
```

Just like that, you've saved the day. Want a visual palette? Use the -o flag.

```bash
$ colorific -o wendy.png
./wendy.png	#d0202a, #f4d6d8, #493534, #a4253a, #13a2de
```

<p><center><strong>
<img src="{{site.img}}issue_7_wendy.png" style="max-width:300px; text-align:center;" alt="wendy.png" title="wendy.png"><br>
<img src="{{site.img}}issue_7_wendy_palette.png" style="max-width:300px; text-align:center;" alt="wendy.png color palette" title="wendy.png color palette"><br>
Wendy's logo and color palette</strong>
</center></p>

<p>Colorific tries to account for antialiasing effects and excludes background & grayscale colors. Read more about the underlying methodology on the <strong><a href="http://99designs.com/tech-blog/blog/2012/05/11/color-analysis/" target="_blank" title="Coloric on 99Designs">99Designs Tech Blog</a></strong>.</p>

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
