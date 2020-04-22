require('dotenv').config();
 const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

const cake_flavors = require('./routes/cake_flavors');
const frosting_flavors = require('./routes/frosting_flavors');
const frosting_type = require('./routes/frosting_type');
const finish_type = require('./routes/finish_type');
const frosting_flavor_type = require('./routes/frosting_flavor_type')
const finish_colors = require('./routes/finish_colors')
// const finish_styles = require('./routes/finish_styles')
const finish_accents = require('./routes/finish_accents')
const users = require('./routes/users')

const { authenticate, verifyUser, hashPassword} = require('./authenticate')
const { Model } = require('objection')
Model.knex(database)

app.use('/cake_flavors', cake_flavors, authenticate)
app.use('/frosting_flavors', frosting_flavors, authenticate)
app.use('/frosting_type', frosting_type, authenticate)
app.use('/finish_type', finish_type, authenticate)
app.use('/frosting_flavor_type', frosting_flavor_type, authenticate)
app.use('/finish_colors', finish_colors, authenticate)
// app.use('/finish_styles', finish_styles, authenticate)
app.use('/finish_accents', finish_accents, authenticate)

app.use('/users', users)

app.get('/', (request, response) => {
    response.sendStatus(200)
})

app.post("/users", hashPassword, async (request, response) => {
})

app.get("/users", (request, response, next) => {
    database("users")
    .then(users => {
       response.json(users)
    })
 })

app.post("/login", verifyUser, async (request, response) => { 
})     

const port = process.env.PORT || 3030
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

