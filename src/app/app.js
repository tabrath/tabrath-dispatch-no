angular.module('tabrath', ['ngRoute', 'ngAnimate', 'ngAria', 'ngResource', 'hc.marked'])
    .config(['$locationProvider', '$routeProvider', '$httpProvider', 'markedProvider', function config($locationProvider, $routeProvider, $httpProvider, markedProvider) {
        $routeProvider.
            when('/blog', {
                controller: 'BlogController',
                templateUrl: '/templates/blog.html'
            }).
            when('/ipfs', { redirectTo: '/projects/ipfs' }).
            when('/multiformats', { redirectTo: '/projects/multiformats' }).
            when('/libp2p', { redirectTo: '/projects/libp2p' }).
            when('/projects', {
                controller: 'ProjectListController',
                templateUrl: '/templates/project-list.html'
            }).
            when('/projects/:id', {
                controller: 'ProjectController',
                templateUrl: '/templates/project.html'
            }).
            when('/about', { templateUrl: '/templates/about.html' }).
            when('/skills', { templateUrl: '/templates/skills.html' }).
            otherwise({ redirectTo: '/blog' });
        
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