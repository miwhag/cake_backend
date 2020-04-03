const { Model } = require('objection')
const FrostingFlavor = require('./FrostingFlavor')
const FrostingType = require('./FrostingType')

class FrostingFlavorType extends Model {
    static get tableName(){
      return 'frosting_flavor_type'
    }
    static relationMappings = {
      frosting_flavors: {
        relation: Model.BelongsToOneRelation,
        modelClass: FrostingFlavor,
        join: {
          from: 'frosting_flavor_type.frosting_flavor_id',
          to: 'frosting_flavors.id'
        }
      },
      frosting_type: {
        relation: Model.BelongsToOneRelation,
        modelClass: FrostingType,
        join: {
          from: 'frosting_flavor_type.frosting_type_id',
          to: 'frosting_type.id'
        }
      }
      
    }
  }
  
module.exports = FrostingFlavorType;