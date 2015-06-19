angular.module("Sales")
    .directive('ssSpinner', [ 

        '$interval', 

        function($interval) {

            return {
                replace: true, 
                restrict: "E",
                templateUrl: "templates/directives/ssSpinner.tpl.html",
                scope: {},
                link: function(scope, element, attrs) {

                    var loadingText = [
                        'Loading',
                        'Loading.',
                        'Loading..',
                        'Loading...'
                    ];

                    var currentText = 0; 

                    scope.spinner = {
                        'text' : 'Loading'
                    };

                    scope.changeText = function(pSpinner, pText, index) {
                        pSpinner.text = pText[index]; 
                    };

                    $interval(function() {
                        if(currentText === loadingText.length) {
                            currentText = 0; 
                        }
                       scope.changeText(scope.spinner, loadingText, currentText); 
                       currentText++
                    }, 800);
                    
                }

            };
        
    }]);

