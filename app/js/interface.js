$(document).ready(function() {
	flexibility(document.documentElement);

	// Create the measurement node
    const scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";

	//MENU
    $("body").on("click", ".js-top-btn", function(e){
        e.preventDefault();
        const toggleText = $(this).find('.top-btn__txt');
		//scroll-detect
		const ifHasScroll = $('body').hasVerticalScrollBar();
        if ( $(this).is( ".active" ) ) {
		    $(this).removeClass('active');
		    $('.top-menu').hide();
		    toggleText.text('Меню');
		    document.body.removeChild(scrollDiv);
		    $('.page-header').removeClass('active');
			setTimeout(function (){
			    $('body').removeAttr("style");
			    $( 'body' ).removeClass('fixed');
			    $('.page-header').css('margin-right',0);
			    
		    	
			}, 400);
		} else{
        	$(this).addClass('active');
        	$('.page-header').addClass('active');
        	$('.top-menu').show();
        	toggleText.text('Закрыть');
        	if (ifHasScroll) {
        		document.body.appendChild(scrollDiv);
        		const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    			
			    $('body').addClass('fixed');
			    $('body').css('padding-right',scrollbarWidth);
			    $('.page-header').css('margin-right',scrollbarWidth);
			}
		}
    });

	//ACCORDEON
    $("body").on("click", ".accordeon__link", function(e){
        e.preventDefault();
        $(this).parents('.accordeon__item').toggleClass('active');
        $(this).next('.accordeon__info').slideToggle();
    });

    //WORK SLIDER
	if ($('.work-slider').length>0) {
		const $slider = $('.work-slider');
		$slider.each(function() {
			$(this).slick({
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				lazyLoad: 'progressive',
				dots:false,
				arrows:true,
				useTransform:true,
				"accessibility": false,
				appendArrows: $('.slider-nav', this),
				//variableWidth:true,
	  			responsive: [
				    {
				      	breakpoint: 1023,
				      	settings: {
					        slidesToShow: 2,
							slidesToScroll: 1,
				    	}
				    },
				    {
				      	breakpoint: 600,
				      	settings: {
					        slidesToShow: 2,
							slidesToScroll: 1,
				    	}
				    },
			    ]
			});
		});

		$('.slider-nav__next').click(function(){
		  	$(this).parents('.work__title').next('.work-slider-wrap').find('.work-slider').slick('slickNext');
		});
		$('.slider-nav__prev').click(function(){
		  	$(this).parents('.work__title').next('.work-slider-wrap').find('.work-slider').slick('slickPrev');
		});
	}

	//WORK SLIDER-variable
	if ($('.work-slider-variable').length>0) {
		const $slider = $('.work-slider-variable');
		$slider.each(function() {
			$(this).slick({
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				lazyLoad: 'progressive',
				dots:false,
				arrows:true,
				useTransform:true,
				"accessibility": false,
				appendArrows: $('.slider-nav', this),
				variableWidth:true,
	  			responsive: [
				    {
				      	breakpoint: 1023,
				      	settings: {
					        slidesToShow: 2,
							slidesToScroll: 1,
				    	}
				    },
			    ]
			});
		});

		$('.slider-nav__next').click(function(){
		  	$(this).parents('.work__title').next('.work-slider-wrap').find('.work-slider-variable').slick('slickNext');
		});
		$('.slider-nav__prev').click(function(){
		  	$(this).parents('.work__title').next('.work-slider-wrap').find('.work-slider-variable').slick('slickPrev');
		});
	}


	//PRESENTATIONS SLIDER
	if ($('.presentations-slider').length>0) {
		const $slider = $('.presentations-slider');
		$slider.each(function() {
			$(this).slick({
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				lazyLoad: 'progressive',
				dots:false,
				arrows:true,
				useTransform:true,
				"accessibility": false,
				appendArrows: $('.slider-nav', this),
	  			responsive: [
				    {
				      	breakpoint: 900,
				      	settings: {
					        slidesToShow: 1,
							slidesToScroll: 1,
				    	}
				    },
				    {
				      	breakpoint: 850,
				      	settings: {
					        slidesToShow: 2,
							slidesToScroll: 1,
				    	}
				    },
				    {
				      	breakpoint: 600,
				      	settings: {
					        slidesToShow: 1,
							slidesToScroll: 1,
				    	}
				    },
			    ]
			});
		});

		$('.slider-nav__next').click(function(){
		  	$(this).parents('.presentations__title').next('.presentations-slider-wrap').find('.presentations-slider').slick('slickNext');
		});
		$('.slider-nav__prev').click(function(){
		  	$(this).parents('.presentations__title').next('.presentations-slider-wrap').find('.presentations-slider').slick('slickPrev');
		});
	}




	//REVIEWS SLIDER
	if ($('.reviews-slider').length>0) {
		const $slider = $('.reviews-slider');
		$slider.each(function() {
			$(this).slick({
				infinite: false,
				slidesToShow: 8,
				slidesToScroll: 1,
				lazyLoad: 'progressive',
				dots:false,
				arrows:true,
				useTransform:true,
				"accessibility": false,
				appendArrows: $('.slider-nav', this),
				centerMode: true,
	  			responsive: [
				    {
				      	breakpoint: 900,
				      	settings: {
					        slidesToShow: 7,
							slidesToScroll: 1,
				    	}
				    },
				    {
				      	breakpoint: 850,
				      	settings: {
					        slidesToShow: 6,
							slidesToScroll: 1,
				    	}
				    },
				    {
				      	breakpoint: 700,
				      	settings: {
					        slidesToShow: 4,
							slidesToScroll: 1,
				    	}
				    },
				    {
				      	breakpoint: 600,
				      	settings: {
					        slidesToShow: 3,
							slidesToScroll: 1,
				    	}
				    },
			    ]
			});
		});

		$('.slider-nav__next').click(function(){
		  	$(this).parents('.reviews__title').next('.reviews-slider').slick('slickNext');
		});
		$('.slider-nav__prev').click(function(){
		  	$(this).parents('.reviews__title').next('.reviews-slider').slick('slickPrev');
		});
	}


	//TOOLTIP
	if ($('.tooltip').length>0) {
		$('.tooltip').tooltipster({
			animation: 'fade',
   			delay: 100,
		});
	};
	if ($('.tooltip-content').length>0) {
		$ ( '.tooltip-content' ). tooltipster ({ 
    		functionInit : function ( instance , helper ) { var content = $ ( helper . origin ). find ( '.tooltip_content' ). detach (); 
        		instance . content ( content );
        	},
        	distance: 0,
        	contentAsHTML:true,
        	interactive: true,
        });
	};
});

(function($) {
    $.fn.hasVerticalScrollBar = function() {
        return this.get(0) ? parseInt( this.get(0).scrollHeight ) > parseInt( this.innerHeight() ) : false;
    };
})(jQuery);



$(window).resize(function () {

});


// functions


// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="services.html">Services</a></li> \
		<li><a href="service.html">Service</a></li> \
		<li><a href="text.html">Text</a></li> \
		<li><a href="portfolio.html">Portfolio</a></li> \
		<li><a href="expert.html">Expert</a></li> \
		<li><a href="index.html">Index</a></li> \
	</ol> \
</div>');
