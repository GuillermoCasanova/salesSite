angular.module('Sales', ['ngRoute', 
    'ngResource', 
    'ngSanitize', 
    'ui.router',
    'smoothScroll' ])
    .config(function() {

}).run(function($timeout) {


    // Function to set data-useragent attribute to document
    _userAgentInit = function() {
            $document[0].documentElement.setAttribute('data-useragent', navigator.userAgent);
    };



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

});
