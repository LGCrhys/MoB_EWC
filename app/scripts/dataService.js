"use strict";
var getOriginalRadar = (function (){
  function setOrigin(radar, origin){
    radar.origin = origin;
    return radar;
  }

  _.each(locs, function(loc){
    _.each(loc.Radars, function(radar){
      radar.latitude = loc.latitude;
      radar.longitude = loc.longitude;
      radar.hostilite = loc.hostilite;
    })
  })

  _.each(carriers, function(carrier){
    _.each(carrier.Radars, function(radar){
      radar.type = carrier.type;
      radar.subType = carrier.ssTypeSea || carrier.ssTypeLand || carrier.ssTypeAir;
    })
  })

  var radarsLocs =_.map(_.flatten(_.pluck(locs, "Radars")), function(radar){return setOrigin(radar, 'Loc') });
  var radarsCarriers = _.map(_.flatten(_.pluck(carriers, "Radars")), function(radar){return setOrigin(radar, 'Carrier')});
  var radars = radarsLocs.concat(radarsCarriers);
  return function(){
    return {
      radars:radars,
      radarsCarriers:radarsCarriers,
      radarsLocs:radarsLocs
    };
  };
})();


var filterCriteria ={
    frequence:"",
    type:"",
    subType:"",
    name:""
}

function getFilteredRadarsList(){
  var originalRadars = getOriginalRadar();
  var result = {
    radars:originalRadars.radars.slice(),
    radarsCarriers:originalRadars.radarsCarriers.slice(),
    radarsLocs:originalRadars.radarsLocs.slice()
  }
  if(filterCriteria.type){
    result.radars = _.filter(result.radars, function(radar){return radar.type===filterCriteria.type});
    result.radarsCarriers = _.filter(result.radarsCarriers, function(radar){return radar.type===filterCriteria.type});
    result.radarsLocs = _.filter(result.radarsLocs, function(radar){return radar.type===filterCriteria.type});
  }
  if(filterCriteria.subType){
    result.radars = _.filter(result.radars, function(radar){return radar.subType===filterCriteria.subType; });
    result.radarsCarriers = _.filter(result.radarsCarriers, function(radar){return radar.subType===filterCriteria.subType;});
    result.radarsLocs = _.filter(result.radarsLocs, function(radar){return radar.subType===filterCriteria.subType;});
  }
  if(filterCriteria.name){
    result.radars = _.filter(result.radars, function(radar){return radar.nom === filterCriteria.name})
    result.radarsCarriers = _.filter(result.radarsCarriers, function(radar){return radar.nom === filterCriteria.name})
    result.radarsLocs = _.filter(result.radarsLocs, function(radar){return radar.nom === filterCriteria.name})
  }
  if (filterCriteria.frequence){
    var range;
    switch(filterCriteria.frequence){
      case "3000-4000":
        range=[3000, 4000];
        break;
      case "4001-5000":
        range = [4001, 5000];
        break;
      case "5001-6000":
        range = [5001, 6000];
        break;
      case "6001-7000":
        range = [6001, 7000];
        break;
      case "7001-8000":
        range = [7001, 8000];
        break;
      case "8001-9000":
        range = [8001, 9000];
        break;
      case "9001-10000":
        range = [9001, 10000];
        break;
    }
    result.radars = filterByFrequencies(result.radars, range);
    result.radarsCarriers=filterByFrequencies(result.radarsCarriers, range);
    result.radarsLocs=filterByFrequencies(result.radarsLocs, range);
  }
  return result;
}

function filterByFrequencies(radars, frequencyRange){
  var result = [];
  _.each(radars, function(radar){
    var modesInRange = _.filter(radar.modes, function(mode){
      var radarFrequence= parseFloat(mode.sousMode.frequence);
      return radarFrequence>=frequencyRange[0] && radarFrequence<=frequencyRange[1];
    })
    if(modesInRange.length){
      result.push(radar);
    }
  })
  return result;
}

var getFilteredLocs = function(){
  //var tmp = getOriginalRadar().radarsLocs.slice();
  /*var filteredLocs = [];
  _.each(locs, function(loc,i){
    if(filterCriteria.type){
      if(!(_.filter(loc.Radars, function(radar){        
        radar.type = carrier.type;
        radar.subType = carrier.ssTypeSea || carrier.ssTypeLand || carrier.ssTypeAir;
        return radar.type===filterCriteria.type
      }).length)) return false;
    }
    if(filterCriteria.subType){
      if(!(_.filter(loc.Radars, function(radar){return radar.subtype===filterCriteria.subType}).length)) return false;
    }
    if(filterCriteria.name){
      if(!(_.filter(loc.Radars, function(radar){return radar.nom===filterCriteria.name}).length)) return false;
    }
    filteredLocs.push(loc);
  });
  return filteredLocs;*/
  var filteredLocs = getOriginalRadar().radarsLocs.slice();
  return _.uniq(filteredLocs,function(item){
    return item.latitude && item.longitude;
  });
};

angular.module('plunker.services', [])
.factory('DataService', function($rootScope) {

  return {
    frequencyRange: {
      options: frequencyRangeChartOptions,
      data: frequencyRangeChartData
    },
    stackedFrequencyRange:{
      options: getStackedLocationByFrequencyChartOptions ,
      data: getDataStackedRadarFrequencies
    },
    typeAndSubType:{
      options: getTypeSubTypeSunBurstChartOptions,
      data: getDataTypeSubTypeSunBurst
    },
    getFilteredLocs : getFilteredLocs,
    getFilteredRadarsList: getFilteredRadarsList
  };


	function frequencyRangeChartOptions() {
	  return {
            chart: {
                type: 'discreteBarChart',
                margin : {
                    top: 10,
                    right: 20,
                    bottom: 30,
                    left: 55
                },
                discretebar:{
                  dispatch: {
                      elementClick: function(e) {
                        filterCriteria.frequence=e.data.label;
                        $rootScope.$broadcast("filterChange");
                    }   //e.data.label
                  }
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.0f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Plage de fréquence',
                    axisLabelDistance: -10
                },
                yAxis: {
                    axisLabel: 'total',
                    axisLabelDistance: -10
                }
            }
        };
	};
	function frequencyRangeChartData() {
	  return [
            {
                key: "Radar by Frequency",
                values: getRadarByFrequency()
            }
        ];
	};

  function getStackedLocationByFrequencyChartOptions(){
    return {
        chart: {
            type: 'multiBarChart',
            margin : {
                top: 220,
                right: 20,
                bottom: 45,
                left: 45
            },
            clipEdge: true,
            duration: 500,
            stacked: true,
            xAxis: {
                axisLabel: 'Plage de fréquence',
                showMaxMin: false,
                tickFormat: getFrequencyRangeTickFunction()
            },
            yAxis: {
                axisLabel: 'count',
                axisLabelDistance: -20,
                tickFormat: function(d) {return d;}
            }
        }
    };
  };
  function getFrequencyRangeTickFunction(){
    var tickLabels=[
                  "3000-4000",
                  "4001-5000",
                  "5001-6000",
                  "6001-7000",
                  "7001-8000",
                  "8001-9000",
                  "9001-10000"
    ];

    return function(d){
      return tickLabels[d];
    };
  };

  function getTypeSubTypeSunBurstChartOptions(){
      return {
            chart: {
                type: 'sunburstChart',
                color: d3.scale.category20c(),
                duration: 250,
                margin : {
                  top: 50,
                  right: 10,
                  bottom: 10,
                  left: 10
                },
                sunburst:{
                  dispatch: {
                      chartClick: function(e) {
                        var clickedElement = e.pos.target.__data__;

                        if (clickedElement.depth===0){
                          filterCriteria.type="";
                          filterCriteria.subType="";
                        }
                        if(clickedElement.depth===1)
                          filterCriteria.type=clickedElement.name;
                          filterCriteria.subType="";
                        if(clickedElement.depth===2){
                          filterCriteria.subType=clickedElement.name;
                        }

                        $rootScope.$broadcast("filterChange");
                    }
                  }
                }
            }
        };
  };


  function getRadarByFrequency(){
    var modes =_.flatten(_.map(getFilteredRadarsList().radars, function(radar){return radar.modes}));
    var modeByFrequency  = [
                  {label:"3000-4000", value:0,},
                  {label:"4001-5000", value:0,},
                  {label:"5001-6000", value:0,},
                  {label:"6001-7000", value:0,},
                  {label:"7001-8000", value:0,},
                  {label:"8001-9000", value:0,},
                  {label:"9001-10000", value:0},
                ];
    var reduction = getReductionByFrequencyFunctionForProperty("value");
    return  _.reduce(modes, reduction, modeByFrequency);
  };

  function getDataStackedRadarFrequencies(){
    var locsArray = prepareArrayForCountByFrequency();
    var carriersArray=prepareArrayForCountByFrequency();
    return [{
          key: 'Loc',
          color: '#bcbd22',
          values: countRadarsByFrequency(getFilteredRadarsList().radarsLocs, locsArray)
          },
          {
            key: 'Carrier',
            color: '#1f77b4',
            values: countRadarsByFrequency(getFilteredRadarsList().radarsCarriers, carriersArray)
          }
        ];
  };

  function countRadarsByFrequency(radars, resultArray){
    var modes =_.flatten(_.map(radars, function(radar){return radar.modes}));
    var reduction = getReductionByFrequencyFunctionForProperty("y");
    return  _.reduce(modes, reduction, resultArray);
  };

  function getReductionByFrequencyFunctionForProperty(property){
    return function reduction(memo, mode){
      var frequence = parseFloat(mode.sousMode.frequence);
      if(frequence>=3000 && frequence<=4000){
        memo[0][property] = memo[0][property] +1;
      }
      if(frequence>=4001 && frequence<=5000){
        memo[1][property] = memo[1][property] +1;
      }
      if(frequence>=5001 && frequence<=6000){
        memo[2][property] = memo[2][property] +1;
      }
      if(frequence>=6001 && frequence<=7000){
        memo[3][property] = memo[3][property] +1;
      }
      if(frequence>=7001 && frequence<=8000){
        memo[4][property] = memo[4][property] +1;
      }
      if(frequence>=8001 && frequence<=9000){
        memo[5][property] = memo[5][property] +1;
      }
      if(frequence>=9001 && frequence<=10000){
        memo[6][property] = memo[6][property] +1;
      }
      return memo;
    }
  }

  function prepareArrayForCountByFrequency(){
    var result =[];
    for (var index=0; index<7; index++){
      result.push({x:index, y:0});
    }
    return result;
  }

  function getDataTypeSubTypeSunBurst(){
    var result = [{
      "name":"radar",
      "children":[]
    }];
    var filteredRadars = getFilteredRadarsList().radarsCarriers;
    var subTypeCount = {};
    filteredRadars.forEach(function(radar){
      if(! subTypeCount[radar.type]){
        subTypeCount[radar.type]={};
      }
      if(subTypeCount[radar.type][radar.subType]){
        subTypeCount[radar.type][radar.subType].count = subTypeCount[radar.type][radar.subType].count +1;
      }else{
        subTypeCount[radar.type][radar.subType] = {count:1};
      }
    });

    var result = {"name":"radar", children:[]};
    for(var type in subTypeCount){
      var child = {"name":type, children:[]};
      for(var subtype in subTypeCount[type]){
        child.children.push({"name":subtype, "size":subTypeCount[type][subtype].count});
      }
      result.children.push(child);
    }

    return [result];
  }
});
