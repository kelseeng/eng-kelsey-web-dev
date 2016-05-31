(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);

    function NewWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        var userId = $routeParams.uid;
        
        vm.createWebsite = createWebsite;

        function createWebsite() {
            var newWebsite = {
                _id:(newDate().getTime()),
                name: widgetType,
            };
            widgets.push(newWidget);
        }
    }
})();