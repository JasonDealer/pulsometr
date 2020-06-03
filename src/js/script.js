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
  });
      