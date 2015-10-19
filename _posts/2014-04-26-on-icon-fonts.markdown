---
layout: post
title: On Icon Fonts
date: '2014-04-26 12:53:51'
---

I really respect [Chris Coyier](https://twitter.com/chriscoyier), he's the very reason I am in this industry. His recent post [comparing icon fonts and SVG's](http://css-tricks.com/icon-fonts-vs-svg/) made me think about how I approach them, which in-turn led me to think of benefits of continuing to use then in the way I already do.

This is not an attack on Chris' article, more an addition. Another side to the coin. Before you continue though, I urge you to read Chris' article, as most of what comes below won't make sense. I didn't want to *copy* lots of the article.

His article concludes that, if you can, SVG's are better supported in modern browsers (IE 9+ & Android 3+) and I'm sure his research is solid. I want to explain why I'm sticking with icon fonts for every situation I need them.

## My Responses

**Icons are Vector**

> Browsers consider it text, so the icons are anti-aliased as such. Can lead to icons not being as sharp as you might expect.

True, but text is also vector ([sometimes](http://en.wikipedia.org/wiki/Computer_font#Outline_fonts)). Take a look at the example below. What looks sharper to you? I have compared this on my external display as well as a Retina MacBook Pro screen. On non-Retina, the left is sharper, where as on Retina, both are as sharp as each-other. The left is text, the HTML entity for the Apple logo, to be specific – `&#63743;`. (May not work on non-Apple devices)

<p data-height="280" data-theme-id="0" data-slug-hash="iJrdB" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/PaulAdamDavis/pen/iJrdB/'>iJrdB</a> by Paul Adam Davis (<a href='http://codepen.io/PaulAdamDavis'>@PaulAdamDavis</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

### CSS Control

Cannot argue here, SVG's are easier to control specific parts.

### Positioning

Also agree here, but with one exception. I usually always `position` font icons which gives you finite control, such as `top: 1px;`, so long as the `position` is `relative`, `absolute` or `fixed`, if you're mad.

### Weird Failures

> Inline SVG is right in the document. If the browser supports it, it displays it.

Why would anyone actually put SVG's right in the document? They're **huge**. Using SVG icons *should* be synonymous with sprites. But using sprites leaves you open to a lot of the same loading issues you get with icon fonts. Web is hard.

### Semantics & Accessability

Also true, but an icon typically has no real value. It should always be accompanied by some sort of descriptive text, whether beside it or hidden inside the element containing the icon.

Aside: In Ghost, we add `speak: none;` to icons (see [the spec](http://www.w3.org/TR/CSS2/aural.html#propdef-speak)), and they're almost always coupled with text. No icon? No real problem. It's rare that an icon isnt next to some text of some sort.

### Ease of Use

For the most part, Chris' points are true. Using a pre-made icon font is almost always far to heavy for anyones use.

In Ghost, we create our own icons and use [IcoMoon](http://icomoon.io/) to create our own small font. The ttf font for ghost.org is 13kb (which has more icons than the blogging platform itself), the [Font Awesome](http://fontawesome.io/) ttf is 81kb. It all makes a difference.

## Conclusion

There are 3 main ways of adding (resolution-independent) icons.
Here's a list of the pros & cons.

**Inline SVGs**

* Very heavy initial HTML payload
* Easier to style specific parts
* Tougher to swap one icon for another
* Only supported well in modern browsers, but fails well

**SVG Sprites**

* No where near as easy to use as image sprites
* Easier to use than inline SVGs
* Only supported well in modern browsers, but fails well
* Tough to style (akin to styling image sprites)

**Icon Fonts**

* Easy to add to pretty much any element
* Relatively small payload
* Painless to add/remove icons
* Best support of all the options

I'll be sticking to icon fonts, rather than inline or sprited SVGs.