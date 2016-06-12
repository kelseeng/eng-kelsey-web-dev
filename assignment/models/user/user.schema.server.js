module.exports = function() {
    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        username: {type: String, required: true},
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        website: [{type: mongoose.Schema.ObjectId, ref:"Website"}], 
        dob: Date,
        dateCreated: {type: Date, default: Date.now},
        dateUpdated: Date
    }, {collection: "assignment.user"});
    
    return UserSchema;
};