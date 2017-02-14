function LoginCtrl($scope,$state,$location,HttpFactory,SessionService) {
	


	$scope.login = function (credentials) {
		credentials.button = "login";
		HttpFactory.post('assets/php/login.php',credentials,function (data) {
			var result =data.data; // get only session id and set
                if(result.status == 1){
                    //console.log("get session id = "+ uid);
                    SessionService.set('token',result.token); //set uid in apps
                    $location.path('/home'); // with redirect Home page 
                }          
                else  {
                    $scope.msgtxt='wrong incorrect information data';
                    $location.path('/login');// with redirect Home page 
                }            
		})

	}
}
