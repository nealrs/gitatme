---
layout: makefile

title: "Makefile: My Favorite Aliases"
date: 2015-03-02 10:00:00
tags: makefile shell

---

Here are a few aliases from my `.zshrc`. I don't remember where they all came from, although I did come up with a few of them myself. Regardless of their source, they've all been very helpful to me.

###Web servers

With web projects, I rely on my <strong><a href="https://github.com/lepture/python-livereload" target="_blank" title="Download Python LiveReload">live reload</a></strong> server to automatically refresh pages whenever I save edits.

But opening a new text editor window, starting the server, and opening my browser requires 2 terminal windows & three shell commands. That's why I created an alias to do it:

```bash

alias atl="atom && open /Applications/Google\ Chrome.app 'http://localhost:35729/' && livereload"

```
If you just need a simple server:

```bash
alias sv='open http://localhost:8000 && python -m SimpleHTTPServer'
alias serve='python -m SimpleHTTPServer'
```

###Jekyll shortcuts

Git@Me is powered by Jekyll, a static site generator, and I'm a big fan. These aliases provide shortcuts for Jekyll's watch method and  <strong><a href="https://github.com/laurilehmijoki/s3_website" target="_blank" title="Download s3_website gem">deploying to s3</a></strong>.

```bash
alias jserve='jekyll serve --drafts --watch'
alias jp='s3_website push'
```

###IP addresses

The fastest way to get your local and external IP addresses:

```bash
alias localip='ifconfig en0 | grep inet | grep -v inet6'
alias myip='curl ip.appspot.com'
```

###Keystroke savers

While these ones may seem superfluous to you, your hands will thank you after a long day in the console.

```bash
alias rb='ruby' #shortened Ruby call
alias py='python' #shortened Python call

# This function creates & then navigate into a new directory.
mcd() {
   mkdir -p "$1" && cd "$1";
}
```

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Comment on this post">Comments?</a></center>
