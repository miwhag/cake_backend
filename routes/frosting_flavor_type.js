const express = require("express");
const router = express.Router();
const FrostingFlavorType = require("../models/FrostingFlavorType")



router.get('/', async (request, response) => {
    const frosting_flavor_type = await FrostingFlavorType.query().withGraphFetched('frosting_type').withGraphFetched('frosting_flavors') 
    response.json({ frosting_flavor_type })
})


module.exports = router 


