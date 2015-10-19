---
layout: post
title: Equal Height Boxes with Flexbox
date: '2014-07-12 12:33:04'
---

For the uninitiated, flexbox can be used pretty much everywhere these days. That is assuming you've stopped supporting IE9 and below. (#protip You should stop). [Can I Use](http://beta.caniuse.com/#search=flexbox) shows just how well supported it is.

When I was freelancing, one thing I'd need to do quite often is make equal height boxes, that fit into and conform to a grid nicely. I used to use JavaScript for this, but using JS for layout sucks more balls than [insert last weeks celebrity].

This is where flexbox comes in. Yes, you could use tables, but they suck too.

Flexbox is _made_ for situations like this. Take a look at the example below. The code is exactly what I use for the Projects page here, but I have omitted the many prefixed properties for brevity.

<p data-height="400" data-theme-id="0" data-slug-hash="aHbpy" data-default-tab="result" class='codepen'>See the example on <a href='http://codepen.io/PaulAdamDavis/pen/aHbpy/'>Codepen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>