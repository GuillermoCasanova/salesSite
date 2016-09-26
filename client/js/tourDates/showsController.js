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

        $scope.showListLength = 0; 

        Shows.getShows()
            .success(function(pData) {
                
            $scope.loaded = true; 

            if(pData.totalEntries === 0) {

             $scope.viewingAllShows = true; 
             return $scope.viewingAllShows; 

           }

           $scope.events = pData.resultsPage.results.event; 



        });

        $scope.navigateToTickets = function(ticketLink) {
            $window.open(ticketLink, "_blank");
        };

      

}]);