---
layout: post
title: Nesting Media Queries
date: '2014-05-08 10:59:54'
---

Prompted by [Dan Davies](https://twitter.com/danjdavies/status/464340647462592512), I thought I'd share how I use nested media queries in Sass. What I do is nothing new, but we all learn by sharing and discussing things.

Below is how I use nested media queries in Sass. I try to keep nesting up to 3 levels deep at most, group properties by type such as layout (display, padding), text (colour, font, weight, size) and so on.

Then I order media queries by size, so the smallest query first then the largest last. Inside the query's block, I try to keep the order of properties the same, but as they're usually quite small, I'm not precious about it.

```language-scss
.elem {
    
    color: red;
    border: 1px solid blue;
    
    .thing {
        font-weight: 600;
    }
    
    // And any other properties...
    
    @media (min-width: 601px) and (max-width: 800px) {
        color: green;
    }
    
    @media (max-width: 801px) and (min-width: 1000px) {
        color: blue;
        border-color: yellow;
        .thing {
            font-weight: 400;
        }
    }
    
} // .elem
```

The only downside I can see to this is the end result when compiled. You could have many repeated `@media` query declarations. When someone makes a good Sass plugin to combine the `@media` declarations, that'd be awesome.

As ever, my good friend [Stuart Robson](https://twitter.com/StuRobson) has written a few times about this such thing. [This](http://www.alwaystwisted.com/post.php?s=2012-05-05-everyday-im-bubbling-with-media-queries-and-less) and [this](http://alwaystwisted.com/post.php?s=2013-12-29-how-i-write-my-sass) are both worth reading, even if one is about LESS.

**Update:** 12:07pm

The very same Stuart as above shared some links related to my 'many queries' concern above. [Take a look](https://twitter.com/StuRobson/status/464360701608599552).