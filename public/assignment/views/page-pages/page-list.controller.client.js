(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        // todo fix wid variable

        function init() {
            vm.pages = PageService.findPagesByWebsiteId(vm.websiteId);
        }
        init();
    }
})();