(function(){
    'use strict';
    var mymap = L.map('mapid').setView([40.4146500, -3.7004000], 13);
            L.tileLayer('http://www.ign.es/wmts/ign-base?request=getTile&layer=IGNBaseTodo&TileMatrixSet=GoogleMapsCompatible&TileMatrix={z}&TileCol={x}&TileRow={y}&format=image/png', {
                attribution: '&copy; Instituto Geográfico Nacional',
                maxZoom: 20,
                id: 'callejero.IGN'
            }).addTo(mymap);
})();
