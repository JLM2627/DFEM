const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");
const SadModel = Schema.SadModel;

// INDEX route
router.get('/', (request, response) => {
    // FIND all of the companies in the database
    SadModel.find({})
        .then((sads) => {
            // THEN once they come back from the database
            // RENDER them in Handlebars
            response.render('sadRecipes/index', {
                sads: sads
            })
        })
        .catch((error) => {
            console.log(error)
        })
})
// NEW route
router.get('/new', (request, response) => {
  response.render('sadRecipes/new')
})
// CREATE route
router.post('/', (request, response) => {
  const createSad = request.body
  SadModel.create(createSad)
      .then(() => {
          response.redirect('/sad')
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
router.get('/:sadId', (request, response) => {
  const sadId = request.params.sadId
  SadModel.findById(sadId)
      .then((sadder) => {
          response.render('sadRecipes/show', {
              sadder: sadder
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