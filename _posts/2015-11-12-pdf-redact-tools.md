---
layout: post

title: "Scrub, redact, and relax"
date: 2015-11-12 10:00:00 EST
tags: python

project: "https://github.com/firstlook/pdf-redact-tools"
author: "https://github.com/micahflee"

pn: "PDF Redact Tools"
an: "Micah Lee"

description: "PDF Redact Tools is a Python utility that enables you to securely redact and strip meta data from PDFs -- ideally before you publish them."

issue: 114

paper: "http://depot.som.yale.edu/icf/papers/fileuploads/2378/original/03-10.pdf"

img0: "http://gam.s3.amazonaws.com/img/i114a.png"
img1: "http://gam.s3.amazonaws.com/img/i114b.png"
---

I was originally going to write about a Python utility that scans PDFs for links to _other_ PDFs and downloads them. But when I tried it on one of my dad's papers, it gave me this:

```text
- Author = ss999
- CreationDate = D:20081030132020-04'00'
- Creator = PScript5.dll Version 5.2.2
- ModDate = D:20091214160134-05'00'
- Pages = 23
- Producer = Acrobat Distiller 6.0.1 (Windows)
- Title = Microsoft Word - Value-Oct3008.doc
```

While there aren't any PDF links in this one, there _is_ some personal metadata. The `Author` field brazenly exposes pop's Yale login id (I've obfuscated it here). Another paper revealed that he was still running Windows NT in 2009. 😮

You don't need special software for this. All you have to do is right click on a PDF in OSX and select _Get info_:

<img src="{{page.img0}}" class="demo">

And have you ever drawn a black box over some text&mdash;like an account number&mdash;in Preview in order to redact it? You probably think you're being super clever, but PDFs are just PostScript (which is essentially plaintext).

Bottomline: PDFs aren't very secure at all.

**But, you _can_ scrub &amp; redact PDFs**, (ideally before you share them). You just need to use <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, written by <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong> at FirstLook Media.

<img src="{{page.img1}}" class="demo">

It's actually a pretty low tech solution: {{page.pn}} uses ImageMagick to split a PDF into its individual pages, converts each one to a static PNG, and then recombines them into a PDF without any metadata. You can do it right from the command line: `pdf-redact-tools --sanitize filename.pdf`

Redacting is a little more involved, but basically, you split apart the PDF, redact individual images in an image editor, and finally recombine them into a new PDF.

For all the academics out there, I'd be interested to hear if JSTOR or Google scrub the PDFs they index, host, and sell. I'm betting they don't.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
