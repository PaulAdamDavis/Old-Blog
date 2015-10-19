---
layout: post
title: SublimeTODO
date: '2014-01-29 12:37:03'
---

I'm sure i've written about a Sublime Text package called [SublimeTODO](https://github.com/robcowie/SublimeTODO) before.

It's easy to install but getting to the list of todos isnt retibble easy. I created a keyboard shortcut of `cmd`+`shift`+`g`. Add this to your **user** key bindings, making sure it's valid json.

{% highlight json %}
[
    { "keys": ["super+shift+g"], "command": "todo" }
]
{% endhighlight %}

If you work on projects with a package system (NPM, Ruby gems, Composer etc), builds scripts or other stuff you didnt create, you don't want to search them for todos. Add this to your user settings. Note that you can easilly create new comment prefixes. I have `CRITICAL`, `MAYBE` and a few other things.

{% highlight json %}
"todo":
{
    "case_sensitive": true,
    "file_exclude_patterns":
    [
        "*.sql"
    ],
    "folder_exclude_patterns":
    [
        "node_modules",
        "build",
        "tmp",
        ".sass-cache"
    ],
    "patterns":
    {
        "BUG": "BUG[\\s]*?:+(?P<bug>.*)$",
        "CHANGED": "CHANGED[\\s]*?:+(?P<changed>\\S.*)$",
        "CRITICAL": "CRITICAL[\\s]*?:+(?P<critical>.*)$",
        "FIXME": "FIX ?ME[\\s]*?:+(?P<fixme>\\S.*)$",
        "FUCKTHISSHIT": "FUCKTHISSHIT[\\s]*?:+(?P<fuckthisshit>.*)$",
        "MAYBE": "MAYBE[\\s]*?:+(?P<maybe>.*)$",
        "NOTE": "NOTE[\\s]*?:+(?P<note>.*)$",
        "TODO": "TODO[\\s]*?:+(?P<todo>.*)$"
    }
},
{% endhighlight %}

I like inline todos.

---

**Update: 14:52pm, 29th Jan 2014**<br>
As Leny [pointed out](https://twitter.com/leny_be/status/428530997584756736), this plugin doesent work in Sublime Text 3, so he made [this plugin](https://github.com/leny/grunt-todo). I've not tested it.

---

**Update: 20:33pm, 11th June 2014**<br>
I wrote a [new article](http://pad.gs/2014/06/11/todoreview/) about a new plugin for Sublime Text 3.
