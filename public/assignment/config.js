(function() {
    angular
        .module("WebAppMaker")
        .config(Config);

    <!-- add default / to login routeprovider & widget edit-->

    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "/assignment/views/user-pages/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "/assignment/views/user-pages/register.view.client.html"
            })
            .when("/user/:uid", {
                templateUrl: "/assignment/views/user-pages/profile.view.client.html",
                controller: "ProfileController",
                controllerAs:"model"
            })


            .when("/user/:uid/website", {
                templateUrl: "/views/website-pages/website-list.view.client.html"
            })
            .when("/user/:uid/website/new", {
                templateUrl: "/views/website-pages/website-new.view.client.html"
            })
            .when("/user/:uid/website/:wid", {
                templateUrl: "/views/website-pages/website-edit.view.client.html"
            })


            .when("/user/:uid/website/:wid/page", {
                templateUrl: "/views/page-pages/page-list.view.client.html"
            })
            .when("/user/:uid/website/:wid/page/new", {
                templateUrl: "/views/page-pages/page-new.view.client.html"
            })
            .when("/user/:uid/website/:wid/page/:pid", {
                templateUrl: "/views/page-pages/page-edit.view.client.html"
            })

            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "/views/widget-pages/widget-list.view.client.html"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/new", {
                templateUrl: "/views/widget-pages/widget-chooser.view.client.html"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateUrl: "/views/widget-pages/widget-edit.view.client.html"
            })
    }
})();