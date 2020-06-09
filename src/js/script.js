$(document).ready(function(){
    $('.slider__inner').slick({
    	infinite: true,
        speed: 600,
        //adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
       	// fade: true,
       	// cssEase: 'linear'
    	prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png"></button>',
    	nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png"></button>',
    	responsive: [
    		{
			breakpoint: 992,
			settings: {
				dots: true
				}
    		},
    	]
    });
    	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
			$(this)
				.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
				.closest('div.container').find('div.catalog__content').		removeClass('catalog__content_active').eq($(this).index()).		addClass('catalog__content_active');
			});

      	/*$('.catalog__link').each(function(i) {
        	$(this).on('click', function(e) {
            	e.preventDefault();
            	$('.catalog__change').eq(i).toggleClass('catalog__change_active');
            	$('.catalog__list').eq(i).toggleClass('catalog__list_active');
            })     
		})

		$('.catalog__back').each(function(i) {
        	$(this).on('click', function(e) {
            	e.preventDefault();
            	$('.catalog__change').eq(i).toggleClass('catalog__change_active');
            	$('.catalog__list').eq(i).toggleClass('catalog__list_active');
            })     
		});*/
		
		function toggleSlide(item) {
			$(item).each(function(i) {
				$(this).on('click', function(e) {
					e.preventDefault();
					$('.catalog__change').eq(i).toggleClass('catalog__change_active');
					$('.catalog__list').eq(i).toggleClass('catalog__list_active');
				})  
			});
		};

		toggleSlide('.catalog__link');
		toggleSlide('.catalog__back');

});     