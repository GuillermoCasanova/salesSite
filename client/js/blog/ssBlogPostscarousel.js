angular.module("Sales")
    .directive('ssBlogPostsCarousel', [
        function() {

        return {

            replace: true,
            restrict: "E",
            templateUrl: "js/blog/ssBlogPostsCarousel.tpl.html",
            scope: {},
            link: function(scope, element, attrs) {

               $(document).foundation('reveal', 'reflow'); 

               $(document).on('close.fndtn.reveal', '[data-reveal]', function () {
                  setTimeout(function() {

                      scope.selectedPost = {};  
                      scope.$apply(); 
                  }, 1000);

               });

               scope.selectBlogPost = function(pPost) {
                   scope.selectedPost = pPost; 
                   angular.element("#modal").foundation('reveal', 'open');
                };


            },
            controller: [
            '$scope',
            'Blog',
            function($scope, Blog) {
                $scope.selectedPost  = {}; 
                $scope.posts = Blog.getPosts(); 
            }]


        };

    }]);
