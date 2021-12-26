$(function(){
  $('.slider__inner').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev-arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next-arrow.svg" alt=""></button>',
    autoplay: true,
    dots: true,
    responsive: [{
        breakpoint: 801,
        settings: {
            arrows: false
        }
    }, ]
  });

  $('.menu__btn').on('click', function() {
      $('.menu__list').toggleClass('menu__list-active')
  });

});
