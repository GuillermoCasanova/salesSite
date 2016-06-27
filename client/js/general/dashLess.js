angular.module("Sales")
    .filter('dashless',function(){
    return function(input){
        return input.replace('-',' ');
    }
});