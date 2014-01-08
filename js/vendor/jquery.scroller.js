/**
 * Scroller created by Scott de Jonge
 *
 * @version 1.0
 * Licensed under MIT
 *
 */

(function() {

	(function($, window, document) {

		var Plugin, defaults, pluginName;
		pluginName = "scroller";

		//Plugin Options
		defaults = {
			body: 'html, body',
			navigationcontainer: '[data-scroller-nav]',
			navigation: '[data-scroller-nav] > a',
			section: '[data-scroller-section]',
			current: 0,
			speed: 650,
			easing: 'easeInOutExpo'
		};

		//Plugin
		Plugin = (function() {
			function Plugin(element, options) {
				this.element = element;
				this.options = $.extend(true, {}, defaults, options);
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
			}
			return Plugin;
		})();

		//Initialise
		Plugin.prototype.init = function() {
			var $element = $(this),
			_this = this,
			$section =  $(this.options.section);
			$navigationcontainer = $(this.options.navigationcontainer);
			$navigation = $(this.options.navigation);
			this.$body = $(this.options.body);

			//Click Event
			$navigation.on('click', function(e) {
				var distance = $section.eq($(this).index()).offset().top;
				e.preventDefault();
				return _this.scrollAnimate(distance);
			});

			//Change Navigation on Waypoint
			$section.waypoint(function(direction) {
				if(direction === 'down') {
					return _this.changeNav($(this));
				}
			},{offset: '30%'}).waypoint(function( direction ) {
				if(direction === 'up') {
					return _this.changeNav($(this));
				}
			}, {offset: '-30%'});

			//Body Postion of the Current Section on Window Resize
			$(window).on('debouncedresize', function() {
				console.log('Window Resized');
				scrollAnimate($sections.eq(defaults.current).offset().top);
			});
		};

		//Change Current Navigation
		Plugin.prototype.changeNav = function($section) {
			var $navigation = $(this.options.navigation);
			$navigation.eq(this.options.current).removeClass('active');
			this.options.current = $section.index('section');
			$navigation.eq(this.options.current).addClass('active');
		};

		//Animate Scroll
		Plugin.prototype.scrollAnimate = function(distance) {
			this.$body.stop().animate({scrollTop: distance}, this.options.speed, this.options.easing);
		};

		//Declare jQuery Plugin
		return $.fn[pluginName] = function(options) {
			return this.each(function() {
				if (!$.data(this, "plugin_" + pluginName)) {
					return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
				}
			});
		};

	})(jQuery, window, document);

}).call(this);