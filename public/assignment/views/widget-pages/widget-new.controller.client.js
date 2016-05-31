(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController);

    function NewWidgetController($routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.createWidget = createWidget;

        function createWidget(widgetType) {
            var newWidget = {
                _id:(new Date().getTime()),
                widgetType: widgetType
            };
            var widget = WidgetService.createWidget(vm.pageId, newWidget);
            if(page === true) {
                vm.success = "Widget Successfully Created";
            }
            else {
                vm.error = "Widget Was Unable to Be Created";
            }
        }
    }
})();