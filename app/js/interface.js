$(document).ready(function() {
	flexibility(document.documentElement);
	// $("body").on("click", ".test", function(e){
	// 	e.preventDefault();
	// })


	//ACCORDEON
    $("body").on("click", ".accordeon__link", function(e){
        e.preventDefault();
        $(this).parents('.accordeon__item').toggleClass('active');
        $(this).next('.accordeon__info').slideToggle();
    });



    //WORK SLIDER
	if ($('.work-slider').length>0) {
		var $slider = $('.work-slider');
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
	  			// responsive: [
				  //   {
				  //     	breakpoint: 850,
				  //     	settings: {
					 //        slidesToShow: 2,
						// 	slidesToScroll: 1,
				  //   	}
				  //   },
				  //   {
				  //     	breakpoint: 650,
				  //     	settings: {
					 //        slidesToShow: 1,
						// 	slidesToScroll: 1,
				  //   	}
				  //   },
			   //  ]
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
		var $slider = $('.work-slider-variable');
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
	  			// responsive: [
				  //   {
				  //     	breakpoint: 850,
				  //     	settings: {
					 //        slidesToShow: 2,
						// 	slidesToScroll: 1,
				  //   	}
				  //   },
				  //   {
				  //     	breakpoint: 650,
				  //     	settings: {
					 //        slidesToShow: 1,
						// 	slidesToScroll: 1,
				  //   	}
				  //   },
			   //  ]
			});
		});

		$('.slider-nav__next').click(function(){
		  	$(this).parents('.work__title').next('.work-slider-wrap').find('.work-slider-variable').slick('slickNext');
		});
		$('.slider-nav__prev').click(function(){
		  	$(this).parents('.work__title').next('.work-slider-wrap').find('.work-slider-variable').slick('slickPrev');
		});
	}
});




$(window).resize(function () {

});

// $(window).load(function(){

// });

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
		<li><a href="Services.html">Services</a></li> \
		<li><a href="index.html">Index</a></li> \
		<li><a href="portfolio.html">Portfolio</a></li> \
	</ol> \
</div>');
