
angular.module("Sales")
    .controller('storeCtrl', ['Store', 
        function(Store) {

        var vm = this; 
        
        vm.getStoreInventory = function() {

            return Store.getAll();

        };

        vm.inventory = vm.getStoreInventory(); 
        
    }]);



