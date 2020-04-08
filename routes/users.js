const express = require("express");
const router = express.Router();
const Users = require("../models/Users")



router.get('/', async (request, response) => {
    const users = await Users.query()
    response.json({ users })
})


// router.delete('/', async (request, response) => {
//     const deleteUser = await User.query().deleteById(6)
// })


module.exports = router 