var app = angular.module('myApp');
app.controller('logoutCtrl', ['$scope','$state','$location','httpFactory','localStorageService', logoutCtrl]);
function logoutCtrl($scope,$state,$location,httpFactory,localStorageService) {

	var users = localStorageService.get('user_demo');
	localStorageService.remove('user_demo');
	$state.go('login');

}
