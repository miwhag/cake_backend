const express = require("express");
const router = express.Router();
const Users = require("../models/Users")

const connection = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)



router.get('/', async (request, response) => {
    const users = await Users.query()
    response.json({ users })
})


// app.delete("/users/:id", (request, response) => {
//     database("users")
//     .where("id", request.params.id)
//     .del()
//     .then(() => response.status(401))
//  })


// router.delete('/', async (request, response) => {
//     const deleteUser = await User.query().deleteById(8)
// })


module.exports = router 