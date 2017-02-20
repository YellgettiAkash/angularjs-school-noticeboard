var app = angular.module('myApp');
app.controller('profileCtrl', ['$scope','$state','httpFactory', profileCtrl]);
function profileCtrl($scope,$state,httpFactory) {
	$scope.notices = {};
	
	// httpFactory.get('assets/data/notice.json',function(data){
	// 	var result = data.data;
	// 	$scope.notices = result;
	// 	// console.log(data);
	// })
}