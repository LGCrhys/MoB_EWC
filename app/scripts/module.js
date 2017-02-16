var app = angular.module('intelRef',
    ['nvd3',
      'gridster',
      'leaflet-directive',
      'ngMaterial',
      'ngRoute',
      'md.data.table',
      'ds.clock'
    ]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/dashboard.html"
    })
    .when("/follow", {
        templateUrl : "partials/follow.html"
    })
    .otherwise({redirectTo: '/'})
});
