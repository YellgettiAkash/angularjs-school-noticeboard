var app = angular.module('myApp');
app.controller('loginCtrl', ['$scope','$state','$location','httpFactory','localStorageService', loginCtrl]);
function loginCtrl($scope,$state,$location,httpFactory,localStorageService) {

	$scope.login = function (credentials) {
		credentials.button = "login";
		httpFactory.post('assets/php/login.php',credentials,function (data) {
			var result =data.data; // get only session id and set
                if(result.status == 1){
                    //console.log("get session id = "+ uid);
                    localStorageService.set('user_demo',result); //set uid in apps
                    $location.path('/home'); // with redirect Home page 
                }          
                else  {
                    $scope.msgtxt='wrong incorrect information data';
                    $location.path('/login');// with redirect Home page 
                }            
		})
	}
}
