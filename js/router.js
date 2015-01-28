var chatApp = angular.module("chatApp", ["firebase","ngRoute"]);
chatApp.config(function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl : 'templates/Chat.html',
		controller : 'SampleCtrl'
	}).otherwise({
		redirectTo : '/home'
	});
	
});
