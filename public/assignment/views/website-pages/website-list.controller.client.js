(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)

    function WebsiteListController(WebsiteService) {
        var vm = this;
    }
})();