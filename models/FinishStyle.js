const { Model } = require('objection')
const FinishColor = require('./FinishColor')
const FinishType = require('./FinishType')
const FinishAccent = require('./FinishAccent')

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
      },
      finish_accent: {
        relation: Model.BelongsToOneRelation,
        modelClass: FinishAccent,
        join: {
          from: 'finish_styles.finish_accent_id',
          to: 'finish_accents.id'
        }
      }
      
    }
  }
  
module.exports = FinishStyle;