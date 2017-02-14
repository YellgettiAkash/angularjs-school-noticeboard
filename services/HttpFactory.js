
function HttpFactory($http){
   
    var get = function (url,callback){
        $http({
            method : "GET",
            url : url
        }).then(function mySucces(response) {
            callback(response);
        }, function myError(response) {
            callback(response);
        });
    }
    
    var post = function (url,data,callback){
        $http({
            method : "POST",
            url : url,
            data : data
        
        }).then(function mySucces(response) {
            callback(response);
        }, function myError(response) {
            callback(response);
        });
    }
    var filepost = function (url,data,callback){
        $http({
            method : "POST",
            url : url,
            data : data,
            headers: {
             'Content-Type': undefined
            }
        
        }).then(function mySucces(response) {
            callback(response);
        }, function myError(response) {
            callback(response);
        });
    }

    return {
        get : get,
        post : post,
        filepost : filepost,
    }
}
