const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


   
// const IngredientSchema = new Schema({
  //  name: String,
  // amount: String

//});

  //  const RecipeSchema = new Schema ({
    //    mood: String,
      //  name: String,
        //directions: String,
       // ingredient:[IngredientSchema]

//})
const SadRecipeSchema = new Schema ({
    mood: String,
    name: String,
   ingredients: String,
   directions: String

})

const HappyRecipeSchema = new Schema ({
    mood: String,
    name: String,
   ingredients: String,
   directions: String

})

const AngryRecipeSchema = new Schema ({
    mood: String,
    name: String,
    ingredients: String,
    directions: String,
  

})



const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
       
    },
    email:{
        type: String,
        required: true

    },
    //recipe:[RecipeSchema]
 });

   // Create models for each schema
const UserModel = mongoose.model('User', UserSchema)
//const RecipeModel = mongoose.model('Recipe', RecipeSchema)
//const IngredientModel = mongoose.model('Ingredient', IngredientSchema)
const HappyModel = mongoose.model('Happ', HappyRecipeSchema)
const AngryModel = mongoose.model('Anger', AngryRecipeSchema)
const SadModel = mongoose.model('sad', SadRecipeSchema )

// Export each model so they can be required elsewhere
module.exports = {
    UserModel: UserModel,
   // RecipeModel: RecipeModel,
   // IngredientModel: IngredientModel,
    HappyModel: HappyModel,
   AngryModel: AngryModel,
   SadModel: SadModel
}


//db.close();










 