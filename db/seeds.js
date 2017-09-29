
// database setups
require('dotenv').config();

var mongoose = require('mongoose');


var Schema = require("./schema.js");

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
var IngredientModel = Schema.IngredientModel;

UserModel.remove({}, function (err) {
    console.log(err);
});
RecipeModel.remove({}, function (err) {
    console.log(err);
});
IngredientModel.remove({}, function (err) {
    console.log(err);
});

// Create some Users, Recipes, and Ingredients
const Liz = new UserModel({ name: 'Liz Lemon', email: '123@Gmail.com' })
const Reign = new UserModel({ name: 'Reign Sucks', email: '456@gmail.com' })
const jQuery = new UserModel({ name: 'jQuery Rules', email: '789@gmail.com' })


const BananaPudding = new RecipeModel({mood: 'happy', name:'Banana Pudding', directions: 'mix together'})
const CPudding = new RecipeModel({mood: 'happy', name:'Chocolate Pudding', directions: 'mix together'})
const MPudding = new RecipeModel({mood: 'happy', name:'MPudding', directions: 'mix together'})

const Flour = new IngredientModel({ name: 'flour', amount: '2 cups'})
const Milk = new IngredientModel({ name: 'milk', amount: '2 cups'})
const Wine = new IngredientModel({ name: 'wine', amount: '10 cups'})


const users = [Liz, Reign, jQuery]
const recipes = [BananaPudding, CPudding, MPudding]
const ingredients = [Flour, Milk, Wine]

users.forEach((user) => {
    // user.recipe = recipe
    user.save()
    .then((user)=> {
        //console.log(user);
        console.log(`${user.name} saved!`)
    })
    .catch((error) =>{
        console.log(error)
    })
})
// Disconnect from database
db.close();