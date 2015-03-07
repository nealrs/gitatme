---
layout: makefile

title: "Makefile: Hackathon Table Numbers"
date: 2015-03-07 10:00:00
tags: makefile javascript

sheetsee: "https://github.com/jlord/sheetsee.js"
repo: "https://github.com/nealrs/hackathon_tables"
demo: "http://nealrs.github.io/hackathon_tables/?id=1kaNq96j0S76A2P_dk82VekiruiWEQXTu5hT0POPywe4&name=PennApps%20W15"
template: "https://docs.google.com/spreadsheets/d/1QlRs7V6QhbfsMTiMWEgD5lg8UpCt7Cq8od5FlRI8p8o/edit?usp=sharing"
---

At ChallengePost, my life is punctuated by hackathons. For 48 hours, it's chaos. But unlike the hackers, I'm not concerned about meeting the submission deadline or nailing my demo at the expo. I'm worried about what happens in-between.


### Intro to madness

I cut my expo teeth at <strong><a href="http://pennappsx.challengepost.com/" target="_blank" title="PennApps X">PennApps X</a></strong>. After a sleepless, caffeine-fueled fugue, 1,200 hackers rushed to submit 237 projects before the 9:30am deadline. Afterwards, they hustled across campus to demo at an expo which was supposed to start at 10:30. At mega-hackathons like PennApps, expos can take up an entire gymnasium.

That left me and the organizers about an hour to assign and distribute table numbers. Hackers couldn't setup with them. Judges couldn't start their rounds until the hackers were situated. And sponsors needed to know which projects used their tech & APIs. It wasn't pretty.

<center><img src="https://pbs.twimg.com/media/BxgE64eCQAA_dr2.jpg:large" class="demo" alt="PennApps X Expo"></center>

### Swing and a miss

A few months later at <strong><a href="http://pennapps2015w.challengepost.com" title="PennApps Winter 2015" target="_blank">PennApps XI</a></strong> and <strong><a href="http://mhacksv.challengepost.com" title="MHacks V" target="_blank">MHacks V</a></strong>, <strong><a href="http://challengepost.com/richardm3" title="Richard Murby on ChallengePost" target="_blank">Richard Murby</a></strong> and I tried to streamline the process with shared Google Sheets. We exported submission data from ChallengePost, assigned table numbers, created filterable tabs for each sponsor, and sent out the links via email.

It was a solid plan, but there was just one teeny tiny problem: Google Sheets can't handle 1,000+ concurrent connections.

### Getting it right

After my mega fail at PennApps, I resolved to find a solution. One that could scale for this summer's <strong><a href="http://seoul.globalhackathon.io/" title="Seoul Global Hackathon" target="_blank">2,000 person Global Hackathon in Seoul</a></strong>. And guess what? I think I've got something.

Google Sheets is still the best way to manipulate and share tabular data with lots of people at once. And I think that the concurrent connection issue only affects sheets with filters and lots of formulas.

So, what if we treated Google Sheets as a simple datastore? Instead of running individual queries, we could load all the data locally and use client-side JavaScript to selectively show &amp; hide data. That might alleviate the concurrent connection issue, right?

I found the solution while digging through GitHub one morning. According to author Jessica Lord, "<strong><a href="{{page.sheetsee}}" title="Sheetsee.js on GitHub" target="_blank">Sheetsee.js</a></strong> is a client-side library for connecting Google Spreadsheets to a website and visualizing the information in tables, maps and charts."

After looking the basic <strong><a href="http://jlord.us/sheetsee.js/demos/demo-table.html" target="_blank" title="Sheetsee.js Table Demo">table demo</a></strong>, I knew I could adapt it for hackathons.

**Here's how it works:**

1. Create a copy of this <strong><a href="{{page.template}}" target="_blank" title="Hackathon table template">Google Sheet</a></strong> and export your hackathon's submission data from ChallengePost.

2. Copy the `Submission Title` (A) and `Sponsor Prizes` (G) columns from the export into `projectName` (B) and `sponsorPrizes` (&#8203;C) in the Google Sheet.

3. If you have less than 500 projects, delete the extra rows. If you have more, copy down the formula in `tableNum` (A) to assign extra table numbers. And if you need to reorder / reassign table numbers, (e.g. drones must be at tables 70&ndash;100), you're in control.

4. Select `Publish sheet to web` from the `File` menu and copy the sheet URL. It contains a sheet id which looks something like: `1kaNq96j0S76A2P_dk82Vek`.

5. Replace the `id` and `name` parameters in this URL with the id from step 4 and the URL-encoded name of your hackathon: <strong><a href="http://nealrs.github.io/hackathon_tables/?id=1kaNq96j0S76A2P_dk82VekiruiWEQXTu5hT0POPywe4&name=PennApps%20W15" target="_blank" title="Hackathon Tables Demo for PennApps Winter 15">nealrs.github.io/&#8203;hackathon_tables/&#8203;?id=XYZ123&name=PennApps%20W15</a></strong>

6. Shorten the URL and share it via email, Twitter, Snapchat, or whatever.

That's it. You're done in less than 5 minutes. Here's what it looks like:

<center><a href="http://nealrs.github.io/hackathon_tables/?id=1kaNq96j0S76A2P_dk82VekiruiWEQXTu5hT0POPywe4&name=PennApps%20W15" target="_blank" title="Hackathon Tables Demo for PennApps Winter 15"><img src="http://challengepost-assets.s3.amazonaws.com/emails/hackathon-manager/tables.gif" alt="Hackathon Table Demo" class="demo"></a></center>

The app has a search filter and downloads all of the data locally. Hackers can look for their project by name to find their table and sponsors can identify  projects using their tech. Since it's a static page hosted on GitHub, there's nothing to deploy either.

It looks good too, thanks to <strong><a href="http://challengepost.com/holly12" target="_blank" title="Holly Tiwari on ChallengePost">Holly Tiwari</a></strong>. She added the tiger striping, fixed header, and mobile styles.

The app works well, but I haven't battle tested it yet. I'm hoping that you can help me out with that. <strong><a href="{{page.repo}}" target="_blank" title="Hackathon Tables repo on GitHub">The repo is open source</a></strong> and I'd love to get your feedback on it. Even better &mdash; a pull request!

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Comment on this post">Comments?</a></center>
