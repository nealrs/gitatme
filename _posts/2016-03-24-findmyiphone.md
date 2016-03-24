---
layout: post

title: "PHind my Phone"
date: 2016-03-24 10:00:00 EST
tags: php

project: "https://github.com/Neal/FindMyiPhone"
author: "https://github.com/Neal"
an: "Neal"
pn: "FindMyiPhone"

description: "FindMyiPhone is a PHP interface to Apple's Find My iPhone service."

issue: 131

gif: "http://gam.s3.amazonaws.com/img/i131.gif"
---

If you've ever left your iPhone in a cab, you know what a life saver iCloud and Find My iPhone are. You can instantly check up on all your iDevices and find out where they are or remote lock them.

But, what if you wanted to do it programmatically or outside of Apple's official app? You totally can! Download <strong><a href="{{page.author}}" title="{{page.an}} on GitHub" target="_blank">{{page.an}}'s</a></strong> (no relation) <strong><a href="{{page.project}}" title="{{page.pn}} on GitHub" target="_blank">{{page.pn}}</a></strong> library, and you can access all the features (message, locate, wipe, lock, alarm, etc.) in PHP.

Here's an example that sends my laptop a little love note:

<img src="{{page.gif}}" class="demo" alt="{{page.pn}} demo">

```php
<?php
require __dir__ . 'FindMyiPhone.php';

try {
  $FindMyiPhone = new FindMyiPhone('ICLOUD_ID', 'ICLOUD_PASS');

  // get the device id for first device found
  $device_id = $FindMyiPhone->devices[0]->id;

  echo 'Sending notification... ';
  echo ($FindMyiPhone->send_message($device_id, 'Hi Neal 👻', false, 'FindMyiPhone')->statusCo$
  echo PHP_EOL;

} catch (exception $e) {
    echo 'ERROR: ' . $e->getMessage() . PHP_EOL;
  }
?>
```

You can change the alert title, text, and more to create your own custom alerts and messages. But be careful, because once you're authenticated, {{page.pn}} won't hesitate to let you wipe or lock your phone.

<center><a href="{{ page.url }}#comments" class="btn btn-primary btn-comment" title="Discuss this issue of Git @ Me online">Comments :)</a></center>
