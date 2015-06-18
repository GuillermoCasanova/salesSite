angular.module("Sales")
    .directive('ssSpinner', function() {

        return {
            replace: true, 
            restrict: "E",
            templateUrl: "templates/directives/ssSpinner.tpl.html",
            controller: function($scope) {

            }, 
            link: function(scope, element, attrs) {

                
            }

        };
        
    });