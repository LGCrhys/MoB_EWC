angular.module('intelRef').factory('filterCriteria', function(){
  return {
    frequence:{min:3000, max:10000},
    type:"",
    subType:"",
    name:"",
    hostilities: ['hostile','inconnu','ami']
}});
