(function ($, window, document, undefined) {
	// retrieve all images that contain the srcset tag
	$(document).find("img[data-srcset]").each(function () {		
		var self = this;

		// retrieve the comma-separated srcset values
		var srcset = $(self).data("srcset").split(',');
		
		for (var i = 0; i < srcset.length; i++) {
			// retrieve the url and media query for each srcset
			var x = srcset[i].split(' ');
			var url = x[0];

		    // if there is no viewport width, then it is the default srcs			
			if (x.length > 1) {
			    var mq = x[1];
			}

            // if there was a media query
			if (mq != undefined && mq) {
			    // create the media query list
			    var mql = window.matchMedia("only screen and (min-width: " + mq + ")");

			    // add a listener to look for changes in the viewport
			    mql.addListener(function () {
			        // if it matches the media query
			        if (mql.matches) {
			            // update the image's src
			            $(self).attr("src", url);
			        }
			    });

			    // check if it currently matches the media query
			    if (mql.matches) {
			        // update the image's src
			        $(self).attr("src", url);
			        // exit the for loop
			        // - this would prevent us from loading all the images on load
			        return;
			    }
			}
			else {
                // set to the default if no mq was specified
			    $(self).attr("src", url);
			}
		}
	});
})(window.jQuery, window, document);