---
layout: post
title: Modern CSS for Modern Applications
date: '2014-10-12 21:38:01'
---

Many web applications are built to support as many browsers as possible.
Ghost is not like that.

We rely on CSS features like flexbox, transforms and animations as core parts of the codebase - not as progressive enhancement.

In this talk, I will explain in great detail why we do this, the pitfalls, the benefits and how.

---

**Why?**<br>
One of side-affects of build a brilliant publishing platform built on Node.js which people want to use, is that it's helping push the Node hosting world forward by creating demand. 

There is little point using cutting edge technology on the back end, and using archaic technology on the front-end. So the CSS and in-browser JavaScript we write uses the most modern practices and tools we can get away with. 

**Benefits**<br>
Not supporting older browsers means not needing to write parts of out code several times to make things work properly in different places. Our code is smaller, leaner and easier to grasp for new contributors. It's a healthy code-base that is a joy to work on.

**Pitfalls**<br>
The newer a technology is, the less battle-tested it is. The only way tools on the web can get better is by using them. We ship often, so we get many chances to experiment with new tools, and fix things when a bug is inevitably found in a new technology.

**How**<br>
At the core is Sass in structured files & folders, compiled with Libsass via Node-Sass. We have no Sass library dependencies. We write lean, unprefixed code that gets made browser-friendly by autoprefixer.

<!--

## Talking points

Building a new web app has the advantage of no legacy.
If the browser support if carefully considered, legacy will never be an issue

* No polyfills
* Rare, but sometimes feature detection

Tools:

* Autoprexier

CSS Stuff:

* Flexbox
* Gradients
* Transitons
* Animations
* Transforms

-->