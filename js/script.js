$('.menu-button').on('click', () => {
  $('.navigation--full').toggleClass('hide');
  $('.navigation--short').toggleClass('show');
});

$('.navigation--full .navigation__item').mouseover(() => {
  $('.main__shadow').removeClass('hide');
});

$('.navigation--full .navigation__item').mouseout(() => {
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
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.slider-two-prev',
  nextArrow: '.slider-two-next',
  // responsive: [{
  //   breakpoint: 768,
  //   settings: {
  //     arrows: true,
  //     slidesToShow: 1,
  //     dots: false
  //   }
  // }]
});

$('.slider-three').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.slider-three-prev',
  nextArrow: '.slider-three-next',
  // responsive: [{
  //   breakpoint: 768,
  //   settings: {
  //     arrows: true,
  //     slidesToShow: 1,
  //     dots: false
  //   }
  // }]
});

$('.slider-four').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.slider-four-prev',
  nextArrow: '.slider-four-next',
  // responsive: [{
  //   breakpoint: 768,
  //   settings: {
  //     arrows: true,
  //     slidesToShow: 1,
  //     dots: false
  //   }
  // }]
});

$('.slider-five').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.slider-five-prev',
  nextArrow: '.slider-five-next',
  // responsive: [{
  //   breakpoint: 768,
  //   settings: {
  //     arrows: true,
  //     slidesToShow: 1,
  //     dots: false
  //   }
  // }]
});
