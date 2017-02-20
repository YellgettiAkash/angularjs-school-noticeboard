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


angular.isUndefinedOrNull = function(val) {
    return angular.isUndefined(val) || val === null 
}

app.run(["$rootScope", "$state", "$window", "AuthService", function($rootScope, $state, $window, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        // console.log(toState.name)
        var isUserLoggedIn =  AuthService.isUserLoggedIn();
        var condition = fromState.name !== null;
        console.log( condition+'  '+fromState.name+' '+ toState.name+'  '+isUserLoggedIn);
        if(condition && toState.name != 'login' && !isUserLoggedIn){
           $state.go('login');
        }
        if(condition && toState.name == 'login' && isUserLoggedIn){
            return $window.open('#/home', '_self');
        }
        if(condition  && toState.name == 'login' && !isUserLoggedIn){
            return $window.open('#'+toState.url, '_self');
        }


    });
}]);

