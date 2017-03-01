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

	var boatMarkers = [];
	_.each(trajectory, function(t){
		boatMarkers.push(L.boatMarker(t, {
			color: "#2196f3",
			idleCircle: false
		}));
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
    	//map.addLayer(boatMarker);
    	_.each(radarMarkers, function(radarMarker){
    		map.addLayer(radarMarker);
    	})
    	_.each(boatMarkers, function(boatMarker){
    		map.addLayer(boatMarker);
    	})
		map.addControl(drawControl);
		map.addControl(timeDimensionControl);
		map.addControl(measureControl);
		
		var div = $('<div>').load('partials/boatDescription.html', function(content){
			_.each(trajectory, function(t,i){
				boatMarkers[i].bindPopup(Mustache.render(content,t.informations));				
			});
		});
		
		leafletData.getLayers().then(function(baselayers) {
            map.on('draw:created', function (e) {
              var layer = e.layer;
              editableLayers.addLayer(layer);
            });
        });
        map.timeDimension.on('timeload', function(data) {
        	_.each(trajectory, function(t,i){
				var position = _.find(t.tracks, function(pos){
	        		return pos.time === data.time;
	        	});
	        	if(position){
		        	boatMarkers[i].setLatLng(new L.LatLng(position.pos[0],position.pos[1]));
					boatMarkers[i].setHeading(position.heading);
		        }
			});
	    });
    });


});
