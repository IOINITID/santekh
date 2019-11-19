// toggle click
(function ($) {
  $.fn.clickToggle = function (func1, func2) {
    var funcs = [func1, func2];
    this.data('toggleclicked', 0);
    this.click(function () {
      var data = $(this).data();
      var tc = data.toggleclicked;
      $.proxy(funcs[tc], this)();
      data.toggleclicked = (tc + 1) % 2;
    });
    return this;
  };
}(jQuery));
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
// filter links first active
$('.sort-mobile__list--first .sort-mobile__item a').clickToggle(function () {
    $('.sort-mobile__list--first .sort-mobile__list-inner').addClass('show');
  },
  function () {
    $('.sort-mobile__list--first .sort-mobile__list-inner').removeClass('show');
  });
// filter links second active
$('.sort-mobile__list--second .sort-mobile__item a').clickToggle(function () {
    $('.sort-mobile__list--second .sort-mobile__list-inner').addClass('show');
  },
  function () {
    $('.sort-mobile__list--second .sort-mobile__list-inner').removeClass('show');
  });
// item feature show
$('.feature__mobile-show-more').clickToggle(function () {
    $('.feature__mobile').removeClass('feature__mobile--hide');
    $('.feature__mobile-show-more').text('Скрыть...');
  },
  function () {
    $('.feature__mobile').addClass('feature__mobile--hide');
    $('.feature__mobile-show-more').text('Показать ещё...');
  });
// list filter show
// $('.filter-mobile button').on('click', () => {
//   $('.filter-mobile__form').removeClass('hide');
//   $('.main__shadow').removeClass('hide');
// });
// list filter close
// $('.filter-mobile-close').on('click', () => {
//   $('.filter-mobile__form').addClass('hide');
//   $('.main__shadow').addClass('hide');
// });
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
if (document.querySelector('.filter__label--checkbox input')) {
  document.querySelector('.filter__label--checkbox input').addEventListener('click', function () {
    document.querySelector('.filter__label--checkbox input').classList.toggle('filter__checkbox');
  });
}
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
      arrows: false,
      slidesToShow: 1,
      dots: true
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
      arrows: false,
      slidesToShow: 1,
      dots: true
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
      arrows: false,
      slidesToShow: 1,
      dots: true
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
      arrows: false,
      slidesToShow: 3,
      dots: true
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
// filter list
$('.filter__show-more-mobile').clickToggle(function () {
    $('.filter-list-hide--mobile').addClass('filter-list-show--mobile');
    $('.filter__show-more-mobile').text('Скрыть...');
  },
  function () {
    $('.filter-list-hide--mobile').removeClass('filter-list-show--mobile');
    $('.filter__show-more-mobile').text('Показать ещё...');
  });

$('.search-mobile').on('click', () => {
  $('.search-mobile-wrapper').removeClass('hide');
});

$('.button-next-mobile').on('click', () => {
  $('.list-wrapper-mobile__cart').addClass('hide');
  $('.list-wrapper-mobile__order').removeClass('hide');
  $('html, body').animate({
    scrollTop: $('.header').offset().top
  }, 1000);
});

$('.search-mobile-wrapper-close').on('click', () => {
  $('.search-mobile-wrapper').addClass('hide');
});


document.addEventListener(
  "DOMContentLoaded", () => {
    const node = document.querySelector("#my-menu");
    const menu = new MmenuLight(node, {
      title: "",
    });
    menu.enable("(max-width: 600px)");
    menu.offcanvas();
    document.querySelector(".menu-mobile")
      .addEventListener("click", (evnt) => {
        menu.open();
        evnt.preventDefault();
        evnt.stopPropagation();
      });
  }
);

$('.modal-mobile .data-recall label input').on('focus', () => {
  $('.modal-mobile .data-recall label input').attr("placeholder", "").placeholder();
});

$('.modal-mobile .data-recall label input').on('focusout', () => {
  $('.modal-mobile .data-recall label input').attr("placeholder", "Номер телефона").placeholder();
});

$('.search-mobile').on('click', () => {
  $('.modal-search.show form label input').focus();
});
