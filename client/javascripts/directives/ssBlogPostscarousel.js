angular.module("Sales")
    .directive('ssBlogPostsCarousel', [

        '$window',
        function($window) {

        return {

            replace: true,
            restrict: "E",
            require: "^ssPageTheme",
            templateUrl: "templates/directives/ssBlogPostsCarousel.tpl.html",
            link: function(scope, element, attrs, ssPageTheme) {




                $(document).foundation('reveal', 'reflow'); 

            },
            controller: [
            '$scope',
            function($scope) {
                
                $scope.posts = [

                    {
                        'title' : 'WEST COAST SUMMER 2015',
                        'date': 'June 1st, 2015',
                        'thumbnail': '',
                        'id' : 'west',
                        'body' : 'We Emoticono heart ya\'ll so much, we can\'t stay away. We are pleased to announce the following west coast tour dates: http://on.fb.me/<1QkZvb6></1QkZvb6>**The Echo show is ALL AGES / Soda Bar 21+**'
                    },

                    {
                        "title": "SALES from 12 to 12",
                        "date": "May 14th, 2015",
                        'thumbnail': '',
                        'id' : 'sales',
                        'body' : 'We are excited to share our first video series with you. This three-part video series is the brainchild of Josef Lorenzo (director) and was made possible by the work of Harryson Thevenin (audio) and Alana Questell (animation). Looking forward to getting to meet you this fall.  Videos + tour dates below. Love, Lauren & Jordan <3 SALES <3 P.S. There are three (3) videos in the series, below is the first. Follow the links for more movie magic:'
                    },
                    {
                        "title": "EUROPEAN TOUR 2015",
                        "date": "May 2nd, 2015",
                        'thumbnail': '',
                        'id' : 'european',
                        'body' : 'Hey Friends! It\'s been fun touring the U.S. and Canada, but we are really excited about our upcoming 2015 European Tour this Fall. We will spend a whole month touring Europe and will hopefully get to meet you. Until that beautiful day when we cross the Atlantic Ocean into your arms, we will be spending the next few months in our home studio (bedroom) working on a full length album.'

                    }
                ];

                $scope.selectBlogPost = function(pPost) {
                   $scope.selectedPost = pPost; 
                };

            }],
            controllerAs: 'blogPostThumbnail'


        };

    }]);
