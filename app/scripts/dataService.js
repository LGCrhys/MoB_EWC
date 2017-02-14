"use strict";



angular.module('intelRef')
.factory('DataService', function($rootScope, filterCriteria, dataProvider) {

  return {
    frequencyRange: {
      options: frequencyRangeChartOptions,
      data: frequencyRangeChartData
    },
    typeAndSubType:{
      options: getTypeSubTypeSunBurstChartOptions,
      data: getDataTypeSubTypeSunBurst
    },
    getFilteredLocs : dataProvider.getFilteredLocs,
    getFilteredRadarsList: dataProvider.getFilteredRadars
  };


	function frequencyRangeChartOptions(id) {
	  return {
            chart: {
                id: id,
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
                        filterCriteria.frequence.min=e.data.xmin;
                        filterCriteria.frequence.max=e.data.xmax;
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
                    axisLabelDistance: 10,
                    staggerLabels: true
                },
                //xScale: function e(e){return ["5000","6000"]},
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

  function getTypeSubTypeSunBurstChartOptions(id){
      var colorsByType = {
        "radar" : d3.scale.linear().domain([0,10]).range(["#C9C9C9","#C9C9C9"]),
        "sea" : d3.scale.linear().domain([0,10]).range(["#C9C9C9","#9FB6FC"]), 
        "land" : d3.scale.linear().domain([0,10]).range(["#C9C9C9","#BF8654"]), 
        "air" : d3.scale.linear().domain([0,10]).range(["#C9C9C9","#EDE161"])
      };
      var colorCount = 0;
      return {
            chart: {
                id: id,
                type: 'sunburstChart',
                color: function e(e){
                  colorCount += 1;
                  return colorsByType[e.toLowerCase()](colorCount);
                },
                duration: 250,
                showLabels: true,
                labelFormat: function (d){
                  return d.name + ' ['+d.value+']';
                },
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

                        $rootScope.$broadcast("filterChange",id);
                    }
                  }
                }
            }
        };
  };


  function getRadarByFrequency(){
    var modes =_.flatten(_.map(dataProvider.getFilteredRadars(filterCriteria).radars, function(radar){return radar.modes}));
    var step = (filterCriteria.frequence.max-filterCriteria.frequence.min) / 10;
    var range = _.range(filterCriteria.frequence.min,filterCriteria.frequence.max,step);// todo modification
    var modeByFrequency = [];
    _.each(range, function(tick){
      modeByFrequency.push({label:(tick+1)+'-'+(tick+step), value:0, xmin:tick, xmax:tick+step});
    })
    var reduction = getReductionByFrequencyFunctionForProperty("value");
    return  _.reduce(modes, reduction, modeByFrequency);
  };

  function getDataStackedRadarFrequencies(){
    var locsArray = prepareArrayForCountByFrequency();
    var carriersArray=prepareArrayForCountByFrequency();
    return [{
          key: 'Loc',
          color: '#bcbd22',
          values: countRadarsByFrequency(dataProvider.getFilteredRadars(filterCriteria).radarsLocs, locsArray)
          },
          {
            key: 'Carrier',
            color: '#1f77b4',
            values: countRadarsByFrequency(dataProvider.getFilteredRadars(filterCriteria).radarsCarriers, carriersArray)
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
      var range;
      _.each(memo, function(m){
        if(frequence>m.xmin && frequence<=m.xmax){
          m[property] += 1;
        }
      });
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
    var filteredRadars =dataProvider.getFilteredRadars(filterCriteria).radarsCarriers;
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
