const express = require("express");
const router = express.Router();
const Users = require("../models/Users")

const connection = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)



router.get('/', async (request, response) => {
    const users = await Users.query()
    response.json({ users })
})



router.delete('/', async (request, response) => {
    const deleteUser = await Users.query()
    .delete()
    .where({first_name: "Black"})
    response.send(`${deleteUser} has been deleted`)
})


module.exports = router 