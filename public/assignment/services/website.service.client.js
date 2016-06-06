(function() {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    

    function WebsiteService($http) {
        var api = {
            createWebsite   : createWebsite,
            findAllWebsitesForUser : findAllWebsitesForUser,
            findWebsiteById : findWebsiteById,
            updateWebsite : updateWebsite,
            deleteWebsite : deleteWebsite
        };
        return api;

        function createWebsite(name, userId) {
            var url = "/api/user/" + userId + "/website";
            var website = {
                name: name,
                developerId: userId
            };
            return $http.post(url, website);
        }
        function findAllWebsitesForUser(userId) {
            var url = "/api/user/" + userId + "/website";
            return $http.get(url);
        }
        function findWebsiteById(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.get(url);
        }
        function updateWebsite(websiteId, newWebsite) {
            var url = "/api/website/" + websiteId;
            return $http.put(url, newWebsite);
        }

        function deleteWebsite(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.delete(url);
        }
    }
})();