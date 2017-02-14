var app= angular.module('myApp',["ui.router"]);

//Route
app.config(routeConfig);

//Factory
app.factory("HttpFactory",HttpFactory);

app.service("LocalStorageService",LocalStorageService);



//Service
app.service("AuthService",AuthService);

//Login Controllers 
app.controller('LoginCtrl', ['$scope','$state','$location','HttpFactory','LocalStorageService', LoginCtrl]);

//Login Controllers 
app.controller('LogoutCtrl', ['$scope','$state','$location','HttpFactory','LocalStorageService', LogoutCtrl]);


//Home Controllers 
app.controller('HomeCtrl', ['$scope','$state','HttpFactory', HomeCtrl]);

//Search Controllers 
app.controller('SearchCtrl', ['$scope','$state','HttpFactory', SearchCtrl]);


app.filter('customPassFailFilter',['decoration',customPassFailFilter]).value('decoration',{symbol : '*'});


app.run(["$rootScope", "$state", "$window", "AuthService", function($rootScope, $state, $window, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        // console.log(toState.name)
        var isUserLoggedIn =  AuthService.isUserLoggedIn();
        console.log(toState.name+'  '+isUserLoggedIn);
         
        if (toState.name == 'login' && !isUserLoggedIn) {
            return $window.open('#'+toState.url, '_self');
        }
        if (toState.name == 'login' && isUserLoggedIn && toState.name != 'login' && isUserLoggedIn) {
            $state.go(toState.name);
        }

        if (!isUserLoggedIn) {
            console.log('login-1');
            $state.go('login');
        }


    });
}]);


// MetronicApp.run(["$rootScope", "settings", "$state", "$window", "AuthService", function($rootScope, settings, $state, $window, AuthService) {
//     $rootScope.$state = $state; // state to be accessed from view
//     $rootScope.$settings = settings; // state to be accessed from view

//     $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
//         if (toState.data.external) {
//             event.preventDefault();
//             return $window.open(toState.url, '_self');
//         }
//         if (toState.data.restrict && !AuthService.isUserLoggedIn()) {
//             $state.go('login');
//         }
//     });
// }]);