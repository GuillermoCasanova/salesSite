angular.module("Sales")
    .directive('ssPageTheme', function() {

        return {
            restrict: "A",
            controller: [
            '$scope', 
            function($scope) {
                //Starter theme when user first lands on page
                $scope.defaultTheme = "jamz";
                //Themes are based off the song's permalinks 
                $scope.currentTheme = $scope.defaultTheme ;

               this.changeTheme = function(pTheme) {
                    $scope.currentTheme = pTheme; 

                };

                this.getCurrentTheme = function() {
                    return $scope.currentTheme;
                };

            }],
            controllerAs: 'ssPageTheme'

        };

});