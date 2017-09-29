var express = require('express');
var router = express.Router();
const Schema = require('../db/schema.js');
const UserModel = Schema.UserModel;

/* INDEX */
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
  response.render('users/new')
})



//CREATE

router.post('/', (request, response) =>{
  const newUser = request.body

  UserModel.create(newUser)
    .then(() => {
        response.redirect('/users')
    })
    .catch((error) => {
      console.log(error)
    })
})

//EDIT
router.get('/userId/edit', (request, response) => {

  const userId = request.params.userId

  UserModel.findById(userId)
    .then((user) => {
      response.render('users.edit', {
        user: user
      })

    })
})

//DELETE


module.exports = router;
