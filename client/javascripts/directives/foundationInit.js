angular.module("Sales")
    .directive('foundationInit', [
        '$timeout',
        function($timeout) {

        return {

             link: function(scope, element, attrs) {


                $timeout(function() {   

                      $(element).foundation(function() {

                        console.log("runnin foundation");

                      });

                      $(element).foundation('interchange', {

                          named_queries : {
                            
                            childBear : 'only screen and (min-width: 100px)',
                            teenBear :  'only screen and (min-width: 760px)',
                            mamaBear :  'only screen and (min-width: 900px)'
                          }

                      });

                      $(element).foundation('interchange', 'reflow');

                });

            }
        };

}]);
