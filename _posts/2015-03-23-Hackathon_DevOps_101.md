---
layout: makefile

title: "Hackathon DevOps 101"
date: 2015-03-23 13:00:00
tags: makefile

description: "Hackathons are wonderful places to experiment with new tech & APIs. But, with less than 48 hours, creating, debugging, and deploying your project can be tough. Fortunately, there are plenty of great tools out there and I’ve tried almost all of them. Get ready for a crash course in Hackathon DevOps!"
---

Hackathons are wonderful places to experiment with new tech & APIs. But, with less than 48 hours, creating, debugging, and _deploying_ your project can be tough. You need a reliable way to host and update your project&mdash;something you can rely on after the expo.

Fortunately, there are plenty of great tools out there and I’ve tried almost all of them. **Get ready for a crash course in Hackathon DevOps!**


### Static Sites

If you’re working on a JavaScript driven project where everything happens client-side, you can take advantage of static hosting. There are no deploy scripts, procfiles, server configurations, or backend code.

**[Amazon S3](http://aws.amazon.com/s3/)** can host your app’s assets (images, scripts, etc.) or an entire static website. It’s super cheap and [you can use your own domain name too](http://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html).

**[Firebase](https://www.firebase.com/)** is a NoSQL datastore that you can access and control entirely with JavaScript&mdash;no backend code necessary, (unlike MongoDB or MySQL). You can also [host static sites for free](https://www.firebase.com/docs/hosting/).

**[GitHub Pages](https://pages.github.com/)** is another solid choice for hosting static pages, plus it’s free and you can deploy using git. Create a _gh-pages_ branch in your repo, commit your assets, push it up, and your site is live! Like S3, you can use your own domain name too. Oh! and you can also use GitHub Pages to [run your Jekyll blog](http://jekyllbootstrap.com/).

There are lots of other static hosting options out there, but S3, Firebase, and GitHub Pages have been battle tested like crazy.


### Dynamic Apps & PaaS

Using PHP, Node, Python, Go, MySQL, MongoDB? Building an API? Doing heavy backend processing? Static hosting isn’t going to cut it. I recommend using a Platform as a Service provider. PaaS providers typically offer streamlined deployment, hosting, and scaling options. They are also very affordable.

**[Heroku](http://www.heroku.com/)** and **[OpenShift](http://openshift.com/)** are the gold standard PaaS for hackathons. They are easy to setup, let you deploy from the command line, free for your first 3 apps. There are build packs / cartridges for just about any language you might want to run and tons of API integrations. You can’t go wrong with either.

**[Azure](http://azure.microsoft.com/en-us/)**, Microsoft’s PaaS, is no slouch either. You can deploy pretty much anything on it: Windows to Linux, SQL Server to Oracle, C# to Java. I haven’t tried it myself yet, but [I’ve seen a number of projects using it](http://challengepost.com/software/built-with/azure).

**[Bluemix](http://bluemix.net/)** offers more than your average PaaS. If you want to build a smart app with [Watson’s cognitive services](https://console.ng.bluemix.net/solutions/cognitive) or [analyze a big data with Hadoop](https://console.ng.bluemix.net/solutions/bigdata), IBM Bluemix has your back. It’s a more specialized platform and hella powerful.

**[Meteor](http://meteor.com/)** is a server/client framework written in node.js. It integrates MongoDB for data storage and you can create mobile apps by pushing your code through Cordova/PhoneGap. So, why is it in the PaaS section? Because you can [deploy your app for free](http://docs.meteor.com/#/basic/quickstart) to [meteor.com](https://www.meteor.com/). Neat, right?

**[Digital Ocean](https://www.digitalocean.com/)** is more general cloud hosting platform. With DO you can quickly setup a virtual server and install whatever OS & components you need to get your app live. If you’ve got the chops, DO is an excellent choice and their support team is top notch.


###Local Testing & Demos

**[Ngrok](http://www.ngrok.com/)** creates temporary, public tunnels between your local machine and the Internet. It makes your _http://localhost:3000_ available to the world or everybody else in the room. It’s perfect for testing webhooks and hackathon demos.

**[Localtunnel](http://localtunnel.me)** is an alternative to Ngrok. It works very similarly, but it’s written in Node.js and lacks introspection tools.

**[Live Reload](http://livereload.com/)** comes in a few forms, but [this Python implementation](https://github.com/lepture/python-livereload) is my favorite. Fire it up and every time you edit & save a file locally, your browser will reload. This saves you a lot of button clicks and context switching. I use it a lot with front-end projects.


### Class dismissed

No matter how you deploy your projects, don’t let it trip you up. Your time is better spent hacking, learning, and having fun!

What are _your_ favorite DevOps tools?

**P.S.** Even if you don’t finish your project, there are _tons_ of people who want to know more about your work. Tell the story behind your code in your [ChallengePost Portfolio](http://challengepost.com/).

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Comment on this post">Comments</a></center>
