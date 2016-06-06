(function() {
    angular
        .module("WebAppMaker")
        .config(Config);

    <!-- add default / to login routeprovider & widget edit-->

    function Config($routeProvider) {
        $routeProvider
            //user routes
            .when("/login", {
                templateUrl: "/assignment/views/user-pages/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "/assignment/views/user-pages/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/user/:uid", {
                templateUrl: "/assignment/views/user-pages/profile.view.client.html",
                controller: "ProfileController",
                controllerAs:"model"
            })

            //website routes
            .when("/user/:uid/website", {
                templateUrl: "/assignment/views/website-pages/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/new", {
                templateUrl: "/assignment/views/website-pages/website-new.view.client.html",
                controller: "NewWebsiteController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid", {
                templateUrl: "/assignment/views/website-pages/website-edit.view.client.html",
                controller: "EditWebsiteController",
                controllerAs: "model"
            })

            //page routes
            .when("/user/:uid/website/:wid/page", {
                templateUrl: "/assignment/views/page-pages/page-list.view.client.html",
                controller: "PageListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/new", {
                templateUrl: "/assignment/views/page-pages/page-new.view.client.html",
                controller: "NewPageController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid", {
                templateUrl: "/assignment/views/page-pages/page-edit.view.client.html",
                controller: "EditPageController",
                controllerAs: "model"
            })

            //widget routes
            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "/assignment/views/widget-pages/widget-list.view.client.html",
                controller: "WidgetListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/new", {
                templateUrl: "/assignment/views/widget-pages/widget-chooser.view.client.html",
                controller: "NewWidgetController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateUrl: "/assignment/views/widget-pages/widget-edit.view.client.html",
                controller: "EditWidgetController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid/flickr", {
                templateUrl: "/assignment/views/widget-pages/widget-flickr-search.view.client.html",
                controller: "FlickrImageSearchController",
                controllerAs: "model"
            })

            .otherwise({
                redirectTo: "/login"
            })
    }
})();