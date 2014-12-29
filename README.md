# incredible.srcset

###Description

A JavaScript plugin that attempts to replicate the functionality provided by the W3C [html srcset](http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-srcset) for increased cross-browser support.

Excerpt from the HTML 5.1 nightly:
> The srcset attribute may also be present. If present, its value must consist of one or more image candidate strings, each separated from the next by a "," (U+002C) character. If an image candidate string > contains no descriptors and no space characters after the URL, the following image candidate string, if there is one, must begin with one or more space characters.
> 
> An image candidate string consists of the following components, in order, with the further restrictions described below this list:
> 
> Zero or more space characters.
> 
> A valid non-empty URL that does not start or end with a "," (U+002C) character, referencing a non-interactive, optionally animated, image resource that is neither paged nor scripted.
> 
> Zero or more space characters.
> 
> Zero or one of the following:
> 
> A width descriptor, consisting of: a space character, a valid non-negative integer giving a number greater than zero representing the width descriptor value, and a U+0077 LATIN SMALL LETTER W character.
> 
> A pixel density descriptor, consisting of: a space character, a valid floating-point number giving a number greater than zero representing the pixel density descriptor value, and a U+0078 LATIN SMALL LETTER X character.
> 
> Zero or more space characters.
> 
> There must not be an image candidate string for an element that has the same width descriptor value as another image candidate string's width descriptor value for the same element.
> 
> There must not be an image candidate string for an element that has the same pixel density descriptor value as another image candidate string's pixel density descriptor value for the same element. For the > purpose of this requirement, an image candidate string with no descriptors is equivalent to an image candidate string with a 1x descriptor.
> 
> If a source element has a sizes attribute present or an img element has a sizes attribute present, all image candidate strings for that element must have the width descriptor specified.
> 
> If an image candidate string for an source or img element has the width descriptor specified, all other image candidate strings for that element must also have the width descriptor specified.
> 
> The specified width in an image candidate string's width descriptor must match the intrinsic width in the resource given by the image candidate string's URL.

Any comments, corrections and suggestions are welcome.

### Demo

Check the [srcset demo](http://www.incredible-web.com/demo/srcset/) using varying image and window sizes.

### Usage

Make sure you have included the meta viewport tag

```<meta name="viewport" content="width=device-width, initial-scale=1">```

Add reference to the latest jQuery library and then include the minified JavaScript file 'jquery.incredible.srcset.min.js':

```<script type="text/javascript" src="js/jquery.incredible.srcset.min.js"></script>```

Add the `data-srcset` attribute to an `<img>` element assigning comma-seperated image urls:

```html
<img src="images/sample-image-320.jpg" 
	data-srcset="images/sample-image-640.jpg 640px, images/sample-image-1024.jpg 1024px, images/sample-image-1920.jpg 1920px" 
	alt="sample-image">
```

The `src` attribute servs as our fallback as this has not changed and would work in all browsers including those with JavaScript disabled (progressive enhancement ftw!).

### TODO

- Remove jQuery dependency
- Add support for Retina displays
- Update image candidate syntax

### Reporting issues and contributing
Please feel free to contribute or report any issues.

### Additional material

- http://ericportis.com/posts/2014/srcset-sizes/
- http://www.incredible-web.com/blog/responsive-design-iii/

### License

Licensed MIT
Copyright (c) 2014 [Incredible Web](http://www.incredible-web.com)