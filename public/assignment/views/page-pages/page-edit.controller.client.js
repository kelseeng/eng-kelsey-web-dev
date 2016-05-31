(function() {
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);

    function EditPageController($routeParams, PageService) {
        var vm = this;
        vm.user = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;

        vm.updatedPage = updateThePage;
        vm.deletedPage = deleteThePage;

        function init() {
            vm.page = angular.copy(PageService.findPageByWebsiteId(vm.websiteId));
        }
        init();

        function updateThePage() {
            var result = PageService.updatePage(vm.pageId, vm.page);
            if(result === true) {
                vm.success = "Page Successfully Updated";
            }
            else {
                vm.error = "Page Not Found";
            }
        }
        
        function deleteThePage() {
            var result = PageService.deletePage(vm.pageId);
            if(result === true) {
                vm.success = "Page Successfully Deleted";
            }
            else {
                vm.error = "Page Cannot Be Deleted";
            }
        }
    }
})();