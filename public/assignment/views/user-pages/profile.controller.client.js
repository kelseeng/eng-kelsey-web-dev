(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        vm.updateUser = updateUser;

        var id = $routeParams["uid"];
        var index = -1;

        function init() {
            vm.user = UserService.findUserById(id);
        }
        init();

        function updateUser() {
            var result = UserService.updateUser(vm.user._id, vm.user);
            if(result === true) {
                vm.success = "User Successfully Updated";
            }
            else {
                vm.error = "User Not Found";
            }
        }
    }
})();