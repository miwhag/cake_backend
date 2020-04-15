const { Model } = require('objection')

class FinishColor extends Model {
    static get tableName(){
      return 'finish_colors'
    }
    static get relationMappings(){
      const FinishType= require('./FinishType');
      return {
        finish_type: {
          relation: Model.ManyToManyRelation,
          modelClass: FinishType, 
          join: {
            from: 'finish_colors.id',
            through: {
              from: 'finish_styles.finish_color_id',
              to: 'finish_styles.finish_type_id'
            },
            to: 'finish_type.id'
          }
  
        }
      }
      
    }
  }
  
module.exports = FinishColor;

