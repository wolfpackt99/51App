(function(){
    var injectParams = ['calendarService','$rootScope'];

    var scheduleController = function (calendarService, $rootScope) {
        var vm = this;
        $rootScope.title = 'Schedule';
        var x = calendarService.getCalendars(true)
        x.then(function(results){
            vm.list = results.data;
            console.log(results.data);
        }, function(reason){
            console.log(reason);
        });
        
    };

    scheduleController.$inject = injectParams;
    angular.module('51App').controller('ScheduleController', scheduleController);
}());