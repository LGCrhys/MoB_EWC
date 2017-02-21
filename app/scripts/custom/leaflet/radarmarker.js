L.RadarVision = L.CircleMarker.extend({

});

L.radarMarker = function(pos, color) {

	var optionsRadar = {draggable: false, clickable: true},
		optionsVision = {weight: 2,radius: 100,color: color};
	
	optionsRadar.icon = new L.AwesomeMarkers.icon({
	                icon: 'star',
	                markerColor: color
	              });

	var marker = new L.Marker(pos, optionsRadar);
	var vision = new L.RadarVision(pos, optionsVision);

    return new L.LayerGroup([marker,vision]);
};