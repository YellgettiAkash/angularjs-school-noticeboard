function AuthService($q, $timeout, $http,  LocalStorageService) {

		// var login = function (mobilenumber, password) {
		// 	return $http({
		// 		        method  : 'POST',
		// 		        url     : URLS.baseUrl + URLS.login,
		// 		        data    : { mobilenumber: mobilenumber, password: password },  // pass in data as strings
		// 		        headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
		// 			});
		// }

		// var logout = function () {
		// 	return $http.get(URLS.baseUrl+URLS.logout)
		// 	    .then(function(response) {
		// 	        localStorage.remove('user_demo');
		// 	        localStorage.remove('blrecord');
		// 	    });
		// }

		var isUserLoggedIn = function () {
			var users = LocalStorageService.get('user_demo');
			// console.log(users);
			return  angular.isObject(users) ?  true : false;
		}

		return {
			// login : login,
			// logout : logout,
			isUserLoggedIn: isUserLoggedIn,
		}
	}