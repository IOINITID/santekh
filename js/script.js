// toggle menu button
$('.menu-button').on('click', () => {
  $('.navigation--full').toggleClass('hide');
  $('.navigation--short').toggleClass('show');
});
// filter links hover
$('.navigation--full .navigation__item').mouseover(() => {
  $('.main__shadow').removeClass('hide');
});
// filter links hover
$('.navigation--full .navigation__item').mouseout(() => {
  $('.main__shadow').addClass('hide');
});
// filter links hover
$('.sort__list--first .sort__item').mouseover(() => {
  $('.sort__list--first .sort__list-inner').addClass('show');
});
// filter links hover
$('.sort__list--first .sort__list-inner').mouseover(() => {
  $('.sort__list--first .sort__list-inner').addClass('show');
});
// filter links hover
$('.sort__list--first .sort__list-inner').mouseout(() => {
  $('.sort__list--first .sort__list-inner').removeClass('show');
});
// filter links hover
$('.sort__list--second .sort__item').mouseover(() => {
  $('.sort__list--second .sort__list-inner').addClass('show');
});
// filter links hover
$('.sort__list--second .sort__list-inner').mouseover(() => {
  $('.sort__list--second .sort__list-inner').addClass('show');
});
// filter links hover
$('.sort__list--second .sort__list-inner').mouseout(() => {
  $('.sort__list--second .sort__list-inner').removeClass('show');
});
// agree check
$('.complete-order button').on('click', () => {
  if ($("#policy").attr("checked") == 'checked' || $("#phone").attr("value") !== '' || $("#phone").attr("value") !== '') {
    $('.complete-order button').submit(function () {});
  } else {
    // $('.modal-warning').addClass('show');
    $('.modal-warning').modal('show');
    $('body').addClass('inactive');
  }
});
// agree check scroll
$('.data-warning .close').on('click', () => {
  $('html, body').animate({
    scrollTop: $("#policy-confirm").offset().top
  }, 1000);
  $('.modal-warning').removeClass('show');
  $('body').removeClass('inactive');
});
// slider-one element
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
// slider-two element
$('.slider-two').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.slider-two-prev',
  nextArrow: '.slider-two-next',
});
// slider-three element
$('.slider-three').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.slider-three-prev',
  nextArrow: '.slider-three-next',
});
// slider-four element
$('.slider-four').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.slider-four-prev',
  nextArrow: '.slider-four-next',
});
// slider-five element
$('.slider-five').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.slider-five-prev',
  nextArrow: '.slider-five-next',
});
// filter two position range slider
$(".slider").slider({
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
// scroling to fixed
$(window).scroll(function () {
  if ($(window).scrollTop() > 150) {
    $('.complete-order').addClass('fixed');
  } else {
    $('.complete-order').removeClass('fixed');
  }
});
