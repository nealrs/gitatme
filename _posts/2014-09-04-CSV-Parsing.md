---
layout: post

title: "The Best Thing You'll Ever Read About CSVs"
date: 2014-09-04 10:00:00
tags: python

project: "https://github.com/santiagobasulto/smartcsv"
author: "https://github.com/santiagobasulto"
pn: "smartcsv"
an: "Santiago Basulto"
discuss: "https://github.com/nealrs/gitatme-comments/issues/52"
description: "smartcsv is a python utility to read and parse CSVs based on model definitions"
issue: "52"
gif: "http://media1.giphy.com/media/Ve20ojrMWiTo4/giphy.gif"
---

_Today is Git@Me's first anniversary. Thank you so much for all your feedback, retweets, and support!_

CSV, like email, has persevered as a medium for exchanging data because when nothing else works, _it will_. But there are tradeoffs. What you gain in compatibility you lose in convenience:

- **Validation** &mdash; Python's built-in CSV parser can read data all day long, but it can't tell me if my data makes sense.

- **Headers** &mdash; I don't like referencing columns by index. `row[0]` has no context, while `row['first_name']` tells me everything I need to know.

- **Metadata** &mdash; Most parsers throw a fit whenever they come across anything _other_ than tabular data. As a result, all of my metadata, (date, source, etc.), has to go in the filename.

That's why I got all giddy when I came across <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{page.pn}}</a></strong> from <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{page.an}}</a></strong>. It addresses all three issues by parsing CSVs according to a user-defined model.

Here's an example model for data exported from a school's student database:

```python
model = [
  # Define column headers and whether data is required
  {'name': 'name', 'required': True},
  {'name': 'class', 'required': True},

  # Validation data based on allowable values
  {
    'name': 'grade',
    'required': True,
    'choices': ['A','B','C','D','F']
  },

  # Validate data with a function
  {
    'name': 'student_id',
    'required': True,
    'validator': is_real_id
  },

  # Validate data based on string properties
  {
    'name': 'student_portfolio',
    'required': False,
    'validator': lambda c: c.startswith('http')
  }
]
```

And my metadata? I can add arbitrary information at the top of my files and instruct {{page.pn}} to skip the first X lines when it parses them.

Pretty great right? This is how I felt after reading the docs:

<center><img src="{{page.gif}}" style="width:100%; border: 1px solid #111111; border-radius:4px;" alt="{{ page.pn }} got me like"></center>

<center><a href="{{page.project}}" class="btn btn-primary " title="Get {{page.pn}} on GitHub" target="_blank" >Get {{page.pn}}</a> <a href="{{ page.url }}#comments" class="btn btn-inverse" title="Discuss this issue of Git @ Me online">Discuss it</a></center>
