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
                _id:(newDate().getTime()),
                name: "Post " + PageService.createName(vm.websiteId),
                websiteId: vm.websiteId
            };
            widgets.push(newWidget);
        }
    }
})();