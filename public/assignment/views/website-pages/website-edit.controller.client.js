(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        //todo wid not recognized

        vm.updatedWebsite = updateTheWebsite;
        vm.deletedWebsite = deleteTheWebsite;
        
        function init() {
            WebsiteService
                .findWebsiteById(websiteId)
                .then(function(response) {
                   vm.website = response.data; 
                });
        }
        init();

        function updateTheWebsite() {
            WebsiteService
                .updateWebsite(websiteId, vm.website)
                .then(
                    function(response) {
                        $location.url("/user/"+userId+"/website");
                    },
                    function(error) {
                        vm.error = "Website Not Found";
                    }
                );
        }
        
        function deleteTheWebsite() {
            WebsiteService
                .deleteWebsite(websiteId)
                .then(
                    function(response) {
                        $location.url("/user/"+userId+"/website");
                    },
                    function(error) {
                        vm.error = "Unable to remove website";
                    }
                );
        }
    }
})();