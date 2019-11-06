$('.menu-button').on('click', () => {
  $('.navigation--full').toggleClass('hide');
  $('.navigation--short').toggleClass('show');
});

$('.navigation__item').mouseover(() => {
  // $('.navigation--hover').addClass('show');
  $('.main__shadow').removeClass('hide');
});

$('.navigation__item').mouseout(() => {
  // $('.navigation--hover').removeClass('show');
  $('.main__shadow').addClass('hide');
});

$('.slider-one').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true,
  // responsive: [{
  //   breakpoint: 768,
  //   settings: {
  //     arrows: true,
  //     slidesToShow: 1,
  //     dots: false
  //   }
  // }]
});

$('.slider-two').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.discounts__controls-prev',
  nextArrow: '.discounts__controls-next',
  // responsive: [{
  //   breakpoint: 768,
  //   settings: {
  //     arrows: true,
  //     slidesToShow: 1,
  //     dots: false
  //   }
  // }]
});
