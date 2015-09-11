(function(){
    var injectParams = ['$rootScope','feedService',];

    var backblastsController = function ($rootScope, feedService) {
        var vm = this;
        $rootScope.title = "Backblasts"
        var x = feedService.parseFeed('http://f3nation.com/locations/charlotte-south-nc/feed/').then(function(res){
            for (var i=0; i<res.data.responseData.feed.entries.length; i++){
                var temp = res.data.responseData.feed.entries[i].publishedDate;
                res.data.responseData.feed.entries[i].publishedDate = new Date(temp);
            }
            vm.feeds = res.data.responseData.feed.entries;
        });
    };

    backblastsController.$inject = injectParams;
    angular.module('51App').controller('BackblastsController', backblastsController);
}());