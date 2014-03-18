require 'liquid'
require 'fleakr'
 
Fleakr.api_key = "8b3fc7bec6daef3f7a0293b25c635c1f"
Fleakr.shared_secret = "60a64fa76e2e1443"
Fleakr.auth_token = "72157634333343479"
 
CACHED_IMAGES = {}
 
module Flickr
def flickr_image(url)
"<img alt='#{image_object(url).title}' src='#{image_object(url).large.url}'>"
end
 
def flickr_medium_image(url)
"<img alt='#{image_object(url).title}' src='#{image_object(url).medium.url}'>"
end
 
private
 
def image_object(url)
CACHED_IMAGES[url] ||= Fleakr.resource_from_url(url)
end
end
 
Liquid::Template.register_filter(Flickr)