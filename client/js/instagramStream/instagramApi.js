angular.module("Sales")
.factory('instagram', ['$http',

    function($http) {

        var endPointUser = "https://api.instagram.com/v1/users/1601498273/media/recent/?access_token=1601498273.1677ed0.3b43603c32214f6086b4d46916c36ab8&callback=JSON_CALLBACK";

        var endPointHashtag = "https://api.instagram.com/v1/tags/wearenotsales/media/recent?access_token=1601498273.1677ed0.3b43603c32214f6086b4d46916c36ab8&callback=JSON_CALLBACK";


        return {

            fetchPhotos: function(callback) {

                $http.jsonp(endPointUser).then(function(response) {
                    
                    // since jsonp, it is expecting a callback, we check that here
                    if(callback && typeof callback === 'function') {

                        callback(response.data);

                    }

                })

            }
        }

    }]);
