const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
const SECRET = "sdfhjkdfjk";


const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')



const cake_flavors = require('./routes/cake_flavors');
const frosting_flavors = require('./routes/frosting_flavors');
const frosting_type = require('./routes/frosting_type');
const finish_type = require('./routes/finish_type');
const frosting_flavor_type = require('./routes/frosting_flavor_type')
const users = require('./routes/users')


const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

const { Model } = require('objection')
Model.knex(database)

app.use('/cake_flavors', cake_flavors)
app.use('/frosting_flavors', frosting_flavors)
app.use('/frosting_type', frosting_type)
app.use('/finish_type', finish_type)
app.use('/frosting_flavor_type', frosting_flavor_type)
app.use('/users', users)

app.get('/', (request, response) => {
    response.sendStatus(200)
})


app.post("/users", (request, response) => {
    bcrypt.hash(request.body.password, 12)
    .then(hashedPassword => {
        return database("users").insert({
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            username: request.body.username,
            password_digest: hashedPassword,
        })
        .returning(["id", "first_name", "last_name", "username"])
        .then(users => {
          response.json(users[0])
    })
    .catch(error => next(error))
    })
})

app.get("/users", (request, response, next) => {
    database("users")
    .then(users => {
       response.json(users)
    })
 })

 app.delete("/users/:id", (request, response) => {
    database("users")
    .where("id", request.body.id)
    .del()
    .then(() => response.status(401))
 })

app.post("/login", (request, response) => {
    database("users")
    .where({username: request.body.user.username})
    .first()
    .then( user => {
        if (!user){
            response.status(401).json({ error: "No user by that name"})
        } else {
            return bcrypt
            .compare(request.body.user.password, user.password_digest)
            .then(isAuthenticated => {
                if (!isAuthenticated){
                    response.status(401).json({ error: "Not authenticated"}) 
                    } else {
                        return jwt.sign(user, SECRET, (error, token) => {
                            response.status(200).json({user, token})
                        })
                    }
         
                }
            )
        }
    })
})



const port = process.env.PORT || 3030
app.listen(port, () => console.log(`Example app listening on port ${port}!`))