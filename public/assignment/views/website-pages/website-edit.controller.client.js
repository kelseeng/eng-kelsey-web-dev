(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        //todo wid not recognized

        vm.updated = updateThePage;

        function init() {
            vm.website = angular.copy(UserService.findWebsiteById(vm.websiteId));
        }
        init();

        function updateThePage() {
            var result = WebsiteService.updateWebsite(vm.websiteId, vm.website);
            if(result === true) {
                vm.success = "Page Successfully Updated";
            }
            else {
                vm.error = "Page Not Found";
            }
        }
    }
})();