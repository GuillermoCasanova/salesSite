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

                //Removes all text from slick's next and previous buttons
                element.find('button').text("");

                //Inserts svg icons 
                element.find('.slick-next').append("<svg viewBox=\"0 0 144 144\" preserveAspectRatio=\"xMidYMid meet\"title=\"Play next track\"class=\"icon--controls\"><use xlink:href=\"assets/images/icon--controls.svg#next-icon\"></use></svg>");
                
                element.find('.slick-prev').append("<svg viewBox=\"0 0 144 144\" preserveAspectRatio=\"xMidYMid meet\"title=\"Play next track\"class=\"icon--controls\"><use xlink:href=\"assets/images/icon--controls.svg#prev-icon\"></use></svg>");

            }); 
            
        }

    };

}]);

