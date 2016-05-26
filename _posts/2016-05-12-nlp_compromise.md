---
layout: post

title: "Process this language"
date: 2016-05-12 10:00:00 EST
tags: javascript node

project: "https://github.com/nlp-compromise/nlp_compromise"
author: "https://github.com/nlp-compromise"
an: "NLP Compromise"
pn: "NLP Compromise"

description: "NLP Compromise is a Natural Language Processing library written in JavaScript."

issue: 137
---

Billing itself as "a cool way to use natural language in JavaScript," <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> is a simple interface for NLP that you can use in the browser or server side.

Where would you use NLP in JavaScript? Maybe you're writing a bot in node and you want it to have a great grasp of the English language. Or correcting poorly inputted text. Or manipulating and normalizing prose. Once you start experimenting, you'll find tons of uses.

{{page.pn}} can pluralize nouns:

```javascript
nlp.noun("goose").pluralize();
// "geese"
```

Conjugate verbs and change tense:

```javascript
nlp.verb("run").conjugate();
//{
//  gerund: 'running',
//  past: 'ran',
//  infinitive: 'run',
//  present: 'runs',
//  actor: 'runner',
//  future: 'will run',
//  perfect: 'have ran',
//  pluperfect: 'had ran',
//  future_perfect: 'will have ran'
//}

nlp.text("Neal sits at home").to_past()[0].text();
// Neal sat at home
```

Identify acronyms:

```javascript
nlp.term('CsU').is_acronym();
// false
nlp.term('AOa').is_acronym();
// false
nlp.term('FBI').is_acronym();
// true
```

Negate phrases:

```javascript
nlp.statement('Neal is going to win').negate().text();
// Neal isn't going to win
```

{{page.pn}} also has plugin support and a bunch more API methods. Install it and get to hacking!!

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
