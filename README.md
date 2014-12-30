# incredible.srcset

###Description

A JavaScript plugin that attempts to replicate the functionality provided by the W3C [html srcset](http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-srcset) for increased cross-browser support.

Excerpt from the HTML 5.1 nightly:
> The srcset attribute may also be present. If present, its value must consist of one or more image candidate strings, each separated from the next by a "," (U+002C) character. If an image candidate string contains no descriptors and no space characters after the URL, the following image candidate string, if there is one, must begin with one or more space characters.

- **Browser support:** Tested in IE 10, Chrome, Firefox, Opera, Safari
- **Size:** ~421 bytes minified

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
	data-srcset="images/sample-image-640.jpg 320w, images/sample-image-1024.jpg 640w, images/sample-image-1920.jpg 1024w" 
	alt="sample-image">
```

The `src` attribute servs as our fallback as this has not changed and would work in all browsers including those with JavaScript disabled (progressive enhancement ftw!).

### TODO

- Remove jQuery dependency
- Add support for Retina displays
- Update image candidate syntax
- updateOnResize

### Reporting issues and contributing
Please feel free to contribute or report any issues.

### Additional material

- http://ericportis.com/posts/2014/srcset-sizes/
- http://www.incredible-web.com/blog/responsive-design-iii/

### License

Licensed MIT
Copyright (c) 2014 [Incredible Web](http://www.incredible-web.com)