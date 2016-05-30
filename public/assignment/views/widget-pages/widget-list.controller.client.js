(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)

    function WidgetListController(WidgetService) {
        var vm = this;
    }
})();