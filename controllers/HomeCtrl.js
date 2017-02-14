function HomeCtrl($scope,$state,HttpFactory) {
	$scope.notices = {};
	HttpFactory.get('assets/data/notice.json',function(data){
		var result = data.data;
		$scope.notices = result;
		console.log(data);
	})
}
