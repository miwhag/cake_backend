const express = require("express");
const router = express.Router();
const FinishColor = require("../models/FinishColor")




router.get('/', async (request, response) => {
    const finish_colors = await FinishColor.query()
    // .withGraphFetched('finish_type') 
    response.json({ finish_colors })
})

module.exports = router 