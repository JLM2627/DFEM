const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


   
 const IngredientSchema = new Schema({
    name: String,
    amount: String

});

    const RecipeSchema = new Schema ({
        mood: String,
        name: String,
        directions: String,
        ingredient:[IngredientSchema]

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
    recipe:[RecipeSchema]
 })
  //  const IngedientSchema = new Schema({
    //    name: String,
      //  amount: String

//});

// Create models for each schema
const UserModel = mongoose.model('User', UserSchema)
const RecipeModel = mongoose.model('Recipe', RecipeSchema)
const IngredientModel = mongoose.model('Ingredient', IngredientSchema)

// Export each model so they can be required elsewhere
module.exports = {
    UserModel: UserModel,
    RecipeModel: RecipeModel,
    IngredientModel: IngredientModel
}


//db.close();










 