(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)

    function PageListController(PageService) {
        var vm = this;
    }
})();