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
		map.eachLayer(function (layer) { 
		    if(layer.options && layer.options.type === "boatmarker"){
		    	var color = this.vision.getBounds().contains(layer.getLatLng()) ? 'red' : this.initialColor;
		    	this.vision.setStyle({fillColor: color, color: color});
		    }
		},this);
	}
});

L.radarMarker = function(pos, color) {

	var optionsRadar = {draggable: false, clickable: true},
		optionsVision = {weight: 2, color: color};
	
	optionsRadar.icon = new L.AwesomeMarkers.icon({
	                icon: 'star',
	                markerColor: color
	              });

	marker = new L.Marker(pos, optionsRadar);
	vision = new L.circle((pos), 50000, optionsVision);

    return new L.RadarGroup(marker,vision);
};