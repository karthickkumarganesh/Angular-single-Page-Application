// JavaScript Document
var spa=angular.module('singlePageApp',['ngRoute','singlePageControllers']);

spa.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/list',{templateUrl:'list.html',controller:'ListController'})
	.when('/view/:userid',{templateUrl:'view.html',controller:'ViewController'})
	.otherwise({redirectTo:'/list'});
	
	
}]);