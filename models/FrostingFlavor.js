const { Model } = require('objection')

class FrostingFlavor extends Model {
    static get tableName(){
      return 'frosting_flavors'
    }
    static get relationMappings(){
      const FrostingType= require('./FrostingType');
      return {
        frosting_type: {
          relation: Model.ManyToManyRelation,
          modelClass: FrostingType, 
          join: {
            from: 'frosting_flavors.id',
            through: {
              from: 'frosting_flavor_type.frosting_flavors.id',
              to: 'frosting_flavor_type.frosting_type.id'
            },
            to: 'frosting_type.id'
          }
  
        }
      }
      
    }
  }
  
module.exports = FrostingFlavor;



