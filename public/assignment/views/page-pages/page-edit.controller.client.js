(function() {
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);

    function EditPageController($location, $routeParams, PageService) {
        var vm = this;
        vm.user = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;

        vm.updatedPage = updateThePage;
        vm.deletedPage = deleteThePage;

        function init() {
            PageService
                .findAllPagesForWebsite(websiteId)
                .then(
                    function(response) {
                        vm.page = response.data;
                    }
                );
        }
        init();

        function updateThePage() {
            PageService
                .updatePage(pageId, page)
                .then(
                    function(response) {
                        $location.url("/user/"+userId+"/website/"+websiteId+"/page");
                    },
                    function(error) {
                        vm.error = "Page not found";
                    }
                );
        }
        
        function deleteThePage() {
            PageService
                .deletePage(pageId)
                .then(
                    function(response) {
                        $location.url("/user/"+userId+"/website/"+websiteId+"/page");
                    },
                    function(error) {
                        vm.error = "Page was unable to be removed"
                    }
                );
        }
    }
})();