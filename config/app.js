var app= angular.module('myApp',["ui.router"]);

//Route
app.config(routeConfig);

//Factory
app.factory("HttpFactory",HttpFactory);

//Service
app.factory("AuthService",AuthService);

//Login Controllers 
app.controller('LoginCtrl', ['$scope','$state','$location','HttpFactory','SessionService', LoginCtrl]);

//Home Controllers 
app.controller('HomeCtrl', ['$scope','$state','HttpFactory', HomeCtrl]);

//Search Controllers 
app.controller('SearchCtrl', ['$scope','$state','HttpFactory', SearchCtrl]);


app.filter('customPassFailFilter',['decoration',customPassFailFilter]).value('decoration',{symbol : '*'});


//init factory
app.factory('SessionService', ['$http', function($http){ // call a sessionService
    return{
        set:function(key,value){ // set data using js
            return sessionStorage.setItem(key,value); //return key with value
        },
        get:function(key){ // get data using js
            return sessionStorage.getItem(key); //return key
        },
        destroy:function(key){ // destroy data using js
            $http.post('data/destroy_session.php'); //send server side request
            return sessionStorage.removeItem(key); //return data (key)
        }
    };
}])


app.run(["$rootScope", "settings", "$state", "$window", "AuthService", function($rootScope, settings, $state, $window, AuthService) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed from view

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('')
        // if (toState.data.external) {
        //     event.preventDefault();
        //     return $window.open(toState.url, '_self');
        // }
        // if (toState.data.restrict && !AuthService.isUserLoggedIn()) {
        //     $state.go('login');
        // }
    });
}]);