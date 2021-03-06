module.exports = function(app) {

    var pages =
        [
            { "_id": "321", "name": "Post 1", "websiteId": "456" },
            { "_id": "432", "name": "Post 2", "websiteId": "456" },
            { "_id": "543", "name": "Post 3", "websiteId": "456" }
        ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);
    
    function createPage(req, res) {
        var newPage = req.body;
        newPage._id = (new Date()).getTime() + "";
        pages.push(newPage);
        res.json(newPage);
    }
    
    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        var websitePages = [];
        for(var i in pages) {
            if(pages[i].websiteId === websiteId) {
                websitePages.push(pages[i]);
            }
        }
        res.json(websitePages);
        return;
    }
    
    function findPageById(req, res) {
        var pageId = req.params.pageId;
        for(var i in pages) {
            if(pages[i]._id === pageId) {
                res.json(pages[i]);
                return;
            }
        }
        res.status(404).send("Page not found");
    }
    
    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var newPage = req.body;
        for(var i in pages) {
            if(pages[i]._id === pageId) {
                pages[i].name = newPage.name;
                res.send(200);
                return;
            }
        }
        res.status(400).send("Page with ID: "+ pageId +" not found");
    }
    
    function deletePage(req, res) {
        var pageId = req.params.pageId;
        for(var i in pages) {
            if(pages[i]._id === pageId) {
                pages.splice(i, 1);
                res.send(200);
                return;
            }
        }
        res.status(404).send("Unable to remove page with ID: " + pageId);
    }
};