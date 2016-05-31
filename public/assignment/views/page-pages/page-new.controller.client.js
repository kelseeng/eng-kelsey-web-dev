(function() {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);

    function NewPageController($routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.createPage = createPage;

        function createPage() {
            var newPage = {
                _id:(new Date().getTime()),
                name: "Post " + PageService.createName(vm.websiteId),
                websiteId: vm.websiteId
            };
            var page = PageService.createPage(vm.websiteId, newPage);
            if(page === true) {
                vm.success = "Page Successfully Created";
            }
            else {
                vm.error = "Page Was Unable to Be Created";
            }
        }
    }
})();