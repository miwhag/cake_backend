const express = require("express");
const router = express.Router();
const FrostingType = require("../models/FrostingType")



router.get('/', async (request, response) => {
    const frosting_type = await FrostingType.query()
    response.json({ frosting_type })
})


module.exports = router 