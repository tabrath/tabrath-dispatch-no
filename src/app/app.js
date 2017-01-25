angular.module('tabrath', ['ngRoute', 'ngAnimate', 'ngAria', 'ngResource'])
    .config(['$locationProvider', '$routeProvider', '$httpProvider', function config($locationProvider, $routeProvider, $httpProvider) {
        $routeProvider.
            when('/', {
                controller: 'BlogController',
                templateUrl: '/templates/blog.html'
            }).
            when('/ipfs', {
                controller: 'IpfsController',
                templateUrl: '/templates/modules.html'
            }).
            when('/multiformats', {
                controller: 'MultiformatsController',
                templateUrl: '/templates/modules.html'
            }).
            when('/libp2p', {
                controller: 'LibP2PController',
                templateUrl: '/templates/modules.html'
            }).
            otherwise('/');
        
        $locationProvider.html5Mode(true);
        $httpProvider.defaults.cache = true;
    }]);