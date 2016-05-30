(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController)

    function EditWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        //todo wid not recognized

        function init() {
            vm.website = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();
    }
})();