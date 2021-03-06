"use strict";
var app = angular.module('intelRef');

app
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue');
})
.controller('MainCtrl', function($scope, $timeout, $rootScope,DataService, filterCriteria) {
  var vm = this;

  vm.gridsterOptions = {
		margins: [10, 10],
		columns: 4,
    floating: true,
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
    if(criteria ==='frequence'){
      DataService.clearFrequenceColor();
      filterCriteria.frequence = {min:3000,max:10000};
    }
    if(criteria === 'type'){
      filterCriteria.type = "" ;
      filterCriteria.subType = "";
    }

    $rootScope.$broadcast("filterChange");
  }

	vm.dashboard = {
		widgets: [
		{
			col: 0,
			row: 0,
			sizeY: 1,
			sizeX: 1,
      criteria: 'frequence',
			name: "Radars par fréquence",
			chart: {
			  options: DataService.frequencyRange.options("graphFreq1"),
			  data: DataService.frequencyRange.data(),
			  api: {}
			}
		}, {
			col: 1,
			row: 0,
			sizeY: 1,
			sizeX: 1,
      criteria: "type",
			name: "Type and Subtype",
			chart: {
			  options: DataService.typeAndSubType.options("graphSunburst1"),
			  data: DataService.typeAndSubType.data(),
			  api: {},
			}
		}]
	};

  $scope.$on("filterChange", function(e,sourceId){
    updateGraph(sourceId);
    vm.datatable = DataService.getFilteredRadarsList(filterCriteria).radars;
  })
  function updateGraph(sourceId){
    //Did not understand, watch on sunburst did not work use API.
    if(!filterCriteria.hostilities.length){
      // /!\ Prevent D3JS issue /!\
      _.each(vm.dashboard.widgets, function(widget){
        if(widget.chart.options.chart.id !== sourceId){
          widget.chart.api.updateWithData([]);
        }
      }); 
    }
    else{      
      if(vm.dashboard.widgets[0].chart.options.chart.id !== sourceId){
        vm.dashboard.widgets[0].chart.api.updateWithData(DataService.frequencyRange.data());
        vm.dashboard.widgets[0].chart.api.refresh();
      }
      if(vm.dashboard.widgets[1].chart.options.chart.id !== sourceId){
        vm.dashboard.widgets[1].chart.api.updateWithData(DataService.typeAndSubType.data());
        vm.dashboard.widgets[1].chart.api.refresh();
      }
    }

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

}).controller("LeafletMapsController", function($scope,$rootScope,DataService,leafletData, filterCriteria) {

    $scope.hostile = true;
    $scope.inconnu = true;
    $scope.ami = true;

    $('#toolbar-title').first().text('INTEL Reference');

    var addressPointsToMarkers = function(points) {
      var markers = [];
      points.map(function(ap) {
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
        filterCriteria.hostilities = _.union(filterCriteria.hostilities,[e.target.className]);//.push(e.target.className);
    		$(e.target).addClass("active");
    	}
    	else{
    		$(e.target).removeClass("active");
        filterCriteria.hostilities = _.without(filterCriteria.hostilities,e.target.className);
    	}
      $rootScope.$broadcast("filterChange");
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
                imagery: {
                    name: "Imagery",
                    type: "agsBase",
                    layer: "Imagery",
                    visible: false
                },
                streets: {
                  name: "Streets",
                    type: "agsBase",
                    layer: "Streets",
                    visible: false
                },
                national: {
                    name: "National Geographic",
                    type: "agsBase",
                    layer: "NationalGeographic",
                    visible: false
                }
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
    });

    leafletData.getMap().then(function(map) {
    	map.addControl(new legendControl());
    });

    $scope.$on("filterChange", function(){
      $scope.markers = addressPointsToMarkers(DataService.getFilteredLocs(filterCriteria));
    })
});
