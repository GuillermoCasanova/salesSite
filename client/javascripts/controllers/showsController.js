angular.module('Sales')
    .controller('ShowsController', [
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

    Shows.getShows()
        .success(function(pData) {

           $scope.events = pData.resultsPage.results.event; 
        });

        $scope.isNotFestival = function(eventName) {

         return eventName === "Concert";

        };

        $scope.navigateToTickets = function(ticketLink) {
            $window.open(ticketLink, "_blank");
        };
    
}]);