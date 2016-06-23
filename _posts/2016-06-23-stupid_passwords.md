---
layout: post

title: "Your password sucks"
date: 2016-06-23 10:00:00 EST
tags: javascript node

project: "https://github.com/kn9ts/stupid-passwords"
author: "https://github.com/kn9ts"
pn: "Stupid Passwords"
an: "Eugene Mutai"

description: "Stupid Passwords checks input against the 10,000 worst passwords."

issue: 143

---

Passwords are the worst and you're probably terrible at them. #Sorrynotsorry

No really. Due to a toxic brew of poorly salted passwords, frequent security breaches, credential reuse, and boneheaded length / character rules (looking at you banks), web security sucks.

Combined with brute force and your email address, black hats can iterate over thousands of common passwords to break into your accounts. _No bueno_ 💀

Of course, there's two factor authentication (you're using Authy right?) and password managers (LastPass, OnePass, Keypass - I don't care which, just use one) &mdash; but passwords are always the weakest link.

Don't despair though, there's some good news in all this: with a database of the 10,000 most commonly used (and thus WORST) passwords, [{{page.pn}}]({{page.project}} "{{page.pn}} on GitHub")
lets you test to see if your passwords are objectively awful:

```javascript

const stupidPasswords = require('stupid-passwords');

const x = stupidPasswords.isStupid('hello');
// true -> bad password
// interestingly, 'god' isn't on the list...

const y = stupidPasswords.isStupid('1am$up3rc00l');
// false -> not a -terrible- password, but could be better

const z = stupidPasswords.rateOfUsage('hello')
// {password: 'hello', frequency: 1644 }
// i mean, come on

```

Much like forest fires, only _you_ can prevent the crack-ening of your digital identity. Now go test your passwords and turn on two-factor!
