"use strict";
var app = angular.module('intelRef');

app
.controller("FollowController", function($scope,$rootScope,$templateCache,leafletData) {

	$('#toolbar-title').first().text('Follow');

	angular.extend($scope, {
        center: {
	        lat: 48.4000000,
	        lng: -4.4833300,
	        zoom: 8
	    },
	    trajectory: {
            markers: {
                coordinates: _.pluck(trajectory.tracks, "pos"),
                patterns: [
                    {
                        offset: 12,
                        repeat: 25,
                        symbol: L.Symbol.dash({pixelSize: 10, pathOptions: {color: '#f00', weight: 2}})
                    },
                    {
                        offset: 0,
                        repeat: 25,
                        symbol: L.Symbol.dash({pixelSize: 0})
                    }
                ]
            }
        },
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

    var boatMarker = L.boatMarker(new L.LatLng(trajectory.tracks[0].pos[0],trajectory.tracks[0].pos[1]), {
		color: "#2196f3",
		idleCircle: false
	});

	var radarMarker = L.radarMarker(new L.LatLng(48.687334,-4.010010),"orange");

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
    	map.addLayer(radarMarker);
		map.addControl(drawControl);
		map.addControl(timeDimensionControl);
		map.addControl(measureControl);

		boatMarker.setHeading(trajectory.tracks[0].heading);

		var div = $('<div>').load('partials/boatDescription.html', function(content){
			boatMarker.bindPopup(Mustache.render(content,trajectory.informations));
		});
		
		leafletData.getLayers().then(function(baselayers) {
            map.on('draw:created', function (e) {
              var layer = e.layer;
              editableLayers.addLayer(layer);
            });
        });
        map.timeDimension.on('timeload', function(data) {
        	var position = _.find(trajectory.tracks, function(pos){
        		return pos.time === data.time;
        	});
        	if(position){
	        	boatMarker.setLatLng(new L.LatLng(position.pos[0],position.pos[1]));
				boatMarker.setHeading(position.heading);
	        }
	    });
    });


});
