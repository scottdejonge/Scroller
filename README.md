Scroller
=========

Version 1.0

## Contributors

Scott de Jonge [@scottdejonge](https://twitter.com/scottdejonge)

## Summary

A simple fullscreen page scroller usng JQuery.

## Usage

###Options

```
$('[data-scroller]').scroller({
	body: 'html, body',
	navigationcontainer: '[data-scroller-nav]',
	navigation: '[data-scroller-nav] > a',
	section: '[data-scroller-section]',
	current: 0,
	speed: 650,
	easing: 'easeInOutExpo'
});
```

### Changelog

#### Version 1.0

* initial version

### Credits

* [JQuery](http://jquery.com/)
* [Waypoints](http://imakewebthings.com/jquery-waypoints/)
* [Easing](http://gsgd.co.uk/sandbox/jquery/easing/)
* [Normalize.css](http://necolas.github.io/normalize.css/)