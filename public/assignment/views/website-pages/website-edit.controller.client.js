(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        //todo wid not recognized

        vm.updatedWebsite = updateTheWebsite;
        vm.deletedWebsite = deleteTheWebsite;

        function init() {
            vm.website = angular.copy(WebsiteService.findWebsiteById(vm.websiteId));
        }
        init();

        function updateTheWebsite() {
            var result = WebsiteService.updateWebsite(vm.websiteId, vm.website);
            if(result === true) {
                vm.success = "Page Successfully Updated";
            }
            else {
                vm.error = "Page Not Found";
            }
        }
        
        function deleteTheWebsite() {
            var result = WebsiteService.deleteWebsite(vm.websiteId);
            if(result === true) {
                vm.success = "Website Successfully Deleted";
            }
            else {
                vm.error = "Website Cannot Be Deleted";
            }
        }
    }
})();