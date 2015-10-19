---
layout: post
title: Ghost themes for WP devs
---

In my previous life as a freelancer, I spent all my time making WordPress themes for my clients. I think that gives me sufficient clout to explain the differences between the two, at least in terms of themes, and what is & isn't possible.

## Architecture

The way WordPress themes (typically) work is by including the header & footer (and other partials) into the main template. Take `index.php` for example. You have `<?php get_header(); ?>` at the top, your stuff in-between, then `<?php get_footer(); ?>` at the end.

In Ghost, everything is (typically) included into the `default.hbs` view. That includes the header & footer, then the individual page templates are included into that (if you want) via `{{!< default}}`.

So what is `{{!< default}}`? It's kinda like saying "Load me into the `default.hbs` file". This is quite flexible, in that you can use it to load into other files. So you could have `page-about.hbs` load into `thisothertemplate.hbs` which in-turn loads into `default.hbs`. It's quite flexible.

The content of a template that gets included using `{{!< default}}` gets output using `{{{body}}}` -- notice the 3 staches.

## Similarities



<!--
## Differences

## Handlebars & Helpers



Lack of functions (which is nice)
How to handle comments (and why decentralised comments are better)
Pages & adding to the nav
-->