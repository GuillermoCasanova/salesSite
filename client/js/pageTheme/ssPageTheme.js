angular.module("Sales")
    .directive('ssPageTheme', function() {

        return {
            restrict: "A",
            controller: [
            '$scope', 
            'AudioPlayer',
            'Theme',
            function($scope, AudioPlayer, Theme) {
                //Starter theme when user first lands on page

                var vm = this; 

                 var defaultTheme = "lp";
                    
                vm.themes = Theme.getThemes(); 

                $scope.$watch(function() {

                    return AudioPlayer.getCurrentTheme(); 

                }, function(newVal, oldVal) {

                    if(newVal) {

                        var themeName = newVal.permalink;

                        for(var i = 0; i < vm.themes.length; i++) {

                            if(vm.themes[i].name ===  themeName) {

                                vm.currentTheme = themeName; 
                                return 
                            } 

                        } 

                        vm.currentTheme = defaultTheme; 

                    } else {

                        vm.currentTheme = defaultTheme; 
                    }



                }); 

            }],
            controllerAs: 'ssPageTheme'

        };

});