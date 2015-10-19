---
layout: post
title: Sass @content
date: '2014-04-08 08:03:59'
---

While digging through some code earlier today, I saw `@content` for the first time, but it arrived in Sass in [3.2.0](http://sass-lang.com/documentation/file.SASS_CHANGELOG.html#320_10_august_2012). They say you should learn something new every day, well I certainly did!

What it does, it makes your code cleaner, by enabling you to write less code. Let's use an icon font mixin as an example. Take the following mixing.

{% highlight scss %}
@mixin icon($character) {
    &:before {
        font-family: "Icons";
        content: '#{$character}';
        @content;
    }
}
{% endhighlight %}

To use it, you'd write something like. The `padding-left: 1rem;` (and anything else in the curly braces) is output in the mixin with thanks to `@content`. In this particular case, it's output inside the `:before` pseudo-selector.

{% highlight scss %}
.element {
	@include icon(\e123) {
		padding-left: 1rem;
	};
}
{% endhighlight %}

The old way to achieve the same end result was the below. Admittedly, it's only 1 line longer, but is cleaner and includes one less selector.

{% highlight scss %}
.element {
    @include icon(\e123);
    &:before {
        padding-left: 1rem;
    }
}
{% endhighlight %}

## Benefits?

Well, Sass is meant to make your life easier. If we stick with the icon font mixin example, surely it makes sense to group together styles related to the icon its self. Another point of Sass is to aid maintainability, so being able to move around where the `@content` is output is a nice bonus. Here's a list for people who like lists.

* Aids maintainability
* Code looks cleaner
* You write less selectors

## Good to know

* Media queries work inside it...
* ... other mixins too

Isn't Sass fucking awesome?
