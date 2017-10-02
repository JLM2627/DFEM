
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
//var RecipeModel = Schema.RecipeModel;
//var IngredientModel = Schema.IngredientModel;
var HappyModel = Schema.HappyModel;




UserModel.remove({}, function (err) {
    console.log(err);
});
//RecipeModel.remove({}, function (err) {
  //  console.log(err);
//});
//IngredientModel.remove({}, function (err) {
  //  console.log(err);
//});

HappyModel.remove({}, function (err) {
    console.log(err);
})

// Create some Users, Recipes, and Ingredients
const Liz = new UserModel({ name: 'Liz Lemon', email: '123@Gmail.com' })
const Reign = new UserModel({ name: 'Reign Sucks', email: '456@gmail.com' })
const jQuery = new UserModel({ name: 'jQuery Rules', email: '789@gmail.com' })

// Create some Recipes
//const BananaPudding = new RecipeModel({mood: 'happy', name:'Banana Pudding', directions: 'mix together' })
//const CPudding = new RecipeModel({mood: 'happy', name:'Chocolate Pudding', directions: 'mix together' })
//const MPudding = new RecipeModel({mood: 'happy', name:'MPudding', directions: 'mix together' })


// Create Some ingredients
//const Flour = new IngredientModel({ name: 'flour', amount: '2 cups'})
//const Milk = new IngredientModel({ name: 'milk', amount: '2 cups'})
//const Wine = new IngredientModel({ name: 'wine', amount: '10 cups'})

// create some Happy Recipes
const ChocolateMouse = new HappyModel({ mood: 'happy', name: 'Chocolate Mouse', directions: 'mix together', ingredients: '1 cup sugar, 1 cup chocolate chips' })
const ChocolateCookies = new HappyModel({mood: 'happy', name:'ChocolateCookies', directions: 'mix together', ingredients: '1 cup sugar, 1 cup chocolate chips' })
const Fudge = new HappyModel({mood: 'happy', name:'Fudge', directions: 'Place chocolate chips, sweetened condensed milk, and butter or margarine in large microwaveable bowl. Zap in microwave on medium until chips are melted, about 3-5 minute, stirring once or twice during cooking. Stir in nuts, if desired.', ingredients: '3 cups semisweet chocolate chips, 1 (14 oz. can) sweetened condensed milk, 1/4 cup butter, 1 cup walnuts (optional)' })


const users = [Liz, Reign, jQuery]
//const recipes = [BananaPudding, CPudding, MPudding]

//const ingredients = [Flour, Milk, Wine]
const happyRecipes = [ChocolateMouse, ChocolateCookies, Fudge]

happyRecipes.forEach((happyRecipe) => {
    // user.recipe = recipe
    happyRecipe.save()
    .then((happyRecipe)=> {
        //console.log(happyRecipe);
        console.log(`${happyRecipe.name} saved!`)
    })
    .catch((error) =>{
        console.log(error)
    })
})

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