const express = require("express");
const router = express.Router();
const queries = require('../queries/icing_flavor_query');



router.get('/', (request, response) => {
    queries.listIcingFlavors().then(results => response.json(results))
})



module.exports = router 