---
layout: post
title: The new codebymonkey.com
date: '2014-02-11 10:10:40'
---

Earlier today, I released a new version of my portfolio, [codebymonkey.com](http://codebymonkey.com/). It's a departure from my usual sense of design, and in this case, thinking. So, I thought I'd briefly go over it explaining myself.

As a brief overview, the new site is aimed at attracting shorter and smaller projects. It should also help be book myself up further in advanced.

Before I continue, I want to thank [Sam Soffes](http://soff.es/about) for the inspiration from his [Hire](http://hire.soff.es/) page, and the consulting agreement.

### Availability Badge

The whole point of show if I'm available any time soon, so this badge shows people, at a glance, if I have time in the next couple months. It fades out as you go down the page, as it's less important the more you scroll down.

If I'm not available any time soon, it turns red and has a different message.

On mobile, it's just a fat button at the top of the page, as it takes up the least room on smaller screens.

### Intro

This is just an overview of what I do, with a brief list of the work I want to do. It's well known that you should only advertise the work you did, if you want to do it again, so I have not included things like HTML emails or e-commerce.

#### Rates

Showing my rates high up on the page serves a few purposes. It filters away people who want Facebook for £100 and shows people i'm serious. Typically, good developers aren’t cheap.

Having the minimum booking time means that I know that whatever is booked in, is at least a days work. This way, I avoid trying to switch my brain around at some point in the day. This is a major killer for productivity and from past experience, a huge time waster for me.

#### Availability

It’s here that I state that there’s a time limit of 30 hours per week, or 6 hours a day. I do this here as it related to the weeks listed below. The email links contains a subject with the week days in it, which should help be quickly filter emails and reply more timely.

The block dates are automated, so a certain extent. I’ll detail that below.

#### Legal

I hate having to sign NDA’s, so I’ve chosen to get each one looked over by a lawyer each time. The fee helps pay them, and also for my time spent speaking to the lawyer and the client, printing it, archiving it, possibly adjust my workflow to suit its constraints etc etc. I would hope tat having a NDA fee would scare most away from bothering.

### Portfolio

No images?! Yes, that’s right.

I’m a developer, I code stuff. If I put screenshots of what I’ve built in my portfolio, i’m showcasing the work the designers did, which is counterproductive. I want to show the end product which I created, not the designers work, even if it is pretty as hell.

### More About Me

I just lifted this from my old website. It’s just an overview about who I am and what I strive for. It adds a personal touch, as I prefer to be friendly with my clients, not all dry and impersonal.

## Automation

I wanted to make this site very easy to maintain. It has no CMS, but a PHP file (yes, PHP) that has all the data in it, such as date blocks and portfolio items.

The portfolio stuff is typical, just an array, but the date stuff is a little more interesting.

{% highlight php %}
$dates = array(
  array(
    'start_stamp' => strtotime('10-02-2014'),
    'end_stamp' => strtotime('14-02-2014'),
    'available' => false
  ),
  array(
    'start_stamp' => strtotime('17-02-2014'),
    'end_stamp' => strtotime('21-02-2014'),
    'available' => false
  )
);
{% endhighlight %}

Earlier on in the file, I set the timezone to `Europe/London`, so all I need to do to add date blocks is the date, in the proper `dd-mm-yyyy` format.

This is what I use to work out if I am available, and when, just based on the dates I have in the `$dates` array.

{% highlight php %}
// First month info
$first_month_available = search($dates, 'available', true);
$first_month_available = $first_month_available[0];
$first_day = date('j', $first_month_available['start_stamp']);
$first_month = date('F', $first_month_available['start_stamp']);
$first_month_num = date('n', $first_month_available['start_stamp']);
$first_year = date('Y', $first_month_available['start_stamp']);
$first_days_in_month = cal_days_in_month(CAL_GREGORIAN, $first_month_num, $first_year);
$early_or_late = (($first_day / $first_days_in_month) > 0.5) ? 'late' : 'early';

// Am I available?
$available = ($first_month_available) ? true : false;
{% endhighlight %}

I also automate various costs, so I have a few variables which are just echoed throughout the site.

{% highlight php %}
$price_per_hour = 50;
$minimumn_block_hours = 6;
$minimumn_block_price = ($price_per_hour * $minimumn_block_hours);
$hours_per_week = 30;
$nda_fee = 600;
{% endhighlight %}

---

It's nothing amazing, nothing new, but it's easy for me to change and serves its purpose well. To the future!