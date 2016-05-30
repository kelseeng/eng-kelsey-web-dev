(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController)

    function NewWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        var userId = $routeParams.uid;
        
    }
})();