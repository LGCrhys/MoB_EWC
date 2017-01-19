(function(){
  angular.module('intelRef')
    .service('dataProvider', DataProvider)

  function DataProvider(){
    this.getOriginalRadars = getOriginalRadar;
    this.getFilteredRadars = getFilteredRadarsList;
    this.getFilteredLocs = getFilteredLocs;
  }

  var getFilteredLocs = function(filterCriteria){
    var filteredLocs = getFilteredRadarsList(filterCriteria).radarsLocs.slice();
    return _.uniq(filteredLocs,function(item){
      return item.latitude && item.longitude;
    });
  };

  var storedFilterCriteria= {};

  function shouldUpdateFilteredList(filterCriteria){
    return filterCriteria.frequence !== storedFilterCriteria.frequence
            || filterCriteria.type !== storedFilterCriteria.type
            || filterCriteria.subType !== storedFilterCriteria.subType
            || filterCriteria.name !== storedFilterCriteria.name
            || _.difference(filterCriteria.hostilities,storedFilterCriteria.hostilities).length
            || _.difference(storedFilterCriteria.hostilities,filterCriteria.hostilities).length
  }

  function getFilteredRadarsList(filterCriteria){
    if(shouldUpdateFilteredList(filterCriteria)){
      updateFilteredList(filterCriteria);
    }
    return filteredRadarsList;
  }

  var filteredRadarsList;

  function copyFilterCriteria(filterCriteriaToClone){
    return {
      frequence:filterCriteriaToClone.frequence,
      type:filterCriteriaToClone.type,
      subType:filterCriteriaToClone.subType,
      name:filterCriteriaToClone.name,
      hostilities:filterCriteriaToClone.hostilities
    }
  }

  function updateFilteredList(filterCriteria){
    storedFilterCriteria = copyFilterCriteria(filterCriteria);

    var originalRadars = getOriginalRadar();    

    filteredRadarsList = {
      radars:originalRadars.radars.slice(),
      radarsCarriers:originalRadars.radarsCarriers.slice(),
      radarsLocs:originalRadars.radarsLocs.slice()
    }

    if(filterCriteria.type){
      filteredRadarsList.radarsCarriers = _.filter(filteredRadarsList.radarsCarriers, function(radar){return radar.type===filterCriteria.type});
      filteredRadarsList.radars = filteredRadarsList.radarsCarriers.concat(filteredRadarsList.radarsLocs);
    }
    if(filterCriteria.subType){
      filteredRadarsList.radarsCarriers = _.filter(filteredRadarsList.radarsCarriers, function(radar){return radar.subType===filterCriteria.subType;});
      filteredRadarsList.radars = filteredRadarsList.radarsCarriers.concat(filteredRadarsList.radarsLocs);
    }
    if(filterCriteria.name){
      filteredRadarsList.radars = _.filter(filteredRadarsList.radars, function(radar){return radar.nom === filterCriteria.name})
      filteredRadarsList.radarsCarriers = _.filter(filteredRadarsList.radarsCarriers, function(radar){return radar.nom === filterCriteria.name})
      filteredRadarsList.radarsLocs = _.filter(filteredRadarsList.radarsLocs, function(radar){return radar.nom === filterCriteria.name})
    }

    if(filterCriteria.hostilities){
      filteredRadarsList.radars = _.filter(filteredRadarsList.radars, function(radar){return _.contains(filterCriteria.hostilities,radar.hostilite.toLowerCase())})
      filteredRadarsList.radarsCarriers = _.filter(filteredRadarsList.radarsCarriers, function(radar){return _.contains(filterCriteria.hostilities,radar.hostilite.toLowerCase())})
      filteredRadarsList.radarsLocs = _.filter(filteredRadarsList.radarsLocs, function(radar){return _.contains(filterCriteria.hostilities,radar.hostilite.toLowerCase())})
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
      filteredRadarsList.radars = filterByFrequencies(filteredRadarsList.radars, range);
      filteredRadarsList.radarsCarriers=filterByFrequencies(filteredRadarsList.radarsCarriers, range);
      filteredRadarsList.radarsLocs=filterByFrequencies(filteredRadarsList.radarsLocs, range);
    }
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
        radar.hostilite = carrier.hostilite;
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


})();
