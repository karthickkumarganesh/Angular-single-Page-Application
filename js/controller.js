// JavaScript Document
var singlePageControllers=angular.module('singlePageControllers',[]);



singlePageControllers.controller('ListController',['$scope','$http',function($scope,$http){
	$http.get("mydata.php").success(function(data){
		console.log(data);
		$scope.users=data;		
	});
}]);

singlePageControllers.controller('ViewController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$http.get("getdatasingle.php?userid="+$routeParams.userid).success(function(data){
		console.log(data);
		$scope.usersdetail=data;		
	});
}]);