const express = require("express");
const router = express.Router();
const FinishType = require("../models/FinishType")



router.get('/', async (request, response) => {
    const finish_type = await FinishType.query()
    // .withGraphFetched('finish_colors') 
    response.json({ finish_type })
})


module.exports = router 
