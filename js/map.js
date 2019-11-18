// yandex map api request
var myMap;
var search_result = [];
ymaps.ready(function () {
  myMap = new ymaps.Map("myMap", {
    center: [55.76, 37.64],
    zoom: 7,
    behaviors: ['default', 'scrollZoom']
  });
  myMap.controls.add('zoomControl');
});
// yandex map autocomplete
$(document).ready(function () {
  $("#address").keyup(function () {
    var search_query = $(this).val();
    search_result = [];
    $.getJSON(
      'https://geocode-maps.yandex.ru/1.x/?format=json&apikey=13a1e10e-79ea-41f2-9d1a-9f197be07777&geocode=' +
      search_query,
      function (data) {
        for (var i = 0; i < data.response.GeoObjectCollection.featureMember.length; i++) {
          search_result.push({
            label: data.response.GeoObjectCollection.featureMember[i].GeoObject.description + ' - ' +
              data.response.GeoObjectCollection.featureMember[i].GeoObject.name,
            value: data.response.GeoObjectCollection.featureMember[i].GeoObject.description + ' - ' +
              data.response.GeoObjectCollection.featureMember[i].GeoObject.name,
            longlat: data.response.GeoObjectCollection.featureMember[i].GeoObject.Point.pos
          });
        }
        $("#address").autocomplete({
          source: search_result,
          select: function (event, ui) {
            console.log(ui.item);
            var longlat = ui.item.longlat.split(" ");
            var myPlacemark = new ymaps.Placemark([longlat[1], longlat[0]], {
              balloonContentBody: ui.item.label,
              hintContent: ui.item.label
            });
            myMap.geoObjects.add(myPlacemark);
            myMap.setCenter([longlat[1], longlat[0]], 18);
          }
        });
      });
  });

  $.ui.autocomplete.filter = function (array, term) {
    return $.grep(array, function (value) {
      return value.label || value.value || value;
    });
  };

});


// yandex map api request
var myMapMobile;
var search_result = [];
ymaps.ready(function () {
  myMapMobile = new ymaps.Map("myMapMobile", {
    center: [55.76, 37.64],
    zoom: 7,
    behaviors: ['default', 'scrollZoom']
  });
  myMapMobile.controls.add('zoomControl');
});
// yandex map autocomplete
$(document).ready(function () {
  $("#address").keyup(function () {
    var search_query = $(this).val();
    search_result = [];
    $.getJSON(
      'https://geocode-maps.yandex.ru/1.x/?format=json&apikey=13a1e10e-79ea-41f2-9d1a-9f197be07777&geocode=' +
      search_query,
      function (data) {
        for (var i = 0; i < data.response.GeoObjectCollection.featureMember.length; i++) {
          search_result.push({
            label: data.response.GeoObjectCollection.featureMember[i].GeoObject.description + ' - ' +
              data.response.GeoObjectCollection.featureMember[i].GeoObject.name,
            value: data.response.GeoObjectCollection.featureMember[i].GeoObject.description + ' - ' +
              data.response.GeoObjectCollection.featureMember[i].GeoObject.name,
            longlat: data.response.GeoObjectCollection.featureMember[i].GeoObject.Point.pos
          });
        }
        $("#address").autocomplete({
          source: search_result,
          select: function (event, ui) {
            console.log(ui.item);
            var longlat = ui.item.longlat.split(" ");
            var myPlacemark = new ymaps.Placemark([longlat[1], longlat[0]], {
              balloonContentBody: ui.item.label,
              hintContent: ui.item.label
            });
            myMap.geoObjects.add(myPlacemark);
            myMap.setCenter([longlat[1], longlat[0]], 18);
          }
        });
      });
  });

  $.ui.autocomplete.filter = function (array, term) {
    return $.grep(array, function (value) {
      return value.label || value.value || value;
    });
  };

});
