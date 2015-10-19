---
layout: post
title: DRY Colour Classes in Sass
date: '2014-05-23 22:00:08'
---

This week, I started re-working [Ghost-UI](http://github.com/TryGhost/Ghost-UI) – the user-interface side of Ghost. Of course, it's open source, so please feel free to contribute in any way you can. I intend to make a load of [issues](https://github.com/TryGhost/Ghost-UI/issues) on Github in the next few days so everyone is on the same page and can offer PR's where desired.

To start off, I have restructured the files and folders, with the hope that the codebase is less daunting for people to get involved in. I will blog about that at some point soon.

The next step was a `variables.scss` file, in which is a set of colour variables, used throughout the project. Before, there were no classes available to simply set the colour of an elements text or background. I know these classes are useful – especially when Ghost Apps are ready to go – so I've added some to the project.

But rather than write out two classes for each colour (for which there are 11, not the 4 shown below), I wanted to make the code as [DRY](http://en.wikipedia.org/wiki/Code_reuse) as I could, which meant some form of loop.

## Prep

Below is how I've achieved this in Sass. First, we have the colour variables.

{% highlight scss %}
// variables.scss
$darkgrey: #242628;
$grey: #35393b;
$midgrey: #7d878a;
$lightgrey: #e2edf2;
{% endhighlight %}

Second, we have the list of colours, which is comprised of two parts. The first attribute is the string we want to use as a selector, the second attribute is the corresponding colour variable which we previously declared.

{% highlight scss %}
// variables.scss
$list-colours:
    ('darkgrey' $darkgrey)
    ('grey' $grey)
    ('midgrey' $midgrey)
    ('lightgrey' $lightgrey);
{% endhighlight %}

## In Use

In another file where a lot of other base styles and classes are defined, we have this. It loops over the list of colours we declared earlier and creates 2 classes for each.

{% highlight scss %}
// base.scss
@each $colour in $list-colours {
    .#{nth($colour, 1)}-bg {
        background: nth($colour, 2);
    }
    .#{nth($colour, 1)} {
        color: nth($colour, 2);
    }
}
{% endhighlight %}

## Result

This is the compiled CSS. See why I wanted to make this DRYer when writing it?

{% highlight css %}
.darkgrey-bg {
    background: #242628;
}

.darkgrey {
    color: #242628;
}

.grey-bg {
    background: #35393b;
}

.grey {
    color: #35393b;
}

.midgrey-bg {
    background: #7d878a;
}

.midgrey {
    color: #7d878a;
}

.lightgrey-bg {
    background: #e2edf2;
}

.lightgrey {
    color: #e2edf2;
}
{% endhighlight %}

## Conslusion

This approach means than when adding new colours to the list, they automatically get two classes generated for them. And if you don't want a class for this colour, leave it out of `$list-colours`. Simple.