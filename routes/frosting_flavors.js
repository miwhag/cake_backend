const express = require("express");
const router = express.Router();
const FrostingFlavor = require("../models/FrostingFlavor")



router.get('/', async (request, response) => {
    const frosting_flavors = await FrostingFlavor.query().withGraphFetched("frosting_type") 
    response.json({ frosting_flavors })
})

module.exports = router 