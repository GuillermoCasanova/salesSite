angular.module('Sales')
    .controller('showsController', [
        'Shows', 
        '$scope',
        '$window',
        'smoothScroll',

        function(
        Shows, 
        $scope, 
        $window, 
        smoothScroll){

        $scope.search = {}; 
        $scope.events = {};
        $scope.loaded = false; 

        Shows.getShows()
            .success(function(pData) {
           $scope.loaded = true; 
           $scope.events = pData.resultsPage.results.event; 
        });

        $scope.navigateToTickets = function(ticketLink) {
            $window.open(ticketLink, "_blank");
        };

}]);