const express = require("express");
const router = express.Router();
const queries = require('./queries')

const cakeFlavors = queries.listAll().then(cake_flavors => response.send(cake_flavors))


router.get('/', (request, response) =>  {
response.json({ cakeFlavors })
});

module.exports = router 