const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");
const AngryModel = Schema.AngryModel;

// INDEX route
router.get('/', (request, response) => {
    // FIND all of the companies in the database
    AngryModel.find({})
        .then((anger) => {
            // THEN once they come back from the database
            // RENDER them in Handlebars
            response.render('angryRecipes/index', {
                anger: anger
            })
        })
        .catch((error) => {
            console.log(error)
        })
})
// NEW route
router.get('/new', (request, response) => {
  response.render('angryRecipes/new')
})
// CREATE route
router.post('/', (request, response) => {
  const createAngry = request.body
  AngryModel.create(createAngry)
      .then(() => {
          response.redirect('/angry')
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
router.get('/:angryId', (request, response) => {
  const angryId = request.params.angryId
  AngryModel.findById(angryId)
      .then((angry) => {
          response.render('angryRecipes/show', {
              angry: angry
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