angular.module("Sales")
    .directive('ssImgProperties', function(){ 
   return {
     restrict: 'A',
     link: function(scope, element, attr) {

         element.on('load', function() {


            var w = $(this).width(),
                h = $(this).height();

            attr.$set('width', w);
            attr.$set('height', h); 


         });

     }
   };
});