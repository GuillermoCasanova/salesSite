angular.module("Sales")
    .directive('carouselSlick', [
        '$timeout',
        function($timeout) {

    return {

        scope: {},
        restrict: 'A',
        link: function(scope, element, attrs) {

            $timeout(function() {   

                 $(element).slick({
                    autoplay: attrs.autoplay,
                    arrows: true, 
                    dots: attrs.dots || false,
                    lazyLoad: attrs.lazyload || 'progressive', 
                    speed: attrs.speed || 2000, 
                    pauseOnHover: true,
                    infinite: true,
                    slidesToShow: attrs.slides,
                    responsive: [
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }

                    ]
                });


                element.find('button').text("");

            }); 
            
        }

    };

}]);

