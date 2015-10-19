---
layout: post
title: Css Wish List
---

It's great that we can have a stack of font families to use, but annoying that we can't (easilly) change the weight. What if I want Open Sans at 300, but Fira Sans at 500?

It's be great of the font weight was a stack too, so if Open Sans wasn;t avalable, but Fira Sans was, it knows to use 500 weight.

```
font-family: "Open Sans", "Fira Sans", Helvetica;
font-weight: 300, 500, normal;
```


---

```
.this:has(.this-element-inside) {
  // Stuff
}
```