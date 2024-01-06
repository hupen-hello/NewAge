/*
Author       : Masum Billah
Version      : 1.0
*/

(function($) {
	'use strict';
		
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		});		
	
	
		// Active Slick Nav 			
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});
	
		// Active fixed-top	
		if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});			
		/*END MENU JS*/ 			
		
		/*END HOME Slider JS*/
		$('.main_slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  adaptiveHeight: true
		});
				
		/*START Partner Logo JS*/
		  $(".partner-slider").owlCarousel({
			dots: true,
			loop: true,
			autoplay: true,
			nav: true,
			margin:25,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},            
				960:{
					items:4
				},
				1200:{
					items:5
				}
			}
		  });
		  

		/* START JQUERY LIGHTBOX*/
		jQuery('.lightbox').venobox({
			numeratio: true,
			infinigall: true
		});	
		/* END JQUERY LIGHTBOX*/	
		
		
		/*Start Testimonials Slider JS*/
		$('.testimonials_slider').slick({
			infinite: true,
			slidesToShow: 3,
			dots: false,
			slidesToScroll: 3,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				  }
				},				
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			  ]	  
		});
		/*END Testimonials Slider JS*/		

								
		/*START COUNDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/*END COUNDOWN JS */

	/*Start VenoBox JS */
	new VenoBox({
		selector: '.vid_btn'
	});	
	
	new VenoBox({
		selector: '.video_btn'
	});
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
	
})(jQuery);


  
