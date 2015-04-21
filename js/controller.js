// JavaScript Document
var singlePageControllers=angular.module('singlePageController',[]);



singlePageControllers.controller('ListController',['$scope','$http',function($scope,$http){
	$http.get("mydata.php").success(function(data){
		console.log(data);
		$scope.users=data;
		
	});
}]);