const express = require("express");
const router = express.Router();
const cake_flavors = []

router.get('/', (request, response) =>  {
response.json({ cake_flavors })
});

module.exports = router 