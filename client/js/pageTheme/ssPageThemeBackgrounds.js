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
            controller: [
                '$scope', 
                'AudioPlayer', 
                'Theme', 
                function($scope, AudioPlayer, Theme) {

                var vm = this; 

                var defaultTheme = 'lp'; 

                vm.loaded = false; 

                vm.currentTheme = defaultTheme; 

                vm.themes = Theme.getThemes(); 

                if(vm.currentTheme === null ) {

                    vm.currentTheme = 'lp';
                }

                $scope.$watch( function() {

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
