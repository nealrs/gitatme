---
layout: post

title: "JSON marginalia"
date: 2015-08-27 10:00:00
tags: python

project: "https://github.com/vaidik/commentjson"
author: "https://github.com/vaidik"

js: "https://github.com/sindresorhus/strip-json-comments"

pn: "Comment JSON"
an: "Vaidik Kapoor"

description: "Comment JSON is a Python library that adds support for comments in JSON."
issue: 103

---

_Next week is Git@Me's second anniversary. If you're in NYC, join me at Brass Monkey @ 6:30pm for a drink. I'll be the Indian guy with glasses._

I really dig JSON. It's a great format for storing unstructured data, it's easy to maintain, nestable, and supported pretty much everywhere. Plus it plays super well with NoSQL datastores like Firebase and MongoDB.

There's just one problem: JSON doesn't support comments. So, whether you're dealing with simple data structures or objects nested 15 levels deep, there's no way to annotate them. 😩

 A clever workaround is to add comments in anyway, stripping them out at runtime. And that's exactly what <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}</a></strong>'s Python library, <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong>, does for you.

Annotate your JSON `// however you want`:

```python
import commentjson

data = """{
// document your data models
// or you will screw something up later.

  "gameData" : {
    "97": {
      "prompt" : {
        "delay" : 40, // delay overrides time if present
        "time" : null,
        "msg" : "lorem",
        "sender" : "1" // sender id must exist in sender table
      },
      // triggers determine subsequent action
        "triggers" : {
          "yes" : "97",
          "no" : "113"
        }
      }
  }
}"""

cleaned = commentjson.loads(data)
```

Once you run it through {{page.pn}}, it'll be usable and comment free:

```json
{
  "gameData" : {
    "97": {
      "prompt" : {
        "delay" : 40,
        "time" : null,
        "msg" : "lorem",
        "sender" : "1"
      },
      "triggers" : {
        "yes" : "97",
        "no" : "113"
      }
    }
  }
}
```

For multi-line comments, `/* yo what up? */`, get Sindre Sorhus' <strong><a href="{{page.js}}" title="strip-json-comments on GitHub" target="_blank">JavaScript implementation</a></strong>.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
