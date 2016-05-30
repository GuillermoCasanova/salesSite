angular.module("Sales")
    .directive('ssShowsList', function() {

        return {
            replace: true, 
            restrict: "E",
            scope: {}, 
            templateUrl: "/js/tourDates/ssShowsList.tpl.html",
            controller: 'showsController',
            controllerAs: 'showsController',
            link: function(scope, element, attr) {
                scope.showsLimit = 20; 
                scope.viewingAllShows = false; 

                scope.showAllShows = function() {
                    scope.loading = true; 
                    scope.viewingAllShows = true; 

                    setTimeout(function() {
                        scope.showsLimit = scope.events.length; 
                        scope.loading = false; 
                    }, 800);
                }

                scope.isNotFestival = function(eventName) {

                 return eventName === "Concert";

                };

            }

        };
        
    });