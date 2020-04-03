const { Model } = require('objection')

class FrostingType extends Model {
    static get tableName(){
      return 'frosting_type'
    }
    static get relationMappings(){
      const FrostingFlavor= require('./FrostingFlavor');
      return {
        frosting_flavors: {
          relation: Model.ManyToManyRelation,
          modelClass: FrostingFlavor, 
          join: {
            from: 'frosting_type.id',
            through: {
              from: 'frosting_flavor_type.frosting_type.id',
              to: 'frosting_flavor_type.frosting_flavors.id'
            },
            to: 'frosting_flavors.id'
          }
  
        }
      }
      
    }
  }
  
module.exports = FrostingType;