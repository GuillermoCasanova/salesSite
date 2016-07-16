angular.module('Sales')
    .factory('Store', [
            '$http', 
            '$q',
            'BASE_URL',
       function(
        $http, 
        $q,
        BASE_URL) {

    return {

        getAll : function() {

            return $q(function(resolve, reject) {

                $http.get(BASE_URL + '/products')
                     .then(function(res) {
                        console.log(res); 
                        
                        console.log(res.data); 

                        resolve(res.data); 

                     })
                     .catch(function(err){

                        reject(err); 

                     }); 
            }); 

                

        }

    }

}]);
