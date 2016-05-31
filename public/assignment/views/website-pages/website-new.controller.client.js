(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);

    function NewWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        
        vm.createWebsite = createWebsite();

        function createWebsite(websiteName) {
            var newWebsite = {
                _id:(new Date().getTime()),
                name: websiteName,
                developerId: vm.userId
            };
            var result = WebsiteService.createWebsite(vm.userId, newWebsite);
            if(result === true) {
                vm.success = "Website Successfully Created";
            }
            else {
                vm.error = "Website Was Unable to Be Created";
            }
        }
    }
})();