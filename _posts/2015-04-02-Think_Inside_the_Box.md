---
layout: post

title: "Think Inside the Box"
date: 2015-04-02 10:00:00
tags: ruby

project: "https://github.com/mushishi78/box_packer"
author: "https://github.com/mushishi78"
pn: "BoxPacker"
an: "Max White"
description: "BoxPacker is a first-fit 3D bin packing algorithm with optional weight and bin limits -- in Ruby."
issue: 82
img: "http://gam.s3.amazonaws.com/img/i82.svg"
binpack: "http://www.wikiwand.com/en/Bin_packing_problem"

---

During a trip to Indonesia, I watched an art dealer handmake a cardboard box. He started with a flat sheet, measured the dimensions, scored it, and neatly folded it all up.

Back home in the US, I'm disappointed whenever I receive packages shipped in  oversized boxes filled with peanuts or plastic air pouches. It's not just wasteful, it's bad business. Volume is a bigger and more expensive constraint than weight.

That's why Amazon, and most other smart e-comm retailers, now use <strong><a href="{{page.binpack}}" title="What is bin packing?" target="_blank">bin packing algorithms</a></strong> to find the most efficient box sizes and packing arrangements for their shipments.

Imagine you're shipping an order to Reno, NV:

- A (3 x 1 x 3) cm^3 [red]
- B (5 x 3 x 5) [blue]
- C (1 x 2 x 3) [green]

And you have 3 standard box sizes:

- b1 (5 x 5 x 4)
- b2 (6 x 5 x 4 )
- b3 (5 x 5 x 5)

Instead of using trial &amp; error to figure out the best arrangement, calculate it with <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, a 3D bin packing library from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>:

```ruby
require 'box_packer'

BoxPacker.builder do |b|
  # establish container sizes
  c1 = b.container [5, 5, 4] # volume: 100
  c2 = b.container [6, 5, 4] # volume: 120
  c3 = b.container [5, 5, 5] # volume: 125

  # assign items to each container
  c1.items = [ # total volume: 90
    b.item([3, 1, 3], label: 'A', colour: 'red'),
    b.item([5, 3, 5], label: 'B', colour: 'blue'),
    b.item([1, 2, 3], label: 'C', colour: 'green')
  ]
  c3.items = c2.items = c1.items

  # Pack em!
  c1.pack!; c2.pack!; c3.pack!

  # visualize each container by layers and perspective
  c1.draw!('examples/c1', scale_longest_side_to: 500, margin: 15)
  c2.draw!('examples/c2', scale_longest_side_to: 500, margin: 15)
  c3.draw!('examples/c3', scale_longest_side_to: 500, margin: 15)

  # print output to console
  puts c1; puts c2; puts c3

end
```

Here are the results:

```text
Container| 5x5x4
  Packing| Remaining Volume:10
     Item| B 5x5x3 (0,0,0) Volume:75
     Item| A 3x3x1 (0,0,3) Volume:9
     Item| C 2x3x1 (3,0,3) Volume:6

Container| 6x5x4
  Packing| Remaining Volume:30
     Item| B 5x5x3 (0,0,0) Volume:75
     Item| A 3x3x1 (0,0,3) Volume:9
     Item| C 2x3x1 (3,0,3) Volume:6

Container| 5x5x5
  Packing| Remaining Volume:35
     Item| B 5x5x3 (0,0,0) Volume:75
     Item| A 3x3x1 (0,0,3) Volume:9
     Item| C 2x3x1 (3,0,3) Volume:6
```

The ideal box is b1, which has the least wasted volume: 10 cm^3. Here's what the packing arrangement looks like (includes layers & length / width / height views):

<center><a href="{{page.img}}" target="_blank" title="take a closer look at the {{page.pn}} demo"><img src="{{page.img}}" alt="{{page.pn}} output for b1" ></a></center>

This is a simple example, but {{page.pn}} can also take into account weight and # of items/box packing limits. You could even use it to find the optimal packing arrangement for your next road trip!

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comment with markdown & emoji</a></center>
