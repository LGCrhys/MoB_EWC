var app = angular.module('plunker', ['nvd3', 'gridster', 'plunker.services','leaflet-directive']);

app
.controller('MainCtrl', function($scope, $timeout, DataService) {
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
    },
	};

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
			  api: {}
			}
		},{
			col: 0,
			row: 2,
			sizeY: 1,
			sizeX: 2,
			name: "Radars par fréquence",
			chart: {
			  options: DataService.stackedFrequencyRange.options(),
			  data: DataService.stackedFrequencyRange.data(),
			  api: {}
			}
		}]
	};

  // We want to manually handle `window.resize` event in each directive.
  // So that we emulate `resize` event using $broadcast method and internally subscribe to this event in each directive
  // Define event handler
  $scope.events = {
    resize: function(e, scope){
      $timeout(function(){
        scope.api.update()
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
  vm.datatable = DataService.getRadars();

});
app.controller("LeafletMapsController", [ "$scope","leafletData","leafletMarkerEvents", function($scope,leafletData,leafletMarkerEvents) {
	var markersData = [];

	angular.extend($scope, {
	    center: {
	        lat: 48.4000000,
	        lng: -4.4833300,
	        zoom: 5
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
                search: {
                    name: 'search',
                    type: 'group',
                    visible: true,
                    layerParams: {
                        showOnSelector: false
                    }
                }
            },
            controls: {},
            markers: {}
	    }
	});

	$scope.events = {
        markers: {
            enable: leafletMarkerEvents.getAvailableEvents(),
        }
    };

	   markersData.filter(function(data) {
	       $scope.markers[data.title] = {
	           title: data.title,
	           lat: data.loc[0],
	           lng: data.loc[1],
	           layer: 'search',
	           label: {
	               message: data.title
	           }
	       };
	   });

	 leafletData.getLayers().then(function(baselayers) {
	           /*console.log(baselayers.overlays.search);
	           angular.extend($scope.controls, {
	               search: {
	                   layer: baselayers.overlays.search
	               }
	           });*/
	       });
}]);
