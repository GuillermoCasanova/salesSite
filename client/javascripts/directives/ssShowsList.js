angular.module("Sales")
    .directive('ssShowsList', function() {

        return {
            replace: true, 
            restrict: "E",
            scope: {}, 
            templateUrl: "templates/directives/ssShowsList.tpl.html",
            controller: 'showsController',
            controllerAs: 'showsController',
            link: function(scope, element, attr) {
                scope.showsLimit = 10; 

                scope.showAllShows = function() {
                    scope.showsLimit = scope.events.length; 
                    console.log(scope.events.length);
                }

                scope.isNotFestival = function(eventName) {

                 return eventName === "Concert";

                };

            }

        };
        
    });