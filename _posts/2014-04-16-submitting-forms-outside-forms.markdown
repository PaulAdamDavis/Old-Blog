---
layout: post
title: Submitting Forms Outside Forms
date: '2014-04-16 21:05:21'
---

There are rare occasions where you need to have a submit button outside the `<form>` element.

Let's say a page contains a few forms. One with settings, and another which sends a different kind of request to a totally different action, but the design dictates the submit button for the settings is somewhere which makes it damn-near impossible for it to be inside the `<form>` without some heavy *and* unreliable CSS.

For occasions like this, I like to have a fake submit button elsewhere on the page, which when clicked, submits the real submit button, via JavaScript. I have used this in [Kodery](http://kodery.com) before, and it works a charm.

Granted, it does require JavaScript, but when used in a web application that requires JavaScript for some crucial functions to work, this is not really an issue. If it is an issue, using a `<noscript>` tag or adding extra styles using `html.no-js` (like in a proper implementation of [Modernizr](http://modernizr.com/)), you can easily show the hidden submit button.

---

Below, is a barebones example of the markup.

```language-html
<!-- The settings form -->
<form action="/api/settings" method="post">
	<input name="someinput" />
    <button class="hidden" id="the-form-button">Submit</button>
</form>

<!-- The pesky form in the middle of the page -->
<form action="/api/Delete" method="post">
    <button>Delete Things</button>
</form>

<!-- And somewhere else on the page... -->
<a href="#" data-pseudo-click-target="the-form-button">Save Settings</a>
```

And this is the JavaScript (jQuery in this case).

```language-js
$("[data-pseudo-click-target]").on("click", function(e){
    e.preventDefault();
    var target = $(this).attr("data-pseudo-click-target");
    $("#" + target).click();
});
```

It may not be the *best* aproach for this kind of problem, but it is simple, easy to understand and is very flexible.

---

**Update:** 17-04-2014 12:09pm

[Scott Riley](https://twitter.com/scott_riley/) has an alternate, but similar technique, in [this gist](https://gist.github.com/anonymous/10974464).

The method shown in the gist uses `.submit()` which can be more suitable. Worth thinking about that.