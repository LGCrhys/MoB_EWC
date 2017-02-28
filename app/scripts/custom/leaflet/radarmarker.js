L.RadarGroup = L.LayerGroup.extend({
	initialize: function (marker, vision) {	
		this.marker = marker;
		this.vision = vision;
		this.initialColor = vision.options.color;
		L.LayerGroup.prototype.initialize.call(this, [marker,vision]);
	},
	onAdd: function (map) {
		L.LayerGroup.prototype.onAdd.call(this,map);
        map.timeDimension.on('timeload', _.bind(this.checkDetections, this, map));
	},
	checkDetections: function(map, e){
		var boatDetected = false;
		map.eachLayer(function (layer) { 
		    if(layer.options && layer.options.type === "boatmarker"){
		    	boatDetected = this.vision.getBounds().contains(layer.getLatLng());
		    }
		},this);		
    	var color = boatDetected ? 'red' : 'gold';
    	this.vision.setStyle({fillColor: color, color: color});
	}
});

L.radarMarker = function(pos, color) {

	var optionsRadar = {draggable: false, clickable: true},
		optionsVision = {weight: 2, color: 'gold'};
	
	optionsRadar.icon = new L.AwesomeMarkers.icon({
	                icon: 'star',
	                markerColor: color
	              });

	marker = new L.Marker(pos, optionsRadar);
	vision = new L.circle((pos), 40000, optionsVision);

    return new L.RadarGroup(marker,vision);
};