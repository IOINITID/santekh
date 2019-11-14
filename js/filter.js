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
