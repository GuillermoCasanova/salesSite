
angular.module("Sales")
    .controller('instagramStreamCtrl', ['instagram', 
        function(instagram) {

        var vm = this; 
        
        vm.getInstagramPhotos = function() {

            instagram.fetchPhotos(function(response) {

                vm.instagramPhotos = response.data; 

               
            });

        };

        vm.getInstagramPhotos(); 

       
    }]);



