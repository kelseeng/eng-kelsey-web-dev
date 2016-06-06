(function() {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);
    function WidgetService($http) {

        var api = {
            createWidget   : createWidget,
            findAllWidgetsForPage : findAllWidgetsForPage,
            findWidgetById : findWidgetById,
            updateWidget : updateWidget,
            deleteWidget : deleteWidget
        };
        return api;

        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;

        function uploadImage(widgetId, width, file) {
            var url = "/api/upload";
            return $http.post(url);
        }
        
        function createWidget(pageId, widgetType) {
            var url = "/api/page/" + pageId + "/widget";
            var widget = {
                widgetType: widgetType,
                pageId: pageId
            };
            return $http.post(url, widget);
        }
        
        function findAllWidgetsForPage(pageId) {
            var url = "/api/page/" + pageId + "/widget";
            return $http.get(url);
        }

        function findWidgetById(widgetId) {
            var url = "/api/widget/" + widgetId;
            return $http.get(url);
        }

        function updateWidget(widgetId, newWidget) {
            var url = "/api/widget/" + widgetId;
            return $http.put(url, newWidget);
        }

        function deleteWidget(widgetId) {
            var url = "/api/widget/" + widgetId;
            return $http.delete(url);
        }
    }
})();