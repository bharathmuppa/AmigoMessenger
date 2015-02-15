var chatApp = angular.module("chatApp", ["firebase","ngRoute"]);
chatApp.config(function($routeProvider){
	$routeProvider.when('/login',{
		templateUrl : 'templates/login.html',
		controller : 'loginCtrl'
	}).when('/home', {
		templateUrl : 'templates/List.html',
		controller : 'listCtrl'
	}).when('/friends',{
		templateUrl : 'templates/Chat.html',
		controller : 'chatCtrl'

	}).otherwise({
		redirectTo : '/login'
	});
	
});
