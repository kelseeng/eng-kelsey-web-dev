(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);

    function NewWebsiteController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.createWebsite = createWebsite;

        function createWebsite(websiteName) {
            WebsiteService
                .createWebsite(websiteName, userId)
                .then(
                    function(response) {
                        var website = response.data;
                        if(website) {
                            $location.url("/user/"+userId+"/website");
                        }
                    }
                );
        }
    }
})();