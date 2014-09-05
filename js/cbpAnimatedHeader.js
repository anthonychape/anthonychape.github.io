/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '#header' ),
		bgheader = document.querySelector( '.bg-header' ),
		ssheader = document.querySelector( '.sticky-sneaky-header' ),
		ssbgheader = document.querySelector( '.sticky-sneaky-bg-header' ),
		logo = document.querySelector( '.logo' ),
		navmenuleft = document.querySelector( '.nav-menu-left' ),
		navmenuright = document.querySelector( '.nav-menu-right' ),
		logocontainer = document.querySelector( '.logo-container' ),
		didScroll = false,
		changeHeaderOn = 100;


	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	// Applys a dict of css properties to an element
    function applyProperties( target, properties ) {

      for( var key in properties ) {
        target.style[ key ] = properties[ key ];
      }
    }
	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'sticky-header' );
			classie.add( bgheader, 'sticky-header' );
			classie.add( logo, 'sticky-header' );
			classie.add( navmenuright, 'nav-menu-sticky' );
			
			/*
			var addStickyProperties = {
	        	'display': 'block'
	    	}
			applyProperties( slogo, addStickyProperties );

			var addHeaderStickyProperties = {
	        	'visibility': 'visible'
	    	}
			applyProperties( ssheader, addHeaderStickyProperties );

			var addBgHeaderStickyProperties = {
	        	'visibility': 'visible'
	    	}
			applyProperties( ssbgheader, addBgHeaderStickyProperties );*/

		}
		else {
			classie.remove( header, 'sticky-header' );
			classie.remove( bgheader, 'sticky-header' );
			/*var removeProperties = {
	        	'visibility': 'visible'
	    	}
			applyProperties( logo, removeProperties );
			var removeStickyProperties = {
	        	'display': 'none'
	    	}
			applyProperties( slogo, removeStickyProperties );

			var addHeaderStickyProperties = {
	        	'visibility': 'hidden'
	    	}
			applyProperties( ssheader, addHeaderStickyProperties );

			var addBgHeaderStickyProperties = {
	        	'visibility': 'hidden'
	    	}
			applyProperties( ssbgheader, addBgHeaderStickyProperties );*/

			classie.remove( logo, 'sticky-header' );
			classie.remove( navmenuright, 'nav-menu-sticky' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();