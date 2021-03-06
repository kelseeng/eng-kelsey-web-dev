(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;

        function login(username, password) {
            UserService
                .findUserByCredentials(username, password)
                .then(
                    function (response) {
                        console.log(response);
                        var user = response.data;
                        if (user) {
                            var id = user._id;
                            $location.url("/user/" + id);
                        }
                    },
                    
                    function (error) {
                        vm.error = "User not found";
                    });
        }
    }
})();