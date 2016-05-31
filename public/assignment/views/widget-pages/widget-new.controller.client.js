(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController)

    function NewWidgetController($routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.createWidget = createWidget;

        function createWidget(widgetType) {
            var newWidget = {
                _id:(newDate().getTime()),
                widgetType: widgetType
            }
            widgets.push(newWidget);
        }
    }
})();