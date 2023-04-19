let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.746745, 37.601445],
    zoom: 16,
    controls: [],
  });

  var myPlacemark = new ymaps.Placemark(
    [55.746907, 37.601915],
    {
      hintContent: "",
    },
    {
      draggable: false,
      iconLayout: "default#imageWithContent",
      iconImageHref: "../img/svg/marker.svg",
      iconImageSize: [58, 73],
      iconImageOffset: [-16, -16],
    }
  );
  myMap.geoObjects.add(myPlacemark);
};

ymaps.ready(init);
