---
layout: post
title: Switching Ghost  From Ruby Sass to Libsass
date: '2014-09-04 19:44:00'
---

In the early days of Ghost, any CSS was written in Sass, which meant Ghost had a Ruby dependency. In [March](http://dev.ghost.org/no-more-ruby-dependency/) of this year, the Sass was moved to its own repository, which meant Ghost no longer had a Ruby dependency, but had 2 repositories instead. A couple weeks ago, we decided to take the plunge and adjust our Sass so Libsass could compile it. This is why. 

---

There were plenty of other reasons to switch to a new repo, besides the lower dependencies:

1. It was intended to make Ghost-UI a library available for general conception, like Bootstrap and Foundation.
2. As such, separate issues between Ghost and Ghost-UI
3. We wanted to share styles between Ghost and Ghost.org

This worked well for a while. Many people who contributed regularly knew what goes where and how we had split the two, but there were still a few who (rightly so) didn't quite get it or missed the memo.

Additionally, it made it much tougher to implement a feature that needed both HTML, JS and CSS. You'd need to make 2 pull requests - one for each repo - and discussion would happen in different places. Or, someone will do the Ember.js part and I'd do the CSS part, which is typically what happened. Pull requests needing minor changes were roadblocked on me.

Now there are plenty of reasons to move it back into Ghost:

1. [Libsass](https://github.com/sass/libsass) exists, which can be run in Node.js via [Node-sass](https://github.com/sass/node-sass) (which is a wrapper) and [grunt-sass](https://github.com/sindresorhus/grunt-sass), which is also much faster
2. We didn't do a great job at making Ghost-UI a reusable library - I personally think it doesn't lend itself well to other projects anyway
3. We had duplicated issues in both repos or single issues in the wrong repo
4. We realised sharing styles between Ghost and Ghost.org its a great idea - both achieve different goals.
5. People can work on CSS at the same time as their Ember.js stuff. Sounds primitive now I say it like that, doesn't it.

## How We Did It

The way we did this might not be conventional, but it works.

1. Remove any Ruby dependencies and Gems
2. Add [grunt-sass](https://github.com/sindresorhus/grunt-sass) (which bundles its own dependencies, including libsass) and adjust Grunt build tasks
3. With `grunt watch` running, save it, see where it fails and replace that Bourbon mixin with un-prefixed code or add the mixing to our own file
4. Do that for a couple hours and finally have a compiling code-base, via Node-sass!
5. Add [Autoprefixer](https://github.com/postcss/autoprefixer) via [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) and configure

Here's what you need for the Grunt tasks. It's simplified from what we use. I'm not going to explain how wire it up, I trust you'll know where to put these.

```language-javascript
// package.json
"grunt-autoprefixer": "1.0.1",
"grunt-sass": "~0.14.0"
```

```language-javascript
// Gruntfile.js
sass: {
    compress: {
        options: {
            style: 'compressed',
            sourceMap: true
        },
        files: {
            'ghost.min.css': 'screen.scss'
        }
    }
},
autoprefixer: {
    options: {
        map: true, // Use and update the sourcemap
        browsers: ["last 2 versions", "> 1%", "Explorer 10"]
    },
    single_file: {
        src: 'ghost.min.css',
        dest: 'ghost.min.css'
    }
}
```

Woop woop! We now have the same code-base (maybe even slightly smaller) with cleaner, prettier code.

## "replace"? "Bourbon"?

Yes. Bourbon had been been in Ghost from very early on. I guess it was added in hope we'd use it lots. But the truth is, we only used it for prefixing things, and for the occasional helper like `clearfix` and `triangle`.

What's the point of keeping it and having `@include`'s all over the place, for such a small benefit? We can bet better results with nicer code by using Autoprefixer.

## Benefits

[Hannah Wolfe](https://github.com/ErisDS) (Ghost's CTO) wrote a [good issue](https://github.com/TryGhost/Ghost/issues/3886) detailing some of the other issues we've had, so that's definitely worth a read if you're interested.

Aside form the other benefits I've mentioned above, the move back into Ghost means we do longer have to deal with Bower and release tags.

The compile time is reduced from about 10 seconds to an average of 3 seconds (at least on my machine - your machine may be faster). With a ~5-6 second saving, hundreds of times a day, it really adds up.

All the issues and commit history in Ghost-UI were also moved back into Ghost, which is some kind of magic that Hannah did. Mind: blown.

**"Was It Hard?"**<br>
Not really. A bit time consuming, but so worth it.

**"Would I Do It Again?"**<br>
Sure. Not that I need to, but it only took a couple hours.

**"Do you want cake?"**<br>
All of it. Can I eat it?