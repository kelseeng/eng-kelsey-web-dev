module.exports = function(app) {

    var userService = require("./service/user.services.server.js")(app);
    var websiteService = require("./service/website.services.server.js")(app);
    var pageService = require("./service/page.services.server.js")(app);
    var widgetService = require("./service/widget.services.service.js")(app);
    var flickrService = require("./service/flickr.services.server.js")(app);

    app.get("/say/:message", function(req, res) {
        var msg = req.params["message"];
        res.send({message: msg});
    });
};