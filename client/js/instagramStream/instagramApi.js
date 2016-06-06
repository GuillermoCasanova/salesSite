angular.module("Sales")
.factory('instagram', ['$http',

    function($http) {

        var endPoint = "https://api.instagram.com/v1/users/1601498273/media/recent/?access_token=14227424.467ede5.167ef76092b74b55825edacf31741466&callback=JSON_CALLBACK";


        return {

            fetchPhotos: function(callback) {

                $http.jsonp(endPoint).then(function(response) {
                    console.log(response.data); 
                    
                    // since jsonp, it is expecting a callback, we check that here
                    if(callback && typeof callback === 'function') {
                    console.log(response.data); 

                        callback(response.data);

                    }

                })

            }
        }

    }]);
