<script src='//cdn.firebase.com/js/client/1.0.15/firebase.js'></script>
<script src='//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
<script src="//cdn.firebase.com/js/simple-login/1.6.2/firebase-simple-login.js"></script>

<!-- Emoji & Markdown libs-->
<script src='//cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min.js'></script>
<script src="//cdn.jsdelivr.net/emojione/1.1.0/lib/js/emojione.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="//cdn.jsdelivr.net/emojione/1.1.0/assets/css/emojione.min.css" type="text/css" media="all" />

<script>
  //TODO: consider upgrading to something real like handlebar.js, but not handlebar since it conflicts with Jekyll's liquid templates
  // Simple JavaScript Templating
  // John Resig - http://ejohn.org/ - MIT Licensed
  (function () {
    var cache = {};

    this.tmpl = function tmpl(str, data) {
      // Figure out if we're getting a template, or if we need to
      // load the template - and be sure to cache the result.
      var fn = !/\W/.test(str) ?
          cache[str] = cache[str] ||
              tmpl(document.getElementById(str).innerHTML) :

        // Generate a reusable function that will serve as a template
        // generator (and which will be cached).
          new Function("obj",
                  "var p=[],print=function(){p.push.apply(p,arguments);};" +

                // Introduce the data as local variables using with(){}
                  "with(obj){p.push('" +

                // Convert the template into pure JavaScript
                  str
                      .replace(/[\r\t\n]/g, " ")
                      .split("<%").join("\t")
                      .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                      .replace(/\t=(.*?)%>/g, "',$1,'")
                      .split("\t").join("');")
                      .split("%>").join("p.push('")
                      .split("\r").join("\\'")
                  + "');}return p.join('');");

      // Provide some basic currying to the user
      return data ? fn(data) : fn;
    };
  })();
</script>
<script>
  $(document).ready(function () {
    // Load up useful information from site and page variables
    var firebase = "{{site.fbc-comments-firebase}}";
    var postId = "{{page.id || default}}";
    //var blogName = "{{site.name || default}}";
    // set emojione options
    emojione.imageType = 'svg';

    // set up preview/edit click handling

    // disable preview button if text area blank
    /*$('#fbc-comment-form-preview').addClass('hidden');
    $("#fbc-comment-message").on('keyup',function() {
      if($("#fbc-comment-message").val() != '') {
        $('#fbc-comment-form-preview').removeClass('hidden');
      } else {
          $('#fbc-comment-form-preview').addClass('hidden');
        }
    });*/

    $("#fbc-comment-form-preview").click(function() {
      //console.log("preview");
      $("#fbc-comment-form-preview").toggleClass("hidden");
      $("#fbc-comment-form-edit").toggleClass("hidden");

      $("#fbc-comment-message").toggleClass("hidden");

      $("#fbc-comment-preview").html( emojione.toImage(marked($("#fbc-comment-message").val())) );
      $("#fbc-comment-preview").toggleClass("hidden");

    });

    $("#fbc-comment-form-edit").click(function() {
      //console.log("edit");
      $("#fbc-comment-form-edit").toggleClass("hidden");
      $("#fbc-comment-form-preview").toggleClass("hidden");

      $("#fbc-comment-message").toggleClass("hidden");
      $("#fbc-comment-preview").toggleClass("hidden");
    });

    $("#fbc-comment-form-submit").click(function() {
      //console.log("submit");
      $("#fbc-comment-form-edit").addClass("hidden");
      $("#fbc-comment-form-preview").removeClass("hidden");

      $("#fbc-comment-message").removeClass("hidden");
      $("#fbc-comment-preview").addClass("hidden");
    });

    // hide comment button (because i mean, you're on a page where you CAN comment)
    $('.btn-comment').hide();

    // Sanitize the Firebase keys, since Jekyll allows more possible characters
    postId = sanitizeFirebaseKey(postId);

    //var fb = new Firebase(firebase + blogName);
    var fb = new Firebase(firebase);

    var fbPostComments = fb.child("posts/" + postId);
    var fbPostCommentCount = fb.child("comment-counts/" + postId);

    // notification queue (powered by zapier, sends me an SMS)
    var fbQueue = fb.child("queue/");

    var currentUser = null;

    // init Auth
    var auth = new FirebaseSimpleLogin(fb, function (error, user) {
      if (error) {
        // An error occurred while attempting login
        console.log(error);
      } else if (user) {
          // Expand the user object to include profile photo and url
          currentUser = {
            uid: user.uid,
            provider: user.provider,
            displayName: user.displayName
          };

        // Normalize the pictures and links across services
        switch (user.provider) {
          case "google":
            currentUser.picture = user.thirdPartyUserData.picture;
            currentUser.link = user.thirdPartyUserData.link;
            break;
          case "facebook":
            currentUser.picture = user.thirdPartyUserData.picture.data.url;
            currentUser.link = user.thirdPartyUserData.link;
            break;
          case "twitter":
            currentUser.picture = user.thirdPartyUserData.profile_image_url.replace(/_normal/gi, "");
            currentUser.link = "http://twitter.com/" + user.thirdPartyUserData.screen_name;
            break;
          case "github":
            currentUser.picture = user.thirdPartyUserData.avatar_url;
            currentUser.link = user.thirdPartyUserData.html_url;
            break;
          default:
            console.log("unknown user provider " + user.provider);
        }

        // User authenticated with Firebase
        // Store user data in Firebase so we can display it on the comments
        fb.child('users').child(currentUser.uid).set(currentUser);

        $("#fbc-login-buttons").hide();
        $("#fbc-comment-form").show();

      } else {
        // User is logged out
        currentUser = null;

        $("#fbc-login-buttons").show();
        $("#fbc-comment-form").hide();
      }
    });

    // Handle login
    $('#fbc-login-buttons span').click(function (event) {
      var provider = $(this).data("auth-provider");
      auth.login(provider, { rememberMe: true });
    });

    $('#fbc-logout').click(function (event) {
      auth.logout();
    });

    // Handle insertions
    $('#fbc-comment-form-submit').click(function (event) {
      // Disable the button to prevent re-submissions
      $('#fbc-comment-form-submit').prop('disabled', true);
      // Get the comment
      var comment = $("#fbc-comment-message").val();
      // Empty the text area to prevent re-submissions
      $('#fbc-comment-message').val('');
      // re-enable the submit button
      $('#fbc-comment-form-submit').prop('disabled', false);

      // add emoji & markdown parsing at this step
      //emojione.imageType = 'svg';
      var storecomment = emojione.toImage(marked(comment));

      fbPostComments.push({'uid': currentUser.uid, 'comment': storecomment, 'time': Firebase.ServerValue.TIMESTAMP
}, function (error) {
        if (error != null) {
          alert(error.message + " Stop screwing around!");
        } else {
          // Comment was posted. Increment the comment count
          fbPostCommentCount.transaction(function (current_value) {
            return (current_value || 0) + 1;
          });
        }
      });

      // add msg to queue for SMS notification
      fbQueue.push({'story': postId, 'url': document.URL,'time': Firebase.ServerValue.TIMESTAMP});
    });

    // Display existing and future comments
    fbPostComments.on('child_added', function (snapshot) {
      var message = snapshot.val();
      var messageComment = message.comment;
      var messageTime = new Date(message.time).toLocaleDateString();
      if (messageTime == "Invalid Date"){messageTime = "¯\\_(ツ)_/¯";}
      var messageOrder = message.time;

      fb.child("users/" + message.uid).once('value', function (userSnap) {
        var user = userSnap.val();

        // this is not working with an id reference to a template (possibly because it's 6 year old code), so give it the html instead
        var commentHtml = tmpl($("#fbc-comment-template").html(), {
          comment: messageComment,
          displayName: scrubComment(user.displayName),
          picture: scrubComment(user.picture),
          link: scrubComment(user.link),
          time: scrubComment(messageTime),
          order: messageOrder
        });

        $("#fbc-comments-list").append(commentHtml);

        // override default styling for last p tag in each comment block - don't want the default margin-bottom.
  $(".comment-text").find("p:last-of-type").addClass("comment-no-bottom-margin");

        // sort comments by timestamp - not sure why this is even neccesary. [http://stackoverflow.com/questions/21267120/jquery-sort-by-id-element]
        $("#fbc-comments-list div.clearfix.comment-block").sort(function (a, b) {
            return parseInt(a.id) > parseInt(b.id);
        }).each(function () {
            var elem = $(this);
            console.log(elem);
            elem.remove();
            $(elem).appendTo("#fbc-comments-list");
        });

      })
    });
    fbPostCommentCount.on('value', function (snapshot) {
      if (snapshot.val() == null){
        $(".fbc-comment-count").text("0");
      } else {
          $(".fbc-comment-count").text(snapshot.val());
        }
    });
  });

  // Scrub user generated input before displaying
  function scrubComment(value){
    // prevent XSS
    var escaped = $('<div/>').text(value).html();
    //Replace newlines with line breaks
    return escaped.replace(/[\n\r]/g, "<br />");
  }

  function sanitizeFirebaseKey(key) {
    return key.replace(/[\.\/\$\[\]\x7F\x00-\x1F]/g, "-");
  }

</script>
<script type="application/vnd.fbc-template" id="fbc-comment-template">
  {% include firebase-comment-template.html %}
</script>
{% include firebase-comment-form-template.html %}
