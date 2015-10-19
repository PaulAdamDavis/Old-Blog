---
layout: post
title: Brazil Fourteen Dot Com
date: '2014-06-01 16:16:36'
---

Earlier this year, whilst visiting the good people at [Karoshi](http://teamkaroshi.com), they showed me a prototype of a 2014 World Cup calendar poster. It looked brilliant. A little later, they had finalised the design and packaging – you can see [more of that here](http://teamkaroshi.com/work/brazil-2014-world-cup/).

![Print poster](/content/images/2014/May/5922EDD5-37D4-42F8-BD44-8AEA43F1D206-config-WC-web-image_3.jpg)

They asked me if I'd be interested in making a [digital version](http://brazilfourteen.com/). Having worked with Karoshi on numerous occasions before, I knew it would be an interesting project. Given that this was a project for love, not money, it meant I could experiment a bit more, as paid-for time just wasn't a factor.

It was agreed early on to only support modern browsers, so I chose IE10 & up, and other modern browsers. Or more to the point, anything that supported CSS flexbox, without a polyfill.

![Mobile](/content/images/2014/May/1DAC9FA0-094F-46AC-93B5-99CA47BB4893-config-WC-web-image_9.jpg)

The list of requirements, technologies and processes were as follows:

* Modern browser support
* All content must easily be updatable wherever I am
* Must be very light-weight, so no CMS and flat-file generation
* Fully responsive
* Work as an iOS home screen web app
* Can shoose your team colours
* Ability to change time zone
* Meta data for Facebook & Twitter Cards.

The process to update content is quite simple now.

1. Log into FTP (desktop or mobile)
2. Edit text or scores in various `.yaml` files
3. Go to the build page which regenerates the updated site
4. Enjoy

The only thing that isn't generated on the server is Sass, which I do locally. Any visual changes I want to test locally anyway, so I don't really see this as an issue.

So, yeah, head over to **[brazilfourteen.com](http://brazilfourteen.com/)** and take a look. It works great as a home screen app too, if that's your thing.