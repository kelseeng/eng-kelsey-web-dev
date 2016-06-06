module.exports = function (app) {
    var multer = require('multer'); 
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    var widgets =
        [
            { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

    app.post ("/api/upload", upload.single('myFile'), uploadImage);
    app.post ("/api/page/:pageId/widget", createWidget);
    app.get ("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get ("/app/widget/:widgetId", findWidgetById);
    app.put ("/app/widget/:widgetId", updateWidget);
    app.delete ("/app/widget/:widgetId", deleteWidget);

    function uploadImage(req, res) {

        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;

        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;

        for(var i in widgets) {
            if(widgets[i]._id === widgetId) {
                widgets[i].url = "/uploads/"+filename;
            }
        }

        res.redirect("/assignment/#/user/:uid/website/:wid/page/:pid/widget/:wgid");
    }

    function createWidget(req, res) {
        var newWidget = req.body;
        newWidget._id = (new Date()).getTime() + "";
        widgets.push(newWidget);
        res.json(newWidget);
    }

    function findAllWidgetsForPage(req, res) {
        var pageId = req.params.pageId;
        var pageWidgets = [];
        for(var i in widgets) {
            if(widgets[i].pageId === pageId) {
                pageWidgets.push(widgets[i]);
            }
        }
        res.json(pageWidgets);
        return;
    }

    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        for(var i in widgets) {
            if(widgets[i]._id === widgetId) {
                res.json(widgets[i]);
                return;
            }
        }
        res.status(404).send("Widget not found");
    }

    function updateWidget(req, res) {
        var widgetId = req.params.widgetId;
        var newWidget = req.body;
        for(var i in widgets) {
            if(widgets[i]._id === widgetId) {
                switch(widgets[i].widgetType) {
                    case "HEADER":
                        widgets[i].size = newWidget.size;
                        widgets[i].text = newWidget.text;
                        break;
                    case "IMAGE":
                        widgets[i].width = newWidget.width;
                        widgets[i].url = newWidget.url;
                        break;
                    case "YOUTUBE":
                        widgets[i].width = newWidget.width;
                        widgets[i].url = newWidget.url;
                        break;
                    case "HTML":
                        widgets[i].text = newWidget.text;
                        break;
                }
                res.send(200);
                return;
            }
        }
        res.status(400).send("Widget with ID: "+ widgetId +" not found");
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.widgetId;
        for(var i in users) {
            if(widgets[i]._id === id) {
                widgets.splice(i, 1);
                res.send(200);
                return;
            }
        }
        res.status(404).send("Unable to remove widget with ID: " + widgetId);
    }
}