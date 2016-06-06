(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);
    function PageService($http) {
        var api = {
            createPage   : createPage,
            findAllPagesForWebsite : findAllPagesForWebsite,
            findPageById : findPageById,
            updatePage : updatePage,
            deletePage : deletePage
        };
        return api;

        app.post("/api/website/:websiteId/page", createPage);
        app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
        app.get("/api/page/:pageId", findPageById);
        app.put("/api/page/:pageId", updatePage);
        app.delete("/api/page/:pageId", deletePage);

        function createPage(name, websiteId) {
            var url = "/api/website/" + websiteId + "/page";
            var newPage = {
                name: name,
                websiteId: websiteId
            };
            return $
        }
        
        function findAllPagesForWebsite(websiteId) {
            var url = "/api/website/" + websiteId + "/page";
            return $http.get(url);
        }

        function findPageById(pageId) {
            var url = "/api/page" + pageId;
            return $http.get(url);
        }

        function updatePage(pageId, newPage) {
            var url = "/api/page" + pageId;
            return $http.put(url, newPage);
        }

        function deletePage(pageId) {
            var url = "/api/page" + pageId;
            return $http.delete(url);
        }
    }
})();