
function LogoutCtrl($scope,$state,$location,HttpFactory,LocalStorageService) {
	var users = LocalStorageService.get('user_demo');
	LocalStorageService.remove('user_demo');
	$state.go('login');
}
