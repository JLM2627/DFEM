var express = require('express');
var router = express.Router();
const Schema = require('../db/schema.js');
const UserModel = Schema.UserModel;

/* INDEX ROUTE */
router.get('/', (request, response) =>{
  //find all users
  UserModel.find({})
    .then((users) => {
      response.render('users/index', {
       users: users

      })
  })
  .catch((error) => {
    console.log(error)
  })



})


//NEW//
router.get('/new', (request, response) =>{
  //This will show an empty form for the new user
  response.render('users/new')
})


//CREATE ROUTE

router.post('/', (request, response) => {
  const newUser = request.body
    //console.log('kdjfnbefjkgnejkrbg');
  UserModel.create(newUser)
    .then((user) => {
       // response.redirect('/users')
        response.redirect(`/users/${user._id}` )
    })
    .catch((error) => {
      console.log(error)
    })

})


//EDIT
router.get('/:userId/edit', (request, response) => {
  
    const userId = request.params.userId
  
    UserModel.findById(userId)
      .then((user) => {
        response.render('users/edit', {
          user: user
        })
  
      })
      .catch((error) => {
        console.log(error)
    })
})


// UPDATE route
router.put('/:userId', (request, response) => {
  
      // GRAB the user ID from the parameters
      const userId = request.params.userId
  
      // GRAB the updated user info from the request body
      const updatedUser = request.body
  
      // Use Mongoose to find the user by ID and update it with the 
      // new user info. Be sure to include the {new: true} option as your
      // third parameter
      UserModel.findByIdAndUpdate(userId, updatedUser, { new: true })
          .then(() => {
              // THEN once the new user info has been saved,
              // redirect to that user's SHOW page
              response.redirect(`/users/${userId}`)
              console.log('update')
          })
          .catch((error) => {
              console.log(error)
          })
  })

  // SHOW route
router.get('/:userId', (request, response) => {
  
      // GRAB the user ID from the parameters
      const userId = request.params.userId
  
      // Use the UserModel to find the user by ID in the database
      UserModel.findById(userId)
          .then((user) => {
              // THEN once the user comes back from the database,
              // render the single user's info using Handlebars
              response.render('users/show', {
                  user: user
              })
          })
          .catch((error) => {
              console.log(error)
          })
  })

//DELETE
router.get('/:userId/delete', (request, response) => {
  
      // GRAB the user ID from the parameters
      const userId = request.params.userId
  
      // GRAB the updated user info from the request body
      const updatedUser = request.body
  
      // Use Mongoose to find the user by ID and update it with the 
      // new user info. Be sure to include the {new: true} option as your
      // third parameter
      UserModel.findByIdAndUpdate(userId, updatedUser, { new: true })
          .then(() => {
              // THEN once the new user info has been saved,
              // redirect to that user's SHOW page
              response.redirect('/users')
          })
          .catch((error) => {
              console.log(error)
          })
  })

module.exports = router;
