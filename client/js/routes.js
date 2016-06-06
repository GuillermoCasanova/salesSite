angular.module('Sales')
    .config(['$stateProvider', '$urlRouterProvider',

        function($stateProvider, $urlRouterProvider) {


    //If anything is unmatched just go to home
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('main', {

        abstract: true, 
        url: "/",
        templateUrl: "js/main/main.html", 
        controller: "mainCtrl",
        controllerAs: "main"
    })
    .state('main.home', {
        url: "",
        views: {
            'main': {

                templateUrl: "js/home/index.html"
            }
        }
    })
    .state('main.tourDates', {
        
        url: "tour",
        views: {

            'main': {

                templateUrl: "js/tourDates/tourDates.html"
            }

        }  

    })
    .state('main.contact', {

        url: "contact",
        views: {

            'main' : {

                templateUrl: "js/contact/contact.html"

            }

        }

    })
    .state('main.store', {

        url: "store",
        views: {

            'main' : {

                templateUrl: "js/store/store.html",
                controller: 'storeCtrl',
                controllerAs: 'store'

            }

        }

    })
    .state('main.videos', {

        url: "videos",
        views: {

            'main' : {

                templateUrl: "js/videos/videos.html"

            }

        }

    })
    .state('main.press', {

        url: "press",
        views:  {

            'main' : {

                templateUrl: "js/press/press.html"

            }

        }

    });

}]);
