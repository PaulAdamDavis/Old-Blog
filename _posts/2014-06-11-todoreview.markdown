---
layout: post
title: TodoReview
date: '2014-06-11 19:32:30'
---

Back in [January](http://pad.gs/2014/01/29/sublimetodo/), I wrote about [SublimeTODO](https://github.com/robcowie/SublimeTODO), a package for Sublime Text that searches files in your project for a set of keywords in comments, and shows them in one nice, navigable list. The version I wrote about was for Sublime Text 2, but I now use Sublime Text 3. The plugin I wrote about didn't really work with ST2, to the author deprecated it and now recommends a newer updated version which _does_ work with ST3.

I thought f the original plugin author has admitted defeat and recommend another plugin, I should quickly write a post about the new plugin. Here goes!

---

You're a busy developer (probably), so here's a list of what you need to know:

* The plugin is on [GitHub](https://github.com/jonathandelgado/SublimeTodoReview)
* You can install via [Package Control](https://sublime.wbond.net/) – search for "TodoReview"
* Excluding folders has a new syntax – everything needs to be wrapped in stars `"*node_modules*"`
* The docs are very good.

**Keyboard Shortcuts?**

The plugin its self [has many](https://github.com/jonathandelgado/SublimeTodoReview/blob/master/Default%20(OSX).sublime-keymap), but I like having a command to bring up the list of todos.

Add this to: Preferences > Package Settings > TodoReview > Key Bindings - User
It means you can type `cmd+shift+g` and get to that all-important list.

{% highlight json %}
{ "keys": ["super+shift+g"], "command": "todo_review" }
{% endhighlight %}

Of course, you can modify it to be whatever you want, the key here is `"command": "todo_review"`.

Enjoy!