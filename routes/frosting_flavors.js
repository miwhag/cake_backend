const express = require("express");
const router = express.Router();
const queries = require('../queries/frosting_flavor_query');



router.get('/', (request, response) => {
    queries.listFrostingFlavors().then(results => response.json(results))
})



module.exports = router 