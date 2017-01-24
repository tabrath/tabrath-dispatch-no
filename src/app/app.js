angular.module('tabrath', ['ngRoute', 'ngAnimate', 'ngAria', 'ngResource'])
    .config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/templates/home.html'
            }).
            when('/ipfs', {
                templateUrl: '/templates/ipfs.html'
            }).
            when('/multiformats', {
                templateUrl: '/templates/multiformats.html'
            }).
            when('/libp2p', {
                templateUrl: '/templates/libp2p.html'
            }).
            otherwise('/');
        
        $locationProvider.html5Mode(true);
    }]);