const express = require("express");
const router = express.Router();
const { Model } = require('objection')
const FinishAccent = require("../models/FinishAccent")



router.get('/', async (request, response) => {
    const finish_accents = await FinishAccent.query()
    response.json({ finish_accents })
})


module.exports = router 
