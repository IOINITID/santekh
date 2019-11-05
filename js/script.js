$('.menu-button').on('click', () => {
  $('.navigation--full').toggleClass('hide');
  $('.navigation--short').toggleClass('show');
});

$('.navigation__item').mouseover(() => {
  // $('.navigation--hover').addClass('show');
});

$('.navigation__item').mouseout(() => {
  // $('.navigation--hover').removeClass('show');
});
