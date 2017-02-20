var app = angular.module('myApp');
app.controller('homeCtrl', ['$scope','$state','httpFactory', homeCtrl]);
function homeCtrl($scope,$state,httpFactory) {
	$scope.notices = {};
	
	httpFactory.get('assets/data/notice.json',function(data){
		var result = data.data;
		$scope.notices = result;
		// console.log(data);
	})
}