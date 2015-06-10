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

## Syllable count
<code>
function new_count(word) {
  word = word.toLowerCase();                                     //word.downcase!
  if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
  word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
  return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
}

</code>

## Interate through dates
<code>
var moment = require('moment');
var a = moment('2013-01-01');
var b = moment('2013-06-01');

for (var m = moment(a); m.isBefore(b); m.add('days', 1)) {
    console.log(m.format('YYYY-MM-DD'));
}

</code>