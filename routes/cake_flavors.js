const express = require("express");
const router = express.Router();
const { Model } = require('objection')
const CakeFlavor = require("../models/CakeFlavor")



router.get('/', async (request, response) => {
    const cake_flavors = await CakeFlavor.query()
    response.json({ cake_flavors })
    console.log("hello")
})


module.exports = router 
