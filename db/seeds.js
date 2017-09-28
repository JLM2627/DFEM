
// database setups
require('dotenv').config();

var mongoose = require('mongoose');


//var Schema = require("./schema.js");

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;
// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
    console.log(err);
});
// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("Connected to MongoDB!");
});

// Pull in Models from the `schema.js`
var Schema = require("./schema.js");

var UserModel = Schema.UserModel;
var RecipeModel = Schema.RecipeModel;
var IngedientModel = Schema.IngedientModel;

// Create some Users, Recipes, and Ingredients
const Liz = new UserModel({ first: 'Liz', last:'Dock', email: '123@Gmail.com' })
const dc = new CompanyModel({ name: 'Reign', last: 'Again', email: '456@gmail.com' })
const ktwo = new CompanyModel({ name: 'jQuery', last: 'Marshall', email: '789@gmail.com' })



// Disconnect from database
db.close();