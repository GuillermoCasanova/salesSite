angular.module('Sales')
    .factory('Theme',
       function(
      ) {


        var themes = [
                {'name' : "getting-it-on"},
                {'name' : "ep"},
                {'name' : "sales-renee"},
                 {'name' : "vow"},
                 {'name' : 'toto'},
                 {'name' :'chinese-new-year'},
                 {'name' : 'toto-xxyyxx-remix'},
                 {'name' : 'big-sis'}
                ];
    return {
            getThemes : function() {

                return themes; 
            }

    }

});
