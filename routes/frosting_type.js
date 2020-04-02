const express = require("express");
const router = express.Router();
const queries = require('../queries/frosting_type_query');



router.get('/', (request, response) => {
    queries.listFrostingType().then(results => response.json(results))
})



module.exports = router 