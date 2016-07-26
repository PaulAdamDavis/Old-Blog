---
layout: post
title: Next & Previous Post Links in the Same Taxonomy
date: '2016-07-26 11:25:00'
---

If you use Custom Post Types with custom taxonomies in WP, you've no doubt wanted to add Next & Previous buttons on the `single-cake.php` template that keep the same taxonomy term as the page they sit on.

As a loose example, let's use cake. `cake` is our CPT, and we have a custom taxonomy of `flavor`. We have a few terms there of `chocolate`, `lemon`, and `strawberry`.

We're looking at a chocolate cake, and we want a button at the bottom of the `single-cake.php` template that says **Next Chocolate Cake**[^1]. So we need a way to link to the next cake that's also a chocolate cake.

```php?start_inline=1
$prev_post = get_previous_post(true, false, 'flavor');
```

```php?start_inline=1
$next_post = get_next_post(true, false, 'flavor');
```

* `true` means we want the next/prev post to be of the same term ('flavor' in our case)
* `false` means we don't want to exclude any ID's here
* `flavor` is our taxonomy

In the past, I'd have some something with a `WP_Query` loop, but now I know this exusts, I don't need to!

There's more info on [`get_previous_post()`](https://developer.wordpress.org/reference/functions/get_previous_post/) and [`get_next_post()`](https://developer.wordpress.org/reference/functions/get_next_post/), so read the docs!

[^1]: You'll need to do something with [`get_the_terms()`](https://developer.wordpress.org/reference/functions/get_the_terms/) to get the current taxonomy term.
