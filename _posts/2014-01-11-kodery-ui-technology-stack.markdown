---
layout: post
title: Kodery UI Technology Stack
date: '2014-01-11 23:01:43'
---

I often get asked about the tools I use to build the user interface for the new Kodery. I thought I'd write it up and point people here in the future.

**Note: This is *not* the stack for the API.** The UI and API are 2 completely separate, at least in terms of technology.

---

### Markup & Styles

I used no framework for the design or markup, except for Bourbon which only gives me shortcuts, no styling.

Aside from the main `index.html` file which is needed to kick everything off, all views are Handlebars templates. The home page is a view, the navigation is a view, the category & snippet list is a view. It means the markup is kept simple and I can easily re-render a section with fresh data, pragmatically.

Styling is done with SCSS and [Bourbon](http://bourbon.io/). There's a few global defaults for things like text and form elements. It makes heavy usage of variables and custom mixins to make the code cleaner and easier to adjust. Rather than have a few fixed media queries, most visual changes happen when something starts to break. If that happens at 569px wide, then so be it.

### Vendor JS Files

* [jQuery](http://jquery.com/)
* [Modernizr](http://modernizr.com/)
* [Davis.js](http://davisjs.com/)
* [Handlebars.js](http://handlebarsjs.com/)
* [Codemirror](http://codemirror.net/)
* [Marked.js](https://github.com/chjj/marked)
* [Moment.js](http://momentjs.com/)
* [Tagsinput.js](http://xoxco.com/projects/code/tagsinput/)
* [Trip.js](http://eragonj.github.io/Trip.js/)
* [ZeroClipboard](https://github.com/zeroclipboard/zeroclipboard)

### Custom JS Files

* `plugins.js` has loads of small, simple plugins in such as polyfills for `string.contains()`, `string.replaceAll()` and `obj.lazybind()` which can be used for delayed hover interactions and such.
* `handlebars_helpers.js` has over 20 custom helpers for things like checking permissions against the logged in user, relative time (3 minutes ago, etc) and passing markdown, which is as simple as `{%raw%}{{markdown description}}{%endraw%}`.
* `app/local.js` has all the logic for setting & getting stuff from LocalStorage. I chose to write my own, as it usually always means it's better for the product.
* `app/support.js` has a few tests for browser compatibility. It's fairly sparce at the moment, but is there to be added to.
* `app/utils.js` is home to string/password generators and converters, like `get_url_parameter()` which lets me get URL paramaters, much like `$_GET['thing']` in PHP.
* `app/snippet.js` has all the logic for adding and removing fragments, and copying code to the users clipboard.
* `app/helpers.js` could probably be combined with `app/utils.js`. Is has functions to render Handlebars views and getting JSON from the API.
* `app/search.js` only has the logic to do real-time search of the data in LocalStorage. Simple.
* `app/do_page.js` has the logic for each page or part of a page, which can mean getting new data from the API, rendering a view, or anything else specific to the action.
* `app/store.js` is the middleware that sends data to the API, and runs a callback (if provided).
* `main.js` is *huge*. Currently 1136 lines long. Is handles all the routing which then initiates other stuff, controlled in the files above.

### Grunt

This is a crucial part of the build process. I won't go into great detail (that'll take hours) but as a brief overview.

* Combine JS files in a predefined order.
* Compile SCSS
* Insert the Handlebars views into the bottom of the `index.html` file.
* Go through the `index.html` and `.htaccess` file ([alpha](http://alpha.kodery.com) is on a Linux box) and replace variables with version number for cache busting, like `filename.0.1.2.ext`.

There's 2 build processes. One is for local development which keeps everything big and debugable, that builds into `build` which is what my local server uses as the document root. The other builds the production files, which are minified and have gziping enabled (via `.htaccess`). That goes into `dist`.

### So there we have it.

Nothing ground-breaking. It may not be the best way of doing it, i'm sure there's ways to automate more and reduce the code I write, but for now, and the 8 months i've been slowly working on it, I have a full understanding about how it all works. There's nothing happening in the back that I can't explain and improve upon.