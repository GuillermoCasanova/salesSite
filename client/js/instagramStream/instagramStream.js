angular.module("Sales")
    .directive('instagramStream', function() {

        return {
            replace: true, 
            restrict: "E",
            templateUrl: "js/instagramStream/instagramStream.html",
            controller: 'instagramStreamCtrl',
            controllerAs: 'instagramStream',
            bindToController: true, 
            link: function(scope, element, attrs) {

            
            }

        };
        
    });
