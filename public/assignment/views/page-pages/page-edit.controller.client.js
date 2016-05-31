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

        function init() {
            vm.page = angular.copy(UserService.findPageById(vm.pageId));
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
    }
})();