angular.module("Sales")
    .directive('ssBlogPostsCarousel', [

        '$window',
        '$sanitize', 
        function($window) {

        return {

            replace: true,
            restrict: "E",
            scope: {}, 
            templateUrl: "templates/directives/ssBlogPostsCarousel.tpl.html",
            link: function(scope, element, attrs) {

                $(document).foundation('reveal', 'reflow'); 

            },
            controller: [
            '$scope',
            'Blog',
            function($scope, Blog) {
                
                $scope.posts = Blog.getPosts(); 

                $scope.selectBlogPost = function(pPost) {
                   $scope.selectedPost = pPost; 
                };

            }]


        };

    }]);
