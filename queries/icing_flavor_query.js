const connection = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)


module.exports = {
    listIcingFlavors(){
        return database('icing_flavors')
    }

}
