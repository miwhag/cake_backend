const { Model } = require('objection')

class CakeFlavor extends Model {
    static get tableName(){
      return 'cake_flavors'
    }
  }
  
module.exports = CakeFlavor;