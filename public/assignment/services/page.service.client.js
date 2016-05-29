(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);
    function PageService() {
        var pages =
            [
                { "_id": "321", "name": "Post 1", "websiteId": "456" },
                { "_id": "432", "name": "Post 2", "websiteId": "456" },
                { "_id": "543", "name": "Post 3", "websiteId": "456" }
            ];
        var api = {
            "createWebsite"   : "createWebsite",
            "findWebsitesByUser" : "findWebsitesByUser",
            "findWebsitesById" : "findWebsitesById",
            "updateWebsite" : "updateWebsite",
            "deleteWebsite" : "deleteWebsite"
        };
        return api;
        function createPage(websiteId, page) {
            
        }
        function findPagesByWebsiteId(websiteId) {
            
        }
        function findPageById(pageId) {
            
        }
        function updatePage(pageId, page) {
            
        }
        function deletePage(pageId) {
            
        }
    }
})();