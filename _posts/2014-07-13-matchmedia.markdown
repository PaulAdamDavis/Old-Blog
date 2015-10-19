---
layout: post
title: matchMedia
date: '2014-07-13 16:37:49'
---

For the longest time, I used `window.innerWidth()` to check the width of the browser, so I could show or hide something, and enable or disable something. That was until earlier this year when I realised JavaScript had a proper way to do this.

## Enter `matchMedia`.

[Can I Use](http://beta.caniuse.com/#feat=matchmedia) says support is in all modern browsers, except IE9 and below, which you should have already stopped supporting.

This chunk of code below, tests for `matchMedia` support, and adds listeners for changes. In this case, is listens for when the width of the window.

{% highlight javascript %}
if (matchMedia) {
    var mq_min_800 = window.matchMedia("(min-width: 800px)");
    mq_min_800.addListener(image_grid);
    image_grid(mq_min_800);

    var mq_min_600 = window.matchMedia("(min-width: 600px)");
    mq_min_600.addListener(image_sizes);
    image_sizes(mq_min_600);
}
{% endhighlight %}

Below, is the functions called when the match changes. It's fairly self explanatory I hope?

{% highlight javascript %}
function image_grid(mq) {
    if (mq.matches) {
        // Window is 800px or more
    } else {
        // Window is 799px or less
    }
}

function image_sizes(mq) {
    if (mq.matches) {
        // Window is 600px or more
    } else {
        // Window is 599px or less
    }
}
{% endhighlight %}

I believe the queries it can listen for are the same as CSS media queries, so there's plenty of uses here. But, I would use [Modernizr](http://modernizr.com/) to test for features and environments, but `matchMedia` for dimensions like I have above.