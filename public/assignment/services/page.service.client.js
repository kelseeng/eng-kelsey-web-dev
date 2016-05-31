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
            createName : createName,
            uniquePage : uniquePage,
            createPage   : createPage,
            findPagesByWebsiteId : findPagesByWebsiteId,
            findPageById : findPageById,
            updatePage : updatePage,
            deletePage : deletePage
        };
        return api;

        function createName(websiteId) {
            var counter = 0;
            for(var i in pages) {
                if(pages[i].websiteId === websiteId) {
                    counter++;
                }
            }
            return counter;
        }

        function uniquePage(pageId) {
            for(var i in pages) {
                if(pages[i]._id === pageId) {
                    return false;
                }
            }
            return true;
        }

        function createPage(websiteId, page) {
            if(uniquePage(page._id)){
                var newPage = {"_id": page._id, "name": page.name, "websiteId": websiteId};
                pages.push(newPage);
                return true;
            }
            return false;
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
            for(var i in pages) {
                if(pages[i]._id === pageId) {
                    page[i].name = page.name;
                    page[i].websiteId = page.websiteId;
                    return true;
                }
            }
            return false;
        }

        function deletePage(pageId) {
            for(var i in pages) {
                if(pages[i]._id === pageId) {
                    pages.splice(i, 1);
                    return true;
                }
            }
            return false;
        }
    }
})();