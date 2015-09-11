(function(){
    var injectParams = ['$rootScope'];

    var mainController = function ($rootScope) {
        $rootScope.title = 'Welcome';
    };

    mainController.$inject = injectParams;
    angular.module('51App').controller('MainController', mainController);
}());