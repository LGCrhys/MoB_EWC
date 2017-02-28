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

  var storedFilterCriteria;

  function shouldUpdateFilteredList(filterCriteria){
    if(!storedFilterCriteria) return true;
    if(!filterCriteria) return false;
    return filterCriteria.frequence.min !== storedFilterCriteria.frequence.min
            || filterCriteria.frequence.max !== storedFilterCriteria.frequence.max
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
      frequence:{min:filterCriteriaToClone.frequence.min, max:filterCriteriaToClone.frequence.max},
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
    if(filterCriteria){
      if(filterCriteria.type){
        filteredRadarsList.radarsCarriers = _.filter(filteredRadarsList.radarsCarriers, function(radar){return radar.type===filterCriteria.type});
        filteredRadarsList.radarsLocs = [];
        filteredRadarsList.radars = filteredRadarsList.radarsCarriers.concat(filteredRadarsList.radarsLocs);
      }
      if(filterCriteria.subType){
        filteredRadarsList.radarsCarriers = _.filter(filteredRadarsList.radarsCarriers, function(radar){return radar.subType===filterCriteria.subType;});
        filteredRadarsList.radarsLocs = [];
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
        filteredRadarsList.radars = filterByFrequencies(filteredRadarsList.radars, [filterCriteria.frequence.min,filterCriteria.frequence.max]);
        filteredRadarsList.radarsCarriers=filterByFrequencies(filteredRadarsList.radarsCarriers, [filterCriteria.frequence.min,filterCriteria.frequence.max]);
        filteredRadarsList.radarsLocs=filterByFrequencies(filteredRadarsList.radarsLocs, [filterCriteria.frequence.min,filterCriteria.frequence.max]);
      }
    }
  }

  function filterByFrequencies(radars, frequencyRange){
    var result = [];
    _.each(radars, function(radar){
      var modesInRange = _.filter(radar.modes, function(mode){
        var radarFrequence= parseFloat(mode.sousMode.frequence);
        return frequencyRange && frequencyRange.length && radarFrequence>=frequencyRange[0] && radarFrequence<=frequencyRange[1];
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
