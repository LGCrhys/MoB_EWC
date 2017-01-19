"use strict";
var app = angular.module('intelRef');

app
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue');
})
.controller('MainCtrl', function($scope, $timeout, $rootScope, DataService, filterCriteria) {
  var vm = this;

  vm.gridsterOptions = {
		margins: [20, 20],
		columns: 4,
		mobileModeEnabled: false,
		draggable: {
			handle: 'h3'
		},
		resizable: {
     enabled: true,
     handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],

     // optional callback fired when resize is started
     start: function(event, $element, widget) {},

     // optional callback fired when item is resized,
     resize: function(event, $element, widget) {
       if (widget.chart.api) widget.chart.api.update();
     },

      // optional callback fired when item is finished resizing
     stop: function(event, $element, widget) {
       $timeout(function(){
         if (widget.chart.api) widget.chart.api.update();
       },400)
     }
    }
	};

  vm.deleteCriteria = function(criteria){
    console.log("criteria " + criteria)
    if(criteria ==='frequence')
      filterCriteria.frequence = "";
    if(criteria === 'type')
      filterCriteria.type = "" ;
    if(criteria === 'subType')
      filterCriteria.subType = "";

    $rootScope.$broadcast("filterChange");
  }

  vm.filterCriteria = filterCriteria;
	vm.dashboard = {
		widgets: [
		{
			col: 0,
			row: 0,
			sizeY: 1,
			sizeX: 1,
			name: "Radars par fréquence",
			chart: {
			  options: DataService.frequencyRange.options(),
			  data: DataService.frequencyRange.data(),
			  api: {}
			}
		}, {
			col: 1,
			row: 0,
			sizeY: 1,
			sizeX: 1,
			name: "Type and Subtype",
			chart: {
			  options: DataService.typeAndSubType.options(),
			  data: DataService.typeAndSubType.data(),
			  api: {},
			}
		},{
			col: 0,
			row: 1,
			sizeY: 1,
			sizeX: 1,
			name: "Radars par fréquence",
			chart: {
			  options: DataService.stackedFrequencyRange.options(),
			  data: DataService.stackedFrequencyRange.data(),
			  api: {}
			}
		}]
	};

  $scope.$on("filterChange", function(){
    updateGraph();
    vm.datatable = DataService.getFilteredRadarsList(filterCriteria).radars;
  })
  function updateGraph(){
    //Did not understand, watch on sunburst did not work use API.
    vm.dashboard.widgets[0].chart.api.updateWithData(DataService.frequencyRange.data());
    vm.dashboard.widgets[1].chart.api.updateWithData(DataService.typeAndSubType.data());
    vm.dashboard.widgets[2].chart.api.updateWithData(DataService.stackedFrequencyRange.data());

  }

  // We want to manually handle `window.resize` event in each directive.
  // So that we emulate `resize` event using $broadcast method and internally subscribe to this event in each directive
  // Define event handler
  $scope.events = {
    resize: function(e, scope){
      $timeout(function(){
        scope.api.update();
      },200)
    }
  };
  angular.element(window).on('resize', function(e){
    $scope.$broadcast('resize');
  });

  // We want to hide the charts until the grid will be created and all widths and heights will be defined.
  // So that use `visible` property in config attribute
  $scope.config = {
    visible: false
  };
  $timeout(function(){
    $scope.config.visible = true;
  }, 200);
  vm.datatable = DataService.getFilteredRadarsList(filterCriteria).radars;

})
.controller("LeafletMapsController", function($scope,DataService,leafletData, filterCriteria) {

    $scope.hostile = true;
    $scope.inconnu = true;
    $scope.ami = true;

    var addressPointsToMarkers = function(points) {
      var markers = [];
      points.map(function(ap) {
        if(ap.hostilite && !$scope[ap.hostilite.toLowerCase()]){
          return false;
        }
        markers.push({
          layer: 'locs',
  	      lat: parseFloat(ap.latitude.replace(',','.')),
  	      lng: parseFloat(ap.longitude.replace(',','.')),
  	      icon: {
  	      		type: 'awesomeMarker',
                  icon: 'star',
                  markerColor: (ap.hostilite==="Hostile")?'red':((ap.hostilite==="Ami")?'green':'orange')
              }
        });
      });
      return markers;
    };

    $scope.markers = addressPointsToMarkers(DataService.getFilteredLocs(filterCriteria));


	var customControl = L.Control.extend({

	  options: {
	    position: 'topleft'
	  },

	  onAdd: function (map) {
	  	 var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

	    container.style.backgroundColor = 'white';
	    container.style.backgroundImage = "url('assets/refresh.png')";
	    container.style.backgroundSize = "25px 25px";
	    container.style.width = '25px';
	    container.style.height = '25px';

	    container.onclick = function(){
	      //TODO
	    }
	    return container
	  },

	});

	var legendControl = L.Control.extend({

		options:{position: 'bottomleft'},

        onAdd: function (map) {
            var div = L.DomUtil.create('div', 'info legend'),
                labels = [];


            labels.push('<i class="hostile active" ></i> Hostile');
            labels.push('<i class="inconnu active" ></i> Inconnu');
            labels.push('<i class="ami active" ></i> Ami');

            div.innerHTML = labels.join('<br>');

            $('.hostile', div).on('click', $scope.toggleClass);
            $('.inconnu', div).on('click', $scope.toggleClass);
            $('.ami', div).on('click', $scope.toggleClass);

            return div;
        }
    });

    $scope.toggleClass = function(e){
    	if(!$(e.target).hasClass('active')){
        $scope[e.target.className] = true;
    		$(e.target).addClass("active");
    	}
    	else{
    		$(e.target).removeClass("active");
        $scope[e.target.className] = false;
    	}
      $scope.markers = addressPointsToMarkers(DataService.getFilteredLocs());
    };

    angular.extend($scope, {
       center: {
	        lat: 48.4000000,
	        lng: -4.4833300,
	        zoom: 5
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
            },
            overlays: {
                locs: {
                    name: 'Locs',
                    type: 'markercluster',
                    visible: true
                }
            }
        }
    });

    leafletData.getLayers().then(function(layers) {
        $scope.markerClusterGrp = layers.overlays.locs;
        var clusters            = $scope.markerClusterGrp.getLayers();
        $scope.markerClusterGrp.on('clusterclick', function (a) {
            var clusterObjects = a.layer.getAllChildMarkers();
            //TODO
        });
        $scope.markerClusterGrp.on('click', function(a){
        	//TODO
        })
    });

    leafletData.getMap().then(function(map) {
    	map.addControl(new customControl());
    	map.addControl(new legendControl());
    });

    $scope.$on("filterChange", function(){
      $scope.markers = addressPointsToMarkers(DataService.getFilteredLocs(filterCriteria));
    })
});
