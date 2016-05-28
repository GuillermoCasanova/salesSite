angular.module('Sales')
    .controller('blogController', [

        '$scope',
        '$location',

        function($scope,  $location){
        
             $scope.posts = [

                    {
                        'title' : 'WEST COAST SUMMER 2015',
                        'date': 'June 1st, 2015',
                        'thumbnail': 'https://scontent-atl1-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/10548057_826259747456624_3660037826613998656_o.jpg',
                        'body' : 'We Emoticono heart ya\'ll so much, we can\'t stay away. We are pleased to announce the following west coast tour dates: http://on.fb.me/<1QkZvb6></1QkZvb6>**The Echo show is ALL AGES / Soda Bar 21+**'
                    },

                    {
                        "title": "SALES from 12 to 12",
                        "date": "May 14th, 2015",
                        'thumbnail': 'https://s3.amazonaws.com/salessite/SALES_from12_to_12.jpg',
                        'body' : 'big movie voice* This fall, two best friends will make the journey of a lifetime across the Atlantic Ocean in search of more cuisine, more ears, and more friends. Europe this fall, yall! Tour poster by Alana Questell'
                    },
                    {
                        "title": "EUROPEAN TOUR 2015",
                        "date": "May 2nd, 2015",
                        'thumbnail': 'https://scontent-atl1-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/p526x296/11263107_816216705127595_9028048071337470597_o.jpg',
                    }
                ];


}]);