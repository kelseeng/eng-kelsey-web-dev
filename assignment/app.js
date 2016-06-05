module.exports = function(app) {

    var userService = require("./services/user.services.server.js")(app);
    var websiteService = require("./services/website.services.server.js")(app);
    var pageService = require("./services/page.services.server.js")(app);
    var widgetService = require("./services/widget.services.service.js")(app);

    app.get("/allusers/:username", function(req, res) {
        var username = req.params['username'];
        for(var i in users) {
            if(users[i].username === username) {
                res.send(users[i]);
            }
        }
        //res.send(users);
    });

    app.get("/say/:message", function(req, res) {
        var msg = req.params["message"];
        res.send({message: msg});
    });
};