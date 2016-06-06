(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController", EditWidgetController);

    function EditWidgetController($location, $routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.widgetId = $routeParams.wgid;

        function init() {
            WidgetService  
                .findAllWidgetsForPage(pageId)
                .then(
                    function(response) {
                        vm.widget = response.data;
                    }
                )
        }
        init();

        function updateTheWidget() {
            WidgetService   
                .updateWidget(widgetId, widget)
                .then(
                    function(response) {
                        $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
                    },
                    function(error) {
                        vm.error = "Widget not found";
                    }
                );
        }

        function deleteTheWidget() {
            WidgetService
                .deleteWidget(widgetId)
                .then(
                    function(response) {
                        $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
                    },
                    function(error) {
                        vm.error = "Widget was unable to be removed"
                    }
                );
        }
    }
})();