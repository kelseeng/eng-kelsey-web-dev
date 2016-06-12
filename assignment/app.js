module.exports = function(app) {

    var models = require("./models/models.js")();

    var userService = require("./service/user.services.server.js")(app, models);
    var websiteService = require("./service/website.services.server.js")(app, models);
    var pageService = require("./service/page.services.server.js")(app, models);
    var widgetService = require("./service/widget.services.server.js")(app, models);

    app.get("/say/:message", function(req, res) {
        var msg = req.params["message"];
        res.send({message: msg});
    });
};