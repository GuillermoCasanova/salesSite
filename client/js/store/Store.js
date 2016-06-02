angular.module('Sales')
    .factory('Store',
       function(
      ) {

    return {

        getAll : function() {


            return  [

                {

                    "thumbnail": "https://f4.bcbits.com/img/0007441432_37.jpg",
                    "link" : "https://sales.bandcamp.com/album/sales-lp",
                    "name": "Product 1"

                },
                {

                    "thumbnail": "https://f4.bcbits.com/img/0007257507_37.jpg",
                    "link":"https://sales.bandcamp.com/album/sales-lp",    
                    "name": "Product 2"

                },
                {

                    "thumbnail": "https://f4.bcbits.com/img/0007254625_37.jpg",
                    "link":"https://sales.bandcamp.com/album/sales-lp",    
                    "name": "Product 3"

                },
                {

                    "thumbnail": "https://f4.bcbits.com/img/0006404120_37.jpg",
                    "link":"https://sales.bandcamp.com/album/sales-ep",    
                    "name": "Product 4"

                },
                {

                    "thumbnail": "https://f4.bcbits.com/img/0004633140_37.jpg",
                    "link":"https://f4.bcbits.com/img/0004633140_37.jpg",    
                    "name": "Product 6"

                },
                {

                    "thumbnail": "https://f4.bcbits.com/img/0003849102_37.jpg",
                    "link":"https://f4.bcbits.com/img/0004633140_37.jpg",    
                    "name": "Product 6"

                },
                {

                    "thumbnail": "https://f4.bcbits.com/img/0005121967_37.jpg",
                    "link":"https://sales.bandcamp.com/merch/sales-logo-sticker",    
                    "name": "Product 6"

                }
            ]

        }

    }

});
