const { Model } = require('objection')

class FinishType extends Model {
    static get tableName(){
      return 'finish_type'
    }
  }
  
module.exports = FinishType;