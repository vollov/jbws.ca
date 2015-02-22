'use strict';

var clientApp = angular.module('appModule', []);

clientApp.config(function($routeProvider, $locationProvider) {

	$routeProvider.when('/', {
		templateUrl : 'views/home.tpl.html'
	}).when('/mother', {
		templateUrl : 'views/mother.tpl.html'
	})
//	.when('/it-consulting', {
//		templateUrl : 'views/it-consulting.tpl.html'
//	}).when('/portfolio', {
//		templateUrl : 'views/portfolio.tpl.html'
//	}).when('/500', {
//		templateUrl : 'views/500.tpl.html'
//	})
	.otherwise({
		redirectTo : '/'
	});
	
	$locationProvider.html5Mode(true);
});


