const express = require("express");
const router = express.Router();
const FrostingFlavorType = require("../models/FrostingFlavorType")



router.get('/', async (request, response) => {
    const frosting_flavor_type = await FrostingFlavorType.query()
    response.json({ frosting_flavor_type })
})


module.exports = router 