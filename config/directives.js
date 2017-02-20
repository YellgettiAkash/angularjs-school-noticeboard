function myFile() {
   	return {
   		restrict: 'E',
        scope: {
            fileModel: "=",
            fileUris: "=",
        },
        link: function (scope, element, attributes) {
            var fr = [];
            var uris = [];
                
            element.bind("change", function (changeEvent) {
                var files = element[0].files;
                for (var i = 0; i < files.length; i++) {
                    fr[i] = new FileReader();
                    fr[i].onload = function(res) {
                        uris.push({ "src" : res.target.result }); 
                        console.log(files.length+ "=="+i)
                        if (files.length == i) {
                            scope.$apply(function () {
                                scope.fileUris = uris; 
                                scope.fileModel = files;
                            });   
                        } 
                    }
                    fr[i].readAsDataURL(files[i]);
                }
                
            });
        }
    }
}