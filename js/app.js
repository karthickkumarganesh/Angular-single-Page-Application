// JavaScript Document
var spa=angular.module('singlePageApp',['ngRoute','singlePageControllers','userFilter']);

spa.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/list',{templateUrl:'list.html',controller:'ListController'})
	.when('/view/:userid',{templateUrl:'view.html',controller:'ViewController'})
	.otherwise({redirectTo:'/list'});
	
	
}]);

angular.module('userFilter',[]).filter('statusIcon',function(){
	
	return function(userstatus){
		
		if(userstatus==1){
			return  '\u2713' ;
		}else{
			return '\u2718';
		}
	}
	
});