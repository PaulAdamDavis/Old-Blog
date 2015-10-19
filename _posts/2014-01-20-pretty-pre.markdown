---
layout: post
title: Pretty Pre
date: '2014-01-20 14:53:56'
---

If you work with PHP, chances are you work with arrays and boolean data. I'm sure we've all used `print_r()` to show the data on the page to aid debugging and themeing, but i'm also sure we've all accidentally left something in when the site went live.

This is a function I add into all my PHP projects that prints arrays and boolean values in a big yellow box that;s hard to miss. It's limited to 300px in height, but that max can be turned off by making the second attribute false.

The advantage to abstracting this is that you can simply comment out the echoed data and prevent anything going onto the page. If your framework has the concept of environments, you could also build it in so production never echoes this data.

```language-php
// $var is the data
// false turns off the max height
pre($posts_array, false);
```

It's simple, and it works.

```language-php
function pre($var, $maxheight = true) {
    $maxheightcss = ($maxheight) ? 'max-height: 300px;' : '';
    echo '<pre style="background: #fcffb1; text-align: left; outline: 4px solid rgb('. rand(0, 250) .','. rand(0, 250) .','. rand(0, 250) .'); width: 100%; overflow: auto; '. $maxheightcss .'">';
        if ($var) :
            print_r($var);
        else :
            if (is_bool($var)) :
                var_dump($var);
            else :
                echo "\n\n\t--- <b>No data received by pre() function</b> ---\n\n";
            endif;
        endif;
    echo '</pre>';
}
```