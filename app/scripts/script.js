var app = angular.module('plunker', ['nvd3', 'gridster', 'plunker.services','leaflet-directive']);

app
.controller('MainCtrl', function($scope, $timeout, DataService) {
  $scope.gridsterOptions = {
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
	
	$scope.dashboard = {
		widgets: [		
		{
			col: 0,
			row: 0,
			sizeY: 1,
			sizeX: 1,
			name: "Discrete Bar Chart",
			chart: {
			  options: DataService.discreteBarChart.options(),
			  data: DataService.discreteBarChart.data(),
			  api: {} 
			}
		},
		{
			col: 1,
			row: 0,
			sizeY: 1,
			sizeX: 1,
			name: "Candlestick Bar Chart",
			chart: {
			  options: DataService.candlestickBarChart.options(),
			  data: DataService.candlestickBarChart.data(),
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
});
app.controller("LeafletMapsController", [ "$scope", function($scope) {
            angular.extend($scope, {
                brest: {
                    lat: 48.4000000,
                    lng: -4.4833300,
                    zoom: 5
                },
                markers: {
                    brest: {
	                    lat: 48.4000000,
	                    lng: -4.4833300,
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
        }]);
