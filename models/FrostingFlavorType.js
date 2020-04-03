const { Model } = require('objection')

class FrostingFlavorType extends Model {
    static get tableName(){
      return 'frosting_flavor_type'
    }
  }
  
module.exports = FrostingFlavorType;