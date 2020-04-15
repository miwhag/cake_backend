const { Model } = require('objection')
const FinishColor = require('./FinishColor')
const FinishType = require('./FinishType')

class FinishStyle extends Model {
    static get tableName(){
      return 'finish_styles'
    }
    static relationMappings = {
      finish_colors: {
        relation: Model.BelongsToOneRelation,
        modelClass: FinishColor,
        join: {
          from: 'finish_styles.finish_color_id',
          to: 'finish_colors.id'
        }
      },
      finish_type: {
        relation: Model.BelongsToOneRelation,
        modelClass: FinishType,
        join: {
          from: 'finish_styles.finish_type_id',
          to: 'finish_type.id'
        }
      }
      
    }
  }
  
module.exports = FinishStyle;