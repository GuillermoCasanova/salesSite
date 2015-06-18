angular.module('Sales')
    .controller('AudioPlayerController', [
        '$scope',
        function($scope){

        $scope.songs = [

            {
                'name' : 'renee'
            },
            {
                'name' : 'vow'
            }

        ];

}]);
