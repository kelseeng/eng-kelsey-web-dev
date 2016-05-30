(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)

    function WidgetListController($routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.pageId = $routeParams.pid;

        function init() {
            vm.widgets = WidgetService.findWidgetsByPageId(vm.pageId);
        }
    }
})();