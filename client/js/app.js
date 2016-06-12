angular.module('Sales', ['ngRoute', 
    'ngResource', 
    'ngSanitize', 
    'ui.router',
    'smoothScroll' ])
    .config(function() {

}).run(['$rootScope', '$timeout', function($rootScope, $timeout) {


    // Function to set data-useragent attribute to document
    _userAgentInit = function() {
            $document[0].documentElement.setAttribute('data-useragent', navigator.userAgent);
    };


    // Code to make the page load at the top when a state changes
    $rootScope.$on('$stateChangeSuccess', function() {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });


    angular.element(document).ready(function() {

         $timeout(function() {

      $(document).foundation();

          $(document).foundation('interchange', {

              named_queries : {
                
                childBear : 'only screen and (min-width: 100px)',
                teenBear :  'only screen and (min-width: 760px)',
                mamaBear :  'only screen and (min-width: 900px)'
              }

          });

          $(document).foundation('interchange', 'reflow');


         }, 1);

    });

}]);
