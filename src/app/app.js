angular.module('tabrath', ['ngRoute', 'ngAnimate', 'ngAria', 'ngResource', 'hc.marked'])
    .config(['$locationProvider', '$routeProvider', '$httpProvider', 'markedProvider', function config($locationProvider, $routeProvider, $httpProvider, markedProvider) {
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

        markedProvider.setOptions({
            gfm: true,
            tables: true,
            breaks: true,
            sanitize: true,
            highlight: function(code, lang) {
                if (lang) {
                    return '<pre><code class="hljs lang-' + lang + '">' + hljs.highlight(lang, code, true).value + '</code></pre>';
                } else {
                    return '<pre><code class="hljs">' + hljs.highlightAuto(code).value + '</code></pre>';
                }
            }
        });
    }]);