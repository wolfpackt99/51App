(function(){
    var injectParams = ['$rootScope','feedService',];

    var backblastsController = function ($rootScope, feedService) {
        var vm = this;
        $rootScope.title = "Backblasts"
        var x = feedService.parseFeed('http://f3area51.apphb.com/api/feed?callback=JSON_CALLBACK').then(function(res){
            for (var i=0; i<res.data.length; i++){
                var temp = res.data[i].Date;
                res.data[i].Date = new Date(temp);
            }
            vm.feeds = res.data;
        });
    };

    backblastsController.$inject = injectParams;
    angular.module('51App').controller('BackblastsController', backblastsController);
}());