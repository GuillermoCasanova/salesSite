angular.module("Sales")
    .directive('ssPageTheme', function() {

        return {
            restrict: "A",
            controller: [
            '$scope', 
            'AudioPlayer',
            function($scope, AudioPlayer) {
                //Starter theme when user first lands on page

                var vm = this; 

                 var defaultTheme = "lp";
                
                $scope.$watch(function() {

                    return AudioPlayer.getCurrentTheme(); 

                }, function(newVal, oldVal) {

                    if(newVal) {

                        vm.currentTheme = newVal.permalink;

                    } else {

                        vm.currentTheme = defaultTheme; 
                    }

                }); 

            }],
            controllerAs: 'ssPageTheme'

        };

});