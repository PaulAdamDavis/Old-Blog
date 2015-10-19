---
layout: post
title: Vertical Alignment
date: '2014-03-29 11:58:13'
---

Many people have written about vertical alignment in CSS before. I'm not going to present some brand new technology to help with it, but explain the pros and cons to a few techniques, so hopefully you'll find one that's suitable for whatever you're working in.

_**Note**: There are other ways to vertically align in CSS. A lot of others don't degrade gracefully when the vertically centred content is taller than its container._

## Flexbox

We've all heard of flexbox, but I've always struggled to think of decent use-cases. That was partially down to the browsers I'd need to support, but mostly because the stuff I'd need to build just didn't need it. Recently, I started using it for various things now that the browser support at Ghost is IE10 and up (which is epic!). Having native support for flexbox in our target browsers is brilliant, and with the [Flexie](https://github.com/doctyper/flexie) polyfill, we can also support IE9 and down, which i'm sure some people are thankful for. With that out of the way, let's look at vertical alignment with flexbox.

The downside to writing flexbox is that it has [3 specs](http://css-tricks.com/old-flexbox-and-new-flexbox/) with different syntaxes, which makes your code a little bloated. If you use Sass (which you should be), this [set of mixns](https://github.com/thoughtbot/bourbon/blob/new-flex-box/app/assets/stylesheets/css3/_flex-box.scss) makes life easier, which uses the 2009 and 2012 specs.

Let's say we want to vertically align some text in a header. Here's a solution in the form of a CodePen.

<p data-height="268" data-theme-id="0" data-slug-hash="FgzxK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/PaulAdamDavis/pen/FgzxK/'>FgzxK</a> by Paul Adam Davis (<a href='http://codepen.io/PaulAdamDavis'>@PaulAdamDavis</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

## CSS tables

I used to use CSS tables _a lot_, but the extra markup got a little annoying, and the flexibility of flexbox was all too alluring. That said, CSS tables work just about everywhere. The only gotcha is Firefox doesn't let you apply `position` so any table element, which can be a pain.

Here's the same example as above, but using CSS tables instead.

<p data-height="268" data-theme-id="0" data-slug-hash="Bibvs" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/PaulAdamDavis/pen/Bibvs/'>Bibvs</a> by Paul Adam Davis (<a href='http://codepen.io/PaulAdamDavis'>@PaulAdamDavis</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

## Padding

Using padding to vertically centre is best kept to form elements, and anywhere else where you can't add child element, including `content`. I'm sure we've all seen issues where using `line-height: 30px;` on an `<input>` leads to the blinking cursor filling the height of the input, which looks awful. The cursor also tends to only show the top half when you actually type too. It's also inconstant across browsers, so padding is your friend here.

In this code pen, I have an inout next to a button. The top set is using `line-height` for anything height related and the bottom uses padding.

<p data-height="210" data-theme-id="0" data-slug-hash="uvjdC" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/PaulAdamDavis/pen/uvjdC/'>uvjdC</a> by Paul Adam Davis (<a href='http://codepen.io/PaulAdamDavis'>@PaulAdamDavis</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

## In closing...

Open each pen in a new tab and play around resizing the browser. Hopefully you see how useful the top two techniques are for responsive sites that don't need special treatment on smaller screens, which is kind of the whole point.