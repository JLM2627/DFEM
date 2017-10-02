
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
var HappyModel = Schema.HappyModel;
var AngryModel = Schema.AngryModel;




UserModel.remove({}, function (err) {
    console.log(err);
});


HappyModel.remove({}, function (err) {
    console.log(err);
});

AngryModel.remove({}, function (err) {
    console.log(err);
});

// Create some Users, Recipes, and Ingredients
const Liz = new UserModel({ name: 'Liz Lemon', email: '123@Gmail.com' })
const Reign = new UserModel({ name: 'Reign Sucks', email: '456@gmail.com' })
const jQuery = new UserModel({ name: 'jQuery Rules', email: '789@gmail.com' })


// create some Happy Recipes
const ChocolateMouse = new HappyModel({ mood: 'happy', name: 'Chocolate Mouse', ingredients: '1 cup sugar, 1 cup chocolate chips', directions: 'mix together' })
const ChocolateCookies = new HappyModel({mood: 'happy', name:'ChocolateCookies', ingredients: '1 cup sugar, 1 cup chocolate chips', directions: 'mix together' })
const Fudge = new HappyModel({mood: 'happy', name:'Fudge', ingredients: '3 cups semisweet chocolate chips, 1 (14 oz. can) sweetened condensed milk, 1/4 cup butter, 1 cup walnuts (optional)',directions: 'Place chocolate chips, sweetened condensed milk, and butter or margarine in large microwaveable bowl. Zap in microwave on medium until chips are melted, about 3-5 minute, stirring once or twice during cooking. Stir in nuts, if desired.' })
const ChocolateTorte = new HappyModel({ mood: 'happy', name: 'Chocolate Torte', ingredients: '2 tbsp. cake flour, 1/4 tsp. salt, 6 tbsp. butter, 6 oz. chopped dark chocolate, 3 eggs, 1/2 cup sugar, zest of one large orange', directions: 'Heat oven to 350 degrees F. Butter an 8-inch springform pan and securely wrap the bottom with aluminum foil. Set aside. 2. Sift the flour, cocoa, and salt together and set aside.Set a heatproof bowl (metal) over a pot filled with 1 inch of simmering water. Melt the butter in the bowl. Add the chocolate. Stir just until the chocolate melts. Remove from the heat and wipe the bowl bottom. Let chocolate cool.Lightly beat the eggs. Add the sugar and orange zest and beat, using a mixer set on medium-high, until pale and quadrupled in volume -- about 5 minutes. Reduce mixer speed to low to stir in the chocolate mixture. Fold in the flour mixture gently.Pour into the prepared pan and bake until a tester inserted in the center comes out clean -- about 35 minutes. Cool completely on a wire rack before unmolding.'  })

// Create some Angry recipes
const SaltedChocolate = new AngryModel({ mood: 'angry', name: 'Salted chocolate and Pretzel Bars', ingredients: '12 ounces good quality semi-sweet chocolate chips ,divided (I like Ghiardelli best for melting). 8 ounces mini pretzel twists ,half of a regular 16-ounce bag. 11 ounce bag Kraft Caramel Bits or homemade caramel. Sea salt for sprinkling', directions: 'Line a large, rimmed baking sheet with parchment paper. Melt 8 ounces of the chocolate chips gently in the microwave (on low heat, stirring every 15 seconds) until smooth. Spread the chocolate evenly over the parchment. Immediately add the pretzel twists over the top and gently press them into the chocolate.  Add caramel bits to a microwave safe bowl with 2 tablespoons water and melt according to package instructions (on high for 2 minutes). Stir well and drizzle the melted caramel over the top of all of the pretzels. Melt remaining 4 ounces of chocolate and drizzle over the caramel. Sprinkle with sea salt. Refrigerate until hardened. Cut or tear into pieces, Enjoy!' })

const users = [Liz, Reign, jQuery]
const happyRecipes = [ChocolateMouse, ChocolateCookies, Fudge, ChocolateTorte]
const angryRecipes = [SaltedChocolate]

angryRecipes.forEach((angryRecipe) => {
    // user.recipe = recipe
    angryRecipe.save()
    .then((angryRecipe)=> {
        //console.log(happyRecipe);
        console.log(`${angryRecipe.name} saved!`)
    })
    .catch((error) =>{
        console.log(error)
    })
})

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