// toggle menu button
$('.menu-button').on('click', () => {
  $('.navigation--full').toggleClass('hide');
  $('.navigation--short').toggleClass('show');
  $('.content').toggleClass('content--full');
  $('.header .container').toggleClass('content--full');
  $('.footer-container').toggleClass('content--full');
  $('.copyright').toggleClass('content--full');
});
// filter links hover
$('.navigation--full .navigation__item').mouseover(() => {
  $('.main__shadow').removeClass('hide');
  // $('.navigation__list .navigation__list--inner').removeClass('hide');
});
// filter links hover
$('.navigation--full .navigation__item').mouseout(() => {
  $('.main__shadow').addClass('hide');
  // $('.navigation__list .navigation__list--inner').addClass('hide');
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
//agree check
document.querySelector('.filter__label--checkbox input').addEventListener('click', function () {
  document.querySelector('.filter__label--checkbox input').classList.toggle('filter__checkbox');
});
// agree check
$('.complete-order button').on('click', () => {
  if ($('#policy').hasClass('filter__checkbox')) {
    $(this).submit(function () {});
  } else {
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
  // autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true,
});
// slider-two element
$('.slider-two').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.slider-two-prev',
  nextArrow: '.slider-two-next',
  responsive: [{
    breakpoint: 1300,
    settings: {
      arrows: true,
      slidesToShow: 1,
      dots: false
    }
  }]
});
// slider-three element
$('.slider-three').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.slider-three-prev',
  nextArrow: '.slider-three-next',
  responsive: [{
    breakpoint: 1300,
    settings: {
      arrows: true,
      slidesToShow: 1,
      dots: false
    }
  }]
});
// slider-four element
$('.slider-four').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.slider-four-prev',
  nextArrow: '.slider-four-next',
  responsive: [{
    breakpoint: 1300,
    settings: {
      arrows: true,
      slidesToShow: 1,
      dots: false
    }
  }]
});
// slider-five element
$('.slider-five').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  prevArrow: '.slider-five-prev',
  nextArrow: '.slider-five-next',
  responsive: [{
    breakpoint: 1300,
    settings: {
      arrows: true,
      slidesToShow: 1,
      dots: false
    }
  }]
});
// scroling to fixed
$(window).scroll(function () {
  if ($(window).scrollTop() > 150) {
    $('.complete-order').addClass('fixed');
  } else {
    $('.complete-order').removeClass('fixed');
  }
});
