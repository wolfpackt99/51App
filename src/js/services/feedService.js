(function () {
    var injectParams = ['$http'];
    var calendarFactory = function ($http) {
        factory = {};

        factory.parseFeed = function(url){
            return $http.jsonp(url + '');
        }

        return factory;
    };
    
    calendarFactory.$inject = injectParams;

    angular.module('51App').factory('feedService', calendarFactory);
    
}());