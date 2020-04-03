const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');

const cake_flavors = require('./routes/cake_flavors');
const frosting_flavors = require('./routes/frosting_flavors');
const frosting_type = require('./routes/frosting_type');
const finish_type = require('./routes/finish_type');
const frosting_flavor_type = require('./routes/frosting_flavor_type')

const { Model } = require('objection')
const app = express();
const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)
Model.knex(database)

app.use(cors())
app.use('/cake_flavors', cake_flavors)
app.use('/frosting_flavors', frosting_flavors)
app.use('/frosting_type', frosting_type)
app.use('/finish_type', finish_type)
app.use('/frosting_flavor_type', frosting_flavor_type)


const port = process.env.PORT || 3002
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.get('/', (request, response) => {
//     queries.listNothing().then(results => response.json(results))
// })