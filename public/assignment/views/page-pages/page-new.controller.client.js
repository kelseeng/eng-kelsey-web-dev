(function() {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);

    function NewPageController($location, $routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.createPage = createPage;

        function createPage(pageName) {
            PageService
                .createPage(pageName, websiteId)
                .then(
                    function(response) {
                        var page = response.data;
                        if(page) {
                            $location.url("/user/"+userId+"/website/"+websiteId+"/page");
                        }
                    }
                );
        }
    }
})();