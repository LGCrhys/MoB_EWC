"use strict";
var app = angular.module('intelRef');

app
.controller("FollowController", function($scope,$rootScope,$templateCache,leafletData, DataService) {

	$('#toolbar-title').first().text('Follow');

	var trajectories = {};
	_.each(trajectory, function(t,i){
		trajectories['ship'+i] = {
			coordinates: _.pluck(t.tracks, "pos"),
            patterns: [
                {
                    offset: 12,
                    repeat: 25,
                    symbol: L.Symbol.dash({pixelSize: 10, pathOptions: {color: '#f00', weight: 1}})
                },
                {
                    offset: 0,
                    repeat: 25,
                    symbol: L.Symbol.dash({pixelSize: 0})
                }
            ]
		} 
	});

	angular.extend($scope, {
        center: {
	        lat: 48.4000000,
	        lng: -4.4833300,
	        zoom: 7
	    },
	    trajectory: trajectories,
        controls: {
            fullscreen: {
                position: 'topleft'
            }
        },
        events: {
            map: {
                enable: ['moveend', 'popupopen'],
                logic: 'emit'
            },
            marker: {
                enable: [],
                logic: 'emit'
            }
        },
        layers: {
            baselayers: {
                bingAerial: {
	                name: 'Bing Aerial',
	                type: 'bing',
	                key: 'Aj6XtE1Q1rIvehmjn2Rh1LR2qvMGZ-8vPS9Hn3jCeUiToM77JFnf-kFRzyMELDol',
	                layerOptions: {
	                    type: 'Aerial'
	                }
	            },
	            bingRoad: {
	                name: 'Bing Road',
	                type: 'bing',
	                key: 'Aj6XtE1Q1rIvehmjn2Rh1LR2qvMGZ-8vPS9Hn3jCeUiToM77JFnf-kFRzyMELDol',
	                layerOptions: {
	                    type: 'Road'
	                }
	            },
	            bingAerialWithLabels: {
	                name: 'Bing Aerial With Labels',
	                type: 'bing',
	                key: 'Aj6XtE1Q1rIvehmjn2Rh1LR2qvMGZ-8vPS9Hn3jCeUiToM77JFnf-kFRzyMELDol',
	                layerOptions: {
	                    type: 'AerialWithLabels'
	                }
	            },
            }
        }
    });


	var editableLayers = new L.FeatureGroup();

    var options = {
	    position: 'topleft',
	    draw: {
	        polyline: {
	            shapeOptions: {
	                color: '#f357a1',
	                weight: 10
	            }
	        },
	        polygon: {
	            allowIntersection: false, // Restricts shapes to simple polygons
	            drawError: {
	                color: '#e1e100', // Color the shape will turn when intersects
	                message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
	            },
	            shapeOptions: {
	                color: '#bada55'
	            }
	        },
	        circle: {
	        },
	        rectangle: {
	        }
	    },
	    edit: {
	        featureGroup: editableLayers,
	        remove: true
	    }
	};

	var drawControl = new L.Control.Draw(options);

    var boatMarker = L.boatMarker(trajectory[0], {
		color: "#2196f3",
		idleCircle: false
	});
	var boatMarker1 = L.boatMarker(trajectory[1], {
		color: "#2196f3",
		idleCircle: false
	});
	var boatMarker2 = L.boatMarker(trajectory[2], {
		color: "#2196f3",
		idleCircle: false
	});
	var boatMarker3 = L.boatMarker(trajectory[3], {
		color: "#2196f3",
		idleCircle: false
	});
	var boatMarker4 = L.boatMarker(trajectory[4], {
		color: "#2196f3",
		idleCircle: false
	});
	var boatMarker5 = L.boatMarker(trajectory[5], {
		color: "#2196f3",
		idleCircle: false
	});
	var boatMarker6 = L.boatMarker(trajectory[6], {
		color: "#2196f3",
		idleCircle: false
	});
	var boatMarker7 = L.boatMarker(trajectory[7], {
		color: "#2196f3",
		idleCircle: false
	});
	var boatMarker8 = L.boatMarker(trajectory[8], {
		color: "#2196f3",
		idleCircle: false
	});
	var boatMarker9 = L.boatMarker(trajectory[9], {
		color: "#2196f3",
		idleCircle: false
	});


	var generateRadarMarkers = function(points) {
      var markers = [];
      //LatLng(46.83013, -7.36084),LatLng(50.47149, -7.36084),LatLng(50.47149, 0.09888),LatLng(46.83013, 0.09888)
      var corner1 = L.latLng(52.2008737173322, 0.54931640625),
	  corner2 = L.latLng(44.59046718130883, -11.84326171875),
	  bounds = L.latLngBounds(corner1, corner2);
      points.map(function(ap,i) {
      	var point = new L.LatLng(parseFloat(ap.latitude.replace(',','.')),parseFloat(ap.longitude.replace(',','.')));
      	if(markers.length < 30 && bounds.contains(point)){
        	markers.push(L.radarMarker(point,(ap.hostilite==="Hostile")?'red':((ap.hostilite==="Ami")?'green':'orange')));
    	}
      });
      return markers;
    };

    var radarMarkers = generateRadarMarkers(DataService.getFilteredLocs());

	var timeDimension = new L.TimeDimension({		
	        timeInterval: "2017-02-14/2017-02-17",	
	        period: "PT1H",
	        currentTime: new Date("2017-02-14")
	    });

	var player = new L.TimeDimension.Player({
	    transitionTime: 500, 
	    loop: false,
	    startOver:false
	}, timeDimension);

	var timeDimensionControlOptions = {
	    player: player,
	    timeDimension: timeDimension,
	    position: 'bottomleft',
	    autoPlay: false,	    
        loopButton: true,
	    minSpeed: 1,
	    speedStep: 0.5,
	    speed: 5,
	    maxSpeed: 15,
	    timeSliderDragUpdate: true
	};

	var timeDimensionControl = new L.Control.TimeDimension(timeDimensionControlOptions);

	var measureControl = new L.Control.Measure({});

    leafletData.getMap().then(function(map) {    	
		// helper to share the timeDimension object between all layers
		map.timeDimension = timeDimension; 
		// otherwise you have to set the 'timeDimension' option on all layers.
		map.addLayer(editableLayers);
    	map.addLayer(boatMarker);
    	_.each(radarMarkers, function(radarMarker){
    		map.addLayer(radarMarker);
    	})
		map.addControl(drawControl);
		map.addControl(timeDimensionControl);
		map.addControl(measureControl);
    	map.addLayer(boatMarker1);
    	map.addLayer(boatMarker2);
    	map.addLayer(boatMarker3);
    	map.addLayer(boatMarker4);
    	map.addLayer(boatMarker5);
    	map.addLayer(boatMarker6);
    	map.addLayer(boatMarker7);
    	map.addLayer(boatMarker8);
    	map.addLayer(boatMarker9);
		var div = $('<div>').load('partials/boatDescription.html', function(content){
			boatMarker.bindPopup(Mustache.render(content,trajectory[0].informations));
			boatMarker1.bindPopup(Mustache.render(content,trajectory[1].informations));
			boatMarker2.bindPopup(Mustache.render(content,trajectory[2].informations));
			boatMarker3.bindPopup(Mustache.render(content,trajectory[3].informations));
			boatMarker4.bindPopup(Mustache.render(content,trajectory[4].informations));
			boatMarker5.bindPopup(Mustache.render(content,trajectory[5].informations));
			boatMarker6.bindPopup(Mustache.render(content,trajectory[6].informations));
			boatMarker7.bindPopup(Mustache.render(content,trajectory[7].informations));
			boatMarker8.bindPopup(Mustache.render(content,trajectory[8].informations));
			boatMarker9.bindPopup(Mustache.render(content,trajectory[9].informations));
		});
		
		leafletData.getLayers().then(function(baselayers) {
            map.on('draw:created', function (e) {
              var layer = e.layer;
              editableLayers.addLayer(layer);
            });
        });
        map.timeDimension.on('timeload', function(data) {
        	var position = _.find(trajectory[0].tracks, function(pos){
        		return pos.time === data.time;
        	});
        	if(position){
	        	boatMarker.setLatLng(new L.LatLng(position.pos[0],position.pos[1]));
				boatMarker.setHeading(position.heading);
	        }
        	var position = _.find(trajectory[1].tracks, function(pos){
        		return pos.time === data.time;
        	});
        	if(position){
	        	boatMarker1.setLatLng(new L.LatLng(position.pos[0],position.pos[1]));
				boatMarker1.setHeading(position.heading);
	        }
        	var position = _.find(trajectory[2].tracks, function(pos){
        		return pos.time === data.time;
        	});
        	if(position){
	        	boatMarker2.setLatLng(new L.LatLng(position.pos[0],position.pos[1]));
				boatMarker2.setHeading(position.heading);
	        }
        	var position = _.find(trajectory[3].tracks, function(pos){
        		return pos.time === data.time;
        	});
        	if(position){
	        	boatMarker3.setLatLng(new L.LatLng(position.pos[0],position.pos[1]));
				boatMarker3.setHeading(position.heading);
	        }
        	var position = _.find(trajectory[4].tracks, function(pos){
        		return pos.time === data.time;
        	});
        	if(position){
	        	boatMarker4.setLatLng(new L.LatLng(position.pos[0],position.pos[1]));
				boatMarker4.setHeading(position.heading);
	        }
        	var position = _.find(trajectory[5].tracks, function(pos){
        		return pos.time === data.time;
        	});
        	if(position){
	        	boatMarker5.setLatLng(new L.LatLng(position.pos[0],position.pos[1]));
				boatMarker5.setHeading(position.heading);
	        }
        	var position = _.find(trajectory[6].tracks, function(pos){
        		return pos.time === data.time;
        	});
        	if(position){
	        	boatMarker6.setLatLng(new L.LatLng(position.pos[0],position.pos[1]));
				boatMarker6.setHeading(position.heading);
	        }
        	var position = _.find(trajectory[7].tracks, function(pos){
        		return pos.time === data.time;
        	});
        	if(position){
	        	boatMarker7.setLatLng(new L.LatLng(position.pos[0],position.pos[1]));
				boatMarker7.setHeading(position.heading);
	        }
        	var position = _.find(trajectory[8].tracks, function(pos){
        		return pos.time === data.time;
        	});
        	if(position){
	        	boatMarker8.setLatLng(new L.LatLng(position.pos[0],position.pos[1]));
				boatMarker8.setHeading(position.heading);
	        }
        	var position = _.find(trajectory[9].tracks, function(pos){
        		return pos.time === data.time;
        	});
        	if(position){
	        	boatMarker9.setLatLng(new L.LatLng(position.pos[0],position.pos[1]));
				boatMarker9.setHeading(position.heading);
	        }
	    });
    });


});
