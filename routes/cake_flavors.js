const express = require("express");
const router = express.Router();
const queries = require('../queries/cake_flavor_query');



router.get('/', (request, response) => {
    queries.listCakeFlavors().then(results => response.json(results))
})



module.exports = router 