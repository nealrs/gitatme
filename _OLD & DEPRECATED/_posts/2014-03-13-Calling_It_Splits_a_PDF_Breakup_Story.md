---
layout: post

title: "Calling It Splits, a PDF Breakup Story"
date: 2014-03-13 10:00:00
tags: ruby

project: "https://github.com/documentcloud/docsplit"
author: "https://github.com/documentcloud"
pn: "Docsplit"
an: "DocumentCloud"
discuss: "https://github.com/nealrs/gitatme-comments/issues/27"
description: "Docsplit is a CLI & Ruby library for splitting apart documents into their component parts."
issue: "27"

demo: "http://nealrs.github.io/i27"
---

As a former book designer and engineer, I'm wary of PDFs. They come with too many gotchas. Fixed layout documents can't be reformatted for smaller screens. Poor layering and organization lead to copy & paste snafus. And if you need data from a scan, you're stuck hand-jamming.

Bottom line, PDFs are for _presenting_ information, not _exchanging_ it. And while we're on the subject, Excel, Word, and other proprietary formats aren't much better. This is what APIs & datastores are for!

Of course, you don't always have a choice. That's why you need <strong><a href="{{ page.project }}" target="_blank" title="{{ page.pn }} on GitHub">{{ page.pn }}</a></strong> from the team at <strong><a href="{{ page.author }}" target="_blank" title="{{ page.an }} on GitHub">{{ page.an }}</a></strong>. Using Ruby to pipe data in & out of GraphicsMagick, Poppler, PDFtk, Tesseract, and LibreOffice, {{page.pn}} can extract text from and break apart multi-page PDFs & Office documents (with OCR fallback).

{{page.pn}} is packaged as a CLI and a Ruby library, putting _you_ in charge of your data.

<pre class="prettyprint lang-shell">
# CLI example - extract text from each page of a PDF with OCR fallback
docsplit text path/input.pdf --pages all  
</pre>

<pre class="prettyprint lang-ruby">
# API example - extract text from a MS Word doc without OCR
docs = Dir['path/input.doc']
Docsplit.extract_text(docs, :ocr => false, :output => 'output/')
</pre>

<pre class="prettyprint lang-ruby">
# Extract metadata (# of slides) from PowerPoint file & convert to PDF
Docsplit.extract_length('input.pptx')
# => 9
Docsplit.extract_pages('input.pptx')
</pre>

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>
