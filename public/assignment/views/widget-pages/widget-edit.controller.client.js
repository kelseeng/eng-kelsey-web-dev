(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController", EditWidgetController);

    function EditWidgetController($routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.widgetId = $routeParams.wgid;

        function init() {
            vm.widget = angular.copy(WidgetService.findWidgetByPageId(vm.pageId));
        }
        init();

        function updateTheWidget() {
            var result = WidgetService.updateWidget(vm.widgetId, vm.widget);
            if(result === true) {
                vm.success = "Widget Successfully Updated";
            }
            else {
                vm.error = "Widget Not Found";
            }
        }

        function deleteTheWidget() {
            var result = WidgetService.deleteWidget(vm.widgetId);
            if(result === true) {
                vm.success = "Widget Successfully Deleted";
            }
            else {
                vm.error = "Widget Cannot Be Deleted";
            }
        }
    }
})();