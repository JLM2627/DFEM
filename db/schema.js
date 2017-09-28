const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


    const UserSchema = new Schema({
    name:{
        first: String,
        last: String,
       // required: true
    },
    email:{
        type: String,
      //  required: true

    }
 })


    const RecipeSchema = new Schema ({
        mood: String,
        name: String,
        directions: string,
        ingredient:[ingedientSchema]

})

    const IngedientSchema = new Schema({
        name: String,
        amount: String

});

// Create models for each schema
const UserModel = mongoose.model('User', UserSchema)
const RecipeModel = mongoose.model('Recipe', RecipeSchema)
const IngedientModel = mongoose.model('Ingredient', IngredientSchema)

// Export each model so they can be required elsewhere
module.exports = {
    UserModel: UserModel,
 //   RecipeModel: RecipeModel,
   // IngedientModel: IngedientModel
}











 