function SearchCtrl($scope,$state,HttpFactory) {
	console.log('SearchCtrl');
	$scope.Students = [];
	$scope.marks={};
	HttpFactory.get('assets/data/students-marks.json',function(data){
		var result = data.data;
		$scope.Students = result;
		// console.log(data);
	})

	$scope.delete = function(id) {
		$scope.Students.splice(id, 1);
		alert('Record Successfully Deleted');
	}
	$scope.edit = function(id) {
		var students = $scope.Students;
		$scope.marks = students[id];
	}

	$scope.save = function (data) {
		$scope.Students.push(data);
		// console.log($scope.Students)
		alert('Record Successfully Saved Data');
		$scope.marks={};
	}

}
