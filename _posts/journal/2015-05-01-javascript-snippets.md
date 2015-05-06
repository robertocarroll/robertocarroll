---
author: roberto
comments: false
date: 2015-05-01 16:34:33
layout: post
slug: javascript-snippets
title: 'JavaScript snippets'
categories:
- Journal
tags:
- javascript
---

I'm going to use this post to keep all the useful things about JavaScript. [General code snippets are in another post](/journal/useful-code-snippets).

## Map, filter and reduce

- Use .map for transforming values
- Use .filter for filtering values
- Use .reduce for aggregating values
- Use for loops for performance hotspots

Map and filter return arrays and are functions on arrays. They can be chained together.

<code>
var rockinCatsOnly = ['cats', 'dogs']
    .filter(thatsACat)
    .map(theyRock);
// ['cats rock']
</code>

## Scope

- Blocks and functions both have {}
- Only functions give you scope, ie variables contained within only exist within it
- for loops are blocks, ie no scope and variables leak in and out
- filter, reduce are functions, ie have scope

See [Beyond the for Loop](http://www.macwright.org/presentations/beyondfor) for more detail