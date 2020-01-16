;(function () {
  if ( document.querySelector('.maps') == null ) return;

  ymaps.ready(init);

  var centerCoords = [50.441181, 30.525015];

  function init(){
    var myMap = new ymaps.Map("map", {
        center: centerCoords,
        zoom: 11,
        controls: ['typeSelector', 'fullscreenControl', 'zoomControl'],
    });

    myMap.behaviors.disable('scrollZoom');

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div>$[properties.iconContent]</div>'
    );

    myMap.setCenter(centerCoords);

  }
})();
