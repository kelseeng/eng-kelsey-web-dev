(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController)

    function NewWidgetController(WidgetService) {
        var vm = this;
    }
})();