(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController);

    function NewWidgetController($location, $routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.createWidget = createWidget;

        function createWidget(widgetType) {
            WidgetService
                .createWidget(pageId, widgetType)
                .then(
                    function(response) {
                        var widget = response.data;
                        if(widget) {
                            $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
                        }
                    }
                )
        }
    }
})();