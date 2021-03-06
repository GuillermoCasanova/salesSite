angular.module('Sales')
    .factory('Blog',
       function(
      ) {

        var posts = [
                    {
                        'title' : 'NORTH AMERICAN SPRING TOUR 2016',
                        'date': 'April 16th, 2015',
                        'thumbnail': 'https://s3.amazonaws.com/salessite/SALES_NORTH_AMERICAN_SPRING_2016.jpg',
                        'mainImage' : 'https://s3.amazonaws.com/salessite/SALES_NORTH_AMERICAN_SPRING_2016_header.jpg',
                        'id' : 'spring_2016_ivy',
                        'body' : '<p>I know it hasn\'t been so long since we last talked, but we wanted to get in touch and see how you are doing. Maybe you could use a fresh track?</p> <p>Here is our latest single, <a href="https://soundcloud.com/sales/ivy" target="_blank">"ivy",</a> hope it\'s something you can put your story to.  </p> <p>We\'ll be on tour, and sharing our album in April #420. Check the site for dates/tickets and come see us. We\'d love to meet you and maybe even hang-out (taco party in San Diego, bagel and schmear in Brooklyn, we want to see redwoods, and maybe we could go for a biscuit in Nashville?). Let us know. </p> <p>All the best, </p> <p>Lauren & Jordan <span class="fwb">SALES</span></p>'
                    },

                    {
                        'title' : 'WEST COAST SUMMER 2015',
                        'date': 'June 1st, 2015',
                        'thumbnail': 'https://s3.amazonaws.com/salessite/SALES_West_Coast_2015.jpg',
                        'mainImage' : 'https://s3.amazonaws.com/salessite/SALES_West_Coast_2015_header.png',
                        'id' : 'west',
                        'body' : 'We love ya\'ll so much, we can\'t stay away. We are pleased to announce the following west coast tour dates: <a href="http://on.fb.me/1QkZvb6" target="_blank">http://on.fb.me/1QkZvb6</a>'
                    },

                    {
                        "title": "SALES from 12 to 12",
                        "date": "May 14th, 2015",
                        'thumbnail': 'https://s3.amazonaws.com/salessite/SALES_from12_to_12.jpg',
                        'mainImage': 'https://s3.amazonaws.com/salessite/SALES_from12_to_12.jpg',
                        'id' : 'sales',
                        'body' : '<b>We are excited</b>  to share our first video series with you. This three-part video series is the brainchild of Josef Lorenzo (director) and was made possible by the work of Harryson Thevenin (audio) and Alana Questell (animation). Looking forward to getting to meet you this fall.  <p>Videos + tour dates below.<p><p> Love, <br>Lauren & Jordan <br><3 SALES <3</p> <p>P.S. There are three (3) videos in the series, <a href="https://www.youtube.com/playlist?list=PLLCdbcMe7pOxqSypUt40sbbqX9WX2h8DP" target="_blank">click here</a> for movie magic.</p>'
                    },
                    {
                        "title": "EUROPEAN TOUR 2015",
                        "date": "May 2nd, 2015",
                        'thumbnail': 'https://s3.amazonaws.com/salessite/SALES_EU_2015.jpg',
                        'mainImage' : 'https://s3.amazonaws.com/salessite/SALES_EU_2015_header.png',
                        'id' : 'european',
                        'body' : '<p>Hey Friends! It\'s been fun touring the U.S. and Canada, but we are really excited about our upcoming <b>2015 European Tour</b> this Fall. We will spend a whole month touring Europe and will hopefully get to meet you. Until that beautiful day when we cross the Atlantic Ocean into your arms, we will be spending the next few months in our home studio (bedroom) working on a full length album.</p><p>Event page & tickets here: <a href="http://on.fb.me/1Ixmkrq" target="_blank">http://on.fb.me/1Ixmkrq</a></p>'

                    }
                ];
    return {
            getPosts : function() {

                return posts; 
            }

    }

});
