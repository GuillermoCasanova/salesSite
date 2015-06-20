angular.module("Sales")
    .directive('ssBlogPostsCarousel', [
        function() {

        return {

            replace: true,
            restrict: "E",
            templateUrl: "templates/directives/ssBlogPostsCarousel.tpl.html",
            scope: {},
            link: function(scope, element, attrs) {

               $(document).foundation('reveal', 'reflow'); 

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
