var myApp = angular.module("angOne", ["ui.router"]);
myApp.config(function($stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('teethtips', {
            url: '/teethtips',
            templateUrl: 'teethtips.html'
        })
        .state('services', {
            url: '/services',
            templateUrl: 'services.html'
        })
        .state('videos', {
            url: '/videos',
            templateUrl: 'videos.html'
        })
        .state('packages', {
            url: '/packages',
            templateUrl: 'packages.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact.html'
        })
});
