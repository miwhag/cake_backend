const express = require("express");
const router = express.Router();
const FrostingType = require("../models/FrostingType")
require('../models/FrostingFlavor')



router.get('/', async (request, response) => {
    const frosting_type = await FrostingType.query().withGraphFetched('frosting_flavors') 
    response.json({ frosting_type })
})


module.exports = router 
