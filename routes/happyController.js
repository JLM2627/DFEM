const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");

const HappyModel = Schema.HappyModel;
// INDEX route
router.get('/', (request, response) => {
    // FIND all of the companies in the database
    HappyModel.find({})
        .then((happs) => {
            // THEN once they come back from the database
            // RENDER them in Handlebars
            response.render('happyRecipes/index', {
                happs: happs
            })
        })
        .catch((error) => {
            console.log(error)
        })
})
// NEW route
router.get('/new', (request, response) => {
  response.render('happyRecipes/new')
})
// CREATE route
router.post('/', (request, response) => {
  const createHappy = request.body
  HappyModel.create(createHappy)
      .then(() => {
          response.redirect('/happy')
      })
      .catch((error) => {
          response.send(error)
      })
})
// EDIT route
//router.get('/:happyId/edit', (request, response) => {
  //const userId = request.params.userId
  //UserModel.findById(userId)
    //  .then((user) => {
       //   response.render('users/edit', {
         //     user: user
         // })
     // })
//})
// UPDATE route
//router.put('/:userId', (request, response) => {
  //const userId = request.params.userId
  //const updatedUser = request.body
  //UserModel.findByIdAndUpdate(userId, updatedUser, { new: true })
    //  .then(() => {
      //    response.redirect(`/users/${userId}`)
      //})
//})
// SHOW route
router.get('/:happyId', (request, response) => {
  const happyId = request.params.happyId
  HappyModel.findById(happyId)
      .then((happy) => {
          response.render('happyRecipes/show', {
              happy: happy
          })
      })
      .catch((error) => {
          console.log(error)
      })
})
// DELETE route
//router.get('/:userId/delete', (request, response) => {
  //const userId = request.params.userId
  //UserModel.findByIdAndRemove(userId)
    //  .then(() => {
      //    response.redirect('/Users')
      //})
//})
module.exports = router;