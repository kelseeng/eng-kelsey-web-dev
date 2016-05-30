(function() {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController)

    function NewPageController(PageService) {
        var vm = this;
    }
})();