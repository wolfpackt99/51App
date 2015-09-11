(function () {
    var injectParams = ['$http', '$q'];
    var calendarFactory = function ($http, $q) {
        var baseUrl = 'http://f3area51.apphb.com/api/calendar?callback=JSON_CALLBACK';//'http://f3area51.apphb.com/Schedule/list?callback=JSON_CALLBACK',
        factory = {};

        factory.getCalendars = function (cache) {
            var deferred = $q.defer();
            return $http({
                method: 'JSONP',
                url: baseUrl,
                responseType: 'application/json'
            }).then(function (data) {
                return data;
            }, function (err) {
                return 'there was an error' + err;
            });

            
        };
        return factory;
    };
    
    calendarFactory.$inject = injectParams;

    angular.module('51App').factory('calendarService', calendarFactory);
    
}());