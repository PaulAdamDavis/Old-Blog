---
layout: post
title: Event Date Sorting Columns for WordPress CPTs
date: '2016-07-20 00:01:00'
---

On a recent client project, one of the requirements was adding a couple admin columns for a custom pst type type to sort things by start date and end date.

It was a slight faff to work out how this should be done, so I'm plonking it here for me to find in the future.

![Columns](/images/wp-event-cpt-columns.png)

The complication here was wanting to show the date in a human-readable format whilst letting the sorting happen using the unix time stamp.

So, a few things to note:

* `event` is the custom post type name. If it were **cake**, every action and filter name would need to be **cake** instead of **event**.
* `first_show_date` and `last_show_date` are custom fields storing the Unix time stamp

## Add a column to the admin

```php?start_inline=1
function event_cpt_add_columns($defaults) {
  $defaults = array(
    'cb'             => '<input type="checkbox" />',
    'title'          => 'Title',
    'firstshowdate'  => 'First Show Date',
    'lastshowdate'   => 'Last Show Date',
    'date'           =>	'Date',
  );

  return $defaults;
}
```

## Add something to that new column

```php?start_inline=1
function event_cpt_column_data($column_name, $post_ID) {
  if ($column_name == 'firstshowdate') {
    echo date('jS F Y', get_post_meta('first_show_date', $post_ID), true);
  }
  if ($column_name == 'lastshowdate') {
    echo date('jS F Y', get_post_meta('last_show_date', $post_ID), true);
  }
}
add_filter('manage_event_posts_columns', 'event_cpt_add_columns', 10);
add_action('manage_event_posts_custom_column', 'event_cpt_column_data', 10, 2);

function event_cpt_register_sortable($columns) {
  $columns['firstshowdate'] = 'firstshowdate';
  $columns['lastshowdate'] = 'lastshowdate';
  return $columns;
}
add_filter("manage_edit-event_sortable_columns", "event_cpt_register_sortable" );
```

## Enable sorting...

... using the original value of the custom field, not it's formatted counterpart.

```php?start_inline=1
function event_cpt_orderby( $query ) {
  if (!is_admin())
  return;

  $orderby = $query->get('orderby');

  if ('firstshowdate' == $orderby ) {
    $query->set('meta_key','first_show_date');
    $query->set('orderby','meta_value_num');
  }

  if ('lastshowdate' == $orderby ) {
    $query->set('meta_key','first_show_date');
    $query->set('orderby','meta_value_num');
  }
}
add_action('pre_get_posts', 'event_cpt_orderby');
```

If this can be improved, do let me know!
