const { Model } = require('objection')

class FrostingType extends Model {
    static get tableName(){
      return 'frosting_type'
    }
    static get relationMappings(){
      return {
        frosting_flavors: {
          relation: Model.ManyToManyRelation,
          modelClass: FrostingFlavor, 
          join: {
            from: 'frosting_type.id',
            through: {
              from: 'frosting_flavor_type.frosting_type.id',
              to: 'frosting_flavor_type.frosting_flavor.id'
            },
            to: 'frosting_flavor.id'
          }
  
        }
      }
      
    }
  }
  
module.exports = FrostingType;