(function () {
    var injectParams = ['$http'];
    var calendarFactory = function ($http) {
        factory = {};

        factory.parseFeed = function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }

        return factory;
    };
    
    calendarFactory.$inject = injectParams;

    angular.module('51App').factory('feedService', calendarFactory);
    
}());