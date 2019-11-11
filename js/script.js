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

$('.sort__list--first .sort__item').mouseover(() => {
  $('.sort__list--first .sort__list-inner').addClass('show');
});

$('.sort__list--first .sort__list-inner').mouseover(() => {
  $('.sort__list--first .sort__list-inner').addClass('show');
});

$('.sort__list--first .sort__list-inner').mouseout(() => {
  $('.sort__list--first .sort__list-inner').removeClass('show');
});

$('.sort__list--second .sort__item').mouseover(() => {
  $('.sort__list--second .sort__list-inner').addClass('show');
});

$('.sort__list--second .sort__list-inner').mouseover(() => {
  $('.sort__list--second .sort__list-inner').addClass('show');
});

$('.sort__list--second .sort__list-inner').mouseout(() => {
  $('.sort__list--second .sort__list-inner').removeClass('show');
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

$("#slider").slider({
  animate: "slow",
  min: 0,
  max: 50000,
  range: true,
  values: [10000, 30000],
  slide: function (event, ui) {
    $('#slider__value-from').val(ui.values[0]);
    $('#slider__value-to').val(ui.values[1]);
  }
});
