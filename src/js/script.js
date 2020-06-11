$(document).ready(function(){

//slider

    $('.slider__inner').slick({
    	infinite: true,
        speed: 600,
        //adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
       	// fade: true,
       	// cssEase: 'linear'
    	prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
    	nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
    	responsive: [
    		{
			breakpoint: 992,
			settings: {
				dots: true
				}
    		},
    	]
	});
	
//tabs

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



//modal windows

	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn();
	});

	$('.modal__close').on('click', function(){
		$('.overlay, #consultation, #order, #confirm').fadeOut()
	});


	/*$('.button_submit').on('click', function(){
		$('.overlay, #consultation, #order, #confirm').fadeOut();
		$('.overlay, #confirm').fadeIn();
	});*/

	$('.catalog__btn').each(function(i){
		$(this).on('click', function(){
			$('#order .modal__descr').text($('.catalog__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn();
		});
	});

//forms

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				email: {
				  required: true,
				  email: true
				}
			},
			messages: {
				name: "Пожалуйста введите своё имя",
				phone: "Пожалуйста введите свой номер",
				email: {
				  required: "Введите действующий e-mail",
				  email: "Введите достоверный e-mail"
				}
			  }
		});
	}

	validateForms('#promo-consult');
	validateForms('#consultation form');
	validateForms('#order form');

//masked input

	$("input[name=phone]").mask("+375 (99) 999-99-99");

//backend

	$('form').submit(function(e){
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function(){
			$(this).find("input").val("");
			$('.overlay, #consultation, #order, #confirm').fadeOut();
			$('.overlay, #confirm').fadeIn();


			$('form').trigger('reset');
		});
		return false;
	});

//scroll

	$(window).scroll(function(){
		if ($(this).scrollTop() > 1600) {
			$('.pageupwrapper').fadeIn();
		} else {
			$('.pageupwrapper').fadeOut();
		}
	});

	$("a[href=#up]").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

});     