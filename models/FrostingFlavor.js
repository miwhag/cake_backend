const { Model } = require('objection')

class FrostingFlavor extends Model {
    static get tableName(){
      return 'frosting_flavors'
    }
  }
  
module.exports = FrostingFlavor;