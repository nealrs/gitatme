---
layout: post

title: "Markdown and Get PDF'd Up"
date: 2014-01-23 10:00:00
tags: javascript node

project: "https://github.com/alanshaw/markdown-pdf"
author: "https://github.com/alanshaw"
md: "http://gam.s3.amazonaws.com/demo/i20/demo.md"
pdf: "http://gam.s3.amazonaws.com/demo/i20/demo.pdf"
discuss: "https://github.com/nealrs/gitatme-comments/issues/20"
description: "markdown-pdf is a node.js module that converts Markdown to PDF"
issue: "20"
---

I really dig Markdown. It provides rich formatting with minimal markup so I can focus on _writing_ instead of `</p>` and `</a>` tags. The thing is, while it looks good online, Markdown isn't print-ready out of the box. That's why you need the <strong><a href="{{ page.project }}" target="_blank" title="markdown-pdf on GitHub">markdown-pdf</a></strong> node module from <strong><a href="{{ page.author }}" target="_blank" title="Alan Shaw on GitHub">Alan Shaw</a></strong>.

Markdown-pdf parses input files, converts them to HTML, and generates PDFs using phantom.js. It's got a good API & pairs well with gulp/grunt, but for one-off applications the CLI is a snap. Download the demo <strong><a href="{{ page.md }}" target="_blank" title="Sample Markdown Input">input</a></strong> and <strong><a href="{{ page.pdf }}" target="_blank" title="Sample PDF output">output</a></strong> files and try it out for yourself:

```sh
# install globally so you can use the command line interface
npm install -g markdown-pdf

# convert demo.md to a letter-sized landscape PDF
markdown-pdf -f letter -r landscape demo.md
```

_**N.B.** I recognize that LaTeX was designed almost specifically for the purpose of print & precision typesetting - but unless you're writing a scientific paper / calculus textbook, it's overkill._

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
