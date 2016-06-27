angular.module('Sales')
    .directive('ssPageThemeBackgrounds', [
          '$timeout',
          'Theme',
          'AudioPlayer',
        function(
          $timeout,
          Theme,
          AudioPlayer
        ) {

        return {

            restrict: 'E',
            scope: {}, 
            controller: ['$scope', 'AudioPlayer', function($scope, AudioPlayer) {

                var vm = this; 

                vm.loaded = false; 

                vm.currentTheme = 'lp'; 

                if(vm.currentTheme === null ) {

                    vm.currentTheme = 'lp';
                }

                $scope.$watch( function() {

                    return AudioPlayer.getCurrentTheme(); 
                    
                }, function(newVal, oldVal) {

                    if(newVal) {

                        vm.currentTheme = newVal.permalink; 

                    }

                });

                vm.isActive = function(pBackground) {

                    return vm.currentTheme === pBackground;

                };

            }],
            controllerAs: 'theme',
            bindToController: true, 
            templateUrl : 'js/pageTheme/ssPageThemeBackgrounds.tpl.html',
            link: function(scope, element, attrs, theme) {

                 scope.component = attrs.component;

                 theme.backgrounds = Theme.getThemes(); 

            }

        }

}]);
