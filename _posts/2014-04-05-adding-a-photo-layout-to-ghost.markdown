---
layout: post
title: Adding a Photo Layout to Ghost
date: '2014-04-05 14:52:49'
---

I've always loved photography. It's rare that I take a *really* good photo though, but for when I do, I want to share it. I like Instagram and all that, but sometimes I want to share a photo that isn't square and locked at a tiny resolution of 612px. So, this weekend, I decided to add a photo layout to this blog.

The idea is basically to let images grow outside the bounds of the main wrapper element, which centres everything else. It's a common technique and layout.

**Note:** The styles below are directly lifted from this blog, so you *may* need to change some things to make them work for your blog.

## The Theory

Ghost has always has tags, so I use those. For a photo post, I add the tag of `Photos` or `Photo`, depending on how many images there are.

## The HTML

Inside the `post.hbs` file, make sure the wrapper still has the tags helper.

``` language-html
<article class="{{post_class}}">
```

That results in this.

``` language-html
<article class="post tag-photos">
```

I should add here that images are wrapped in `<p>` tags, which means slightly more verbose CSS.

## The CSS

*(I'm using [Scss](http://sass-lang.com/), compiled with [CodeKit](https://incident57.com/codekit/))*

``` language-css
// My generic image styles used globally throughout the site
.post-content img {
	max-width: 100%;
	display: block;
	margin-left: auto;
	margin-right: auto;
}

// The meat of this post
article.tag-photos,
article.tag-photo {
    .post-content {
        img {
        	// The `calc` means images touch the
            // edge of the browser on small screens
            @media (max-width: 700px) {
                max-width: calc(100% + 40px);
                margin-left: -20px;
            }
            @media (min-width: 800px) {
                max-width: 760px;
                margin-left: -30px;
            }
            @media (min-width: 900px) {
                max-width: 900px;
                margin-left: -100px;
            }
            @media (min-width: 1200px) {
                max-width: 1100px;
                margin-left: -200px;
            }
            @media (min-width: 1400px) {
                max-width: 1300px;
                margin-left: -300px;
            }
        }
    }
}
```

So what's going on here? Let's use the 1400px media wuery as an example.

When the screen is at least 1400px wide, make the image 1300px wide, then pull it left 300px.

Because the wrapper of this site is 700px, the image is an extra 600px wider than the wrapper, so to make it central, we pull it left. For smaller screens, the image is less wide, so we pull it left a smaller amount.

Here's a visual explanation, and an example!

![](/content/images/2014/Apr/DSC_0152.jpg)