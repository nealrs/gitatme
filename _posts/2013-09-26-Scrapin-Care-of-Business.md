---
layout: post

title: "Scrapin' Care of Business"
date: 2013-09-26 10:00:00
tags: python

download: "http://www.crummy.com/software/BeautifulSoup/#Download"
docs: "http://www.crummy.com/software/BeautifulSoup/bs4/doc/"
discuss: "https://github.com/nealrs/gitatme-comments/issues/4"
description: "BeautifulSoup is a Python library that parses HTML/XML. It has a number of useful methods to navigate and search through the DOM."
issue: "4"
---

Before the proliferation of APIs and 'open data', scraping & parsing HTML were state of the art technology for compiling data from the web. And although things have evolved quite a bit since then, it still comes in handy.

Let's say you're Head of Strategy at ToothCo, an online toothbrush retailer, and your boss just asked you to research Amazon's 'dental care' vertical. You'll need a list of products, 'list' pricing, actual pricing, Amazon product ids, and UPCs.

The good news is that Amazon's product pages expose all the information you need. The bad news is there are 22k toothbrush SKUs and (let's just pretend here) no open API. That is roof stoof.

This calls for some big iron: **<a href="http://www.crummy.com/software/BeautifulSoup" target="_blank">BeautifulSoup</a>** is a Python library that parses HTML/XML. It has a number of useful methods to navigate and search through the DOM.

View the source for some product pages, **<a href="http://www.amazon.com/Colgate-Extra-Medium-Toothbrush-4-Count/dp/B003U5Y2HO" target="_blank">(1)</a> <a href="http://www.amazon.com/Colgate-Classic-Soft-Full-Toothbrush/dp/B000053UOC" target="_blank">(2)</a> <a href="http://www.amazon.com/Vitality-Prowhite-Rechargeable-Electric-Toothbrush/dp/B003UKKH6O" target="_blank">(3)</a>**, and you'll see that the data is contained within uniquely defined elements.

```html
Product name
<span id="btAsinTitle">Colgate Extra Clean Full Head, Medium Toothbrush, 4-Count (Pack of 3)</span>

Original list price
<span id="listPriceValue" class="listprice">$13.59</span>

Amazon's price
<b class="priceLarge">$11.01</b>

ASIN
<li><b>ASIN: </b>B003U5Y2HO</li>

UPC
<li><b>UPC:</b> 035000551900</li>
```

Translation? We can parse that!

```python
from StringIO import StringIO
import pycurl
from bs4 import BeautifulSoup

url = ['http://www.amazon.com/Colgate-Extra-Medium-Toothbrush-4-Count/dp/B003U5Y2HO',
'http://www.amazon.com/Colgate-Classic-Soft-Full-Toothbrush/dp/B000053UOC',
'http://www.amazon.com/Vitality-Prowhite-Rechargeable-Electric-Toothbrush/dp/B003UKKH6O']

# Download html via cURL
for u in url:
  s = StringIO()
  c = pycurl.Curl()
  c.setopt(c.URL, u)
  c.setopt(c.WRITEFUNCTION, s.write)
  c.perform()
  c.close()
  h = s.getvalue()

  # Parse html with BeautifulSoup
  p = BeautifulSoup(h, "lxml")

  # Use element & class name to find matching elements and extract the target value string
  name = p.find("span", id = "btAsinTitle").string
  aprice = p.find("b", class_ = "priceLarge").string

  # List price isn't always available
  if (p.find("span", class_ = "listprice")):
    oprice = p.find("span", class_ = "listprice").string
  else:
	oprice = "N/A"

  # Find matching "b" elements and select their siblings, which are the target value strings
  asin = p.find("b", text = "ASIN: ").next_sibling.string
  upc = p.find("b", text = "UPC:").next_sibling.string

  # Output
  print "Product name:",name
  print "Original price:",oprice
  print "Amazon's price:",aprice
  print "ASIN:",asin
  print "UPC:",upc,"\n"

# Final output (could also insert into database or export as json)
# Product name: Colgate Extra Clean Full Head, Medium Toothbrush, 4-Count (Pack of 3)
# Original price: $13.59
# Amazon's price: $11.01
# ASIN: B003U5Y2HO
# UPC:  035000551900

# Product name: Colgate Colgate Full Head Toothbrush Classic Soft
# Original price: $4.84
# Amazon's price: $0.52
# ASIN: B000053UOC
# UPC:  035000555007

# Product name: Oral-B Vitality Prowhite Rechargeable Electric Toothbrush 1 Count
# Original price: N/A
# Amazon's price: $26.21
# ASIN: B003UKKH6O
# UPC:  069055838464 069055862360
```

20 minutes of coding can save you dozens of painful hours down the road, overcoming the limits of poor information design and closed/limited APIs. Add this to your toolbox - your wrists & sanity will thank you!

**<a class = "nodeco" href={{ page.download }} target="_blank"><i class="icon-cloud-download icon-large "></i> Install</a> the package, read the
  <a class = "nodeco" href={{ page.docs }} target="_blank"><i class="icon-book icon-large "></i> Docs</a>, and join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a>**
