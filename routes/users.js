const express = require("express");
const router = express.Router();
const User = require("../models/User")



router.get('/', async (request, response) => {
    const users = await User.query()
    response.json({ users })
})


module.exports = router 