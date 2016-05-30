angular.module('Sales')
    .factory('Shows', [
      '$http',
       function(
          $http
      ) {

    return {

        getShows : function() {

            return $http.jsonp('http://api.songkick.com/api/3.0/artists/7225704-sales/calendar.json?apikey=u3T0xdtx4AOTUzFw&jsoncallback=JSON_CALLBACK');
        }

    }

}]);
