const connection = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)


module.exports = {
    listCakeFlavors(){
        return database('cake_flavors')
    },

    listNothing(){
        return 'Hello'
    }
}