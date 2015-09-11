
var app = angular.module('51App', [
    'ngRoute',
    'ngResource',
    'mobile-angular-ui'
]);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'MainController',
        templateUrl: 'home.html',
        reloadOnSearch: false,
        controllerAs: 'vm'
    });
    $routeProvider.when('/newsletter', {
        controller: 'NewsletterController',
        templateUrl: 'newsletter.html',
        reloadOnSearch: false,
        controllerAs: 'vm'

    });
    $routeProvider.when('/schedule', {
        controller: 'ScheduleController',
        templateUrl: 'schedule.html',
        reloadOnSearch: false,
        controllerAs: 'vm'
    });
    $routeProvider.when('/backblasts', {
        controller: 'BackblastsController',
        templateUrl: 'backblasts.html',
        reloadOnSearch: false,
        controllerAs: 'vm'
    });

});