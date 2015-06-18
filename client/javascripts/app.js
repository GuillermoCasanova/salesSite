angular.module('Sales', ['ngRoute', 'ngResource', 'smoothScroll' ])
    .config(function() {


}).run([
    '$rootScope',
    function($rootScope) {

        $rootScope.$on('$routeChangeSuccess', function() {

              $(document).foundation();

              $(document).foundation('interchange', {

                  named_queries : {

                    childBear : 'only screen and (min-width: 100px)',
                    teenBear :  'only screen and (min-width: 760px)',
                    mamaBear :  'only screen and (min-width: 900px)'
                  }

              });


        });

}]);
