(function(){
    var injectParams = ['$rootScope'];

    var newsletterController = function ($rootScope) {
        $rootScope.title = 'Newsletter';
    };

    newsletterController.$inject = injectParams;
    angular.module('51App').controller('NewsletterController', newsletterController);
}());