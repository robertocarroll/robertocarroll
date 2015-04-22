
Website for robertocarroll.com

jekyll serve 	

## create a new post in blog category with today's date
thor post:new "Automate Jekyll post creation with Thor"

## optionally pass in the date for creation
thor post:new "Automate Jekyll post creation with Thor" --date=2014-01-01

See [Automate Jekyll](http://www.guyroutledge.co.uk/blog/automate-jekyll-post-creation-with-thor/) for details.

## Images
At the moment, I'm going with 1200 x 741

----------------------------
Home
Work - Show range of work 
Journal - 
About - What I do / contact

## Layouts
- Essay (Steer clear of personal details)
- Note (Journal)
- Work
- Book

## Tumblr
Stuff I'm reading / looking at / listening to / thinking about.
- Quotes
- Books
- Images
http://janzheng.com/2013/06/tumblr_integration.html
http://atlanticnoir.stylehatch.co/

## Ideas  
- Link to Github

## Elsewhere
- Github
- Twitter
- Flickr
- Instagram

## Services
- Concept and strategy
- Experience design
- Digital development
- Data and maps
- Video
- Writing and editing

### Rems, `font-size`, and scaling

Poole is built almost entirely with `rem`s (instead of pixels). `rem`s are like `em`s, but instead of building on the immediate parent's `font-size`, they build on the root element, `<html>`.

By default, we use the following:

```css
html {
  font-size: 16px;
  line-height: 1.5;
}
@media (min-width: 38em) {
  html {
    font-size: 20px;
  }
}

```

To easily scale your site's typography and components, simply customize the base `font-size`s here.

## License
Open sourced under the [MIT license](LICENSE.md).


