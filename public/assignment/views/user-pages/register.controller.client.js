(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($routeParams, UserService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        
        function init() {
            
        }
    }
})();