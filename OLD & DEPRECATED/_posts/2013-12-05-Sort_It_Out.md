---
layout: post

title: "Sort It Out"
date: 2013-12-05 10:00:00
tags: javascript

project: "https://github.com/HubSpot/sortable"
secondary: "https://github.com/HubSpot/"
author: "http://adamschwartz.co/"
discuss: "https://github.com/nealrs/gitatme-comments/issues/14"
demo: "http://gam.s3.amazonaws.com/demo/i14/index.html"
description: "Sort tables client-side with Sortable"
issue: "14"
---

HTML tables really grind my gears. Considering the nightmare of nested elements and semantic markup, tables aren't much of an improvement over cuneiform tablets. And to do anything useful with the data&mdash;even just reordering it&mdash;you have to copy and paste it into a spreadsheet.

Unfortunately, browsers don't natively support table sorting or filtering. Instead, you have to go back to the data source and re-run queries with ORDER BY / WHERE clauses. AJAX can make it appear seamless, but you're still making unnecessary server requests. 

If you've already loaded the data client side, why not sort it on the client-side? <strong><a href="{{ page.project }}" target="_blank" title="Sortable on GitHub">Sortable</a></strong>, from <strong><a href="{{ page.author }}" target="_blank" title="Adam Schwartz">Adam Schwartz</a></strong> & <strong><a href="{{ page.secondary }}" target="_blank" title="HubSpot on GitHub">HubSpot</a></strong>, does just that &ndash; and it only requires 2.5 lines of markup! All you have to do is include the JavaScript library & theme CSS and add the appropriate theme class & data attribute to your table.

Here's a <strong><a href="{{ page.demo }}" target="_blank" title="Sortable.js Demo">live demo</a></strong> along with source:

<pre class="prettyprint lang-html">
&lt;html&gt;
&lt;head&gt;
&nbsp;&nbsp;&lt;!-- load library & css theme --&gt;
&nbsp;&nbsp;&lt;script src="sortable.min.js"&gt;&lt;/script&gt;
&nbsp;&nbsp;&lt;link rel="stylesheet" href="sortable-theme-light.css" /&gt;
&lt;/head&gt;
&lt;body&gt;
&nbsp;&nbsp;&lt;!-- assign data-sortable attribute --&gt;
&nbsp;&nbsp;&lt;table class="sortable-theme-light" data-sortable&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;thead&gt; 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;First&lt;/th&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Last&lt;/th&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- disable sorting for Email column --&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th data-sortable="false"&gt;Email&lt;/th&gt; 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;ID&lt;/th&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/thead&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tbody&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Kevin&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Lewis&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;kevin.lewis@foo.bar&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;3&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Sacha&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Blare&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;sblare@foo.bar&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;2&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- ad nauseum --&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tbody&gt;
&nbsp;&nbsp;&lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

Sortable comes with six pre-built css themes, can be initialized on-demand for dynamically generated tables, automatically recognizes alpha vs. numeric data, and works great on mobile. Now go and give your tables some 'zazz!

<p><strong>Join the <a class = "nodeco" href="{{ page.url }}#comments" title="Discuss this issue of Git @ Me online"><i class="icon-comments icon-large "></i> discussion</a></strong></p>