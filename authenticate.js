
const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");


async function hashPassword (request, response){
    bcrypt.hash(request.body.password, 12)
    .then(hashedPassword => {
        return database("users").insert({
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            username: request.body.username,
            password_digest: hashedPassword,
        })
        .returning('*')
        .then(users => {
          response.json(users[0])
    })
    .catch(error => next(error))
    })
}

async function verifyUser(request, response){
    const {username, password} = request.body.user
    console.log(request.body.user)
    const user = await database("users")
    .select()
    .where({username: username})
    .first()
    if (!user){
        response.status(401).json({ error: "Username is incorrect or does not exist"})
    } 
    const isPasswordMatch = await bcrypt.compare(password, user.password_digest)

    if (!isPasswordMatch){
        response.status(401).json({ error: "Not authenticated"}) 
    } 
    const token = jwt.sign( user, process.env.SECRET) 
    
    response.status(200).json({user, token})
}



async function authenticate(request, response, next){
    const token = request.headers.authorization.split(" ")[1]
    if(!token){
        response.sendStatus(401)
    }
    let tokenUser
    try {  
        tokenUser = jwt.verify(token, process.env.SECRET)
    } catch(error) {
        console.log(error)
        response.sendStatus(403)
    } 
    const user = await database("users")
    .select()
    .where("id", tokenUser.id)
    .first()

    request.user = user 
    next()
}


module.exports = {
    authenticate: authenticate, 
    verifyUser: verifyUser,
    hashPassword: hashPassword
}