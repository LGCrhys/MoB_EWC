"use strict";
var app = angular.module('intelRef');

app
.controller("FollowController", function($scope,$rootScope,DataService,leafletData, filterCriteria) {

    angular.extend($scope, {
        center: {
	        lat: 48.4000000,
	        lng: -4.4833300,
	        zoom: 8
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

    var boatMarker = L.boatMarker(new L.LatLng(48.735572, -4.930420), {
		color: "#f1c40f",
		idleCircle: false  
		});

	var startDate = new Date();
	startDate.setUTCMinutes(0, 0, 0);

	var timeDimension = new L.TimeDimension({		
	        timeInterval: "2014-09-30/2014-10-30",	
	        period: "PT5M"
	    });

	var player = new L.TimeDimension.Player({
	    transitionTime: 100, 
	    loop: false,
	    startOver:true
	}, timeDimension);

	var timeDimensionControlOptions = {
	    player: player,
	    timeDimension: timeDimension,
	    position: 'bottomleft',
	    autoPlay: false,	    
        loopButton: true,
	    minSpeed: 1,
	    speedStep: 0.5,
	    maxSpeed: 15,
	    timeSliderDragUpdate: true
	};

	var timeDimensionControl = new L.Control.TimeDimension(timeDimensionControlOptions);

    leafletData.getMap().then(function(map) {    	
		// helper to share the timeDimension object between all layers
		map.timeDimension = timeDimension; 
		// otherwise you have to set the 'timeDimension' option on all layers.
		map.addLayer(editableLayers);
    	map.addLayer(boatMarker);
		map.addControl(drawControl);
		map.addControl(timeDimensionControl);
		leafletData.getLayers().then(function(baselayers) {
            map.on('draw:created', function (e) {
              var layer = e.layer;
              editableLayers.addLayer(layer);
              console.log(JSON.stringify(layer.toGeoJSON()));
            });
        });
    });
});
