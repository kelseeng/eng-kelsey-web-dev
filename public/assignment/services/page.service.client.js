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
            createPage   : createPage,
            findPagesByWebsiteId : findPagesByWebsiteId,
            findPageById : findPageById,
            updatePage : updatePage,
            deletePage : deletePage
        };
        return api;

        function createPage(websiteId, page) {
            for(var i in pages) {
                if(pages[i].websiteId === websiteId) {

                }
                else {
                    pages.push(page);
                }
            }
        }
        function findPagesByWebsiteId(websiteId) {
            var result = [];
            for(var i in pages) {
                if(pages[i].websiteId === websiteId) {
                    result.push(pages[i]);
                }
            }
            return result;
        }

        function findPageById(pageId) {
            for(var i in pages) {
                if(pages[i]._id === pageId) {
                    return pages[i];
                }
            }
            return null;
        }
        function updatePage(pageId, page) {
            
        }

        function deletePage(pageId) {
            var index = -1;
            for(var i in pages) {
                if(pages[i]._id === pageId) {
                    index = i;
                }
            }
            return null;
        }
    }
})();