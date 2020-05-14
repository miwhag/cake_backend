const { Model } = require('objection')

class FinishType extends Model {
    static get tableName(){
      return 'finish_type'
    }
    // static get relationMappings(){
    //   const FinishColor= require('./FinishColor');
    //   return {
    //     finish_colors: {
    //       relation: Model.ManyToManyRelation,
    //       modelClass: FinishColor, 
    //       join: {
    //         from: 'finish_type.id',
    //         through: {
    //           from: 'finish_styles.finish_type_id',
    //           to: 'finish_styles.finish_color_id'
    //         },
    //         to: 'finish_colors.id'
    //       }
  
    //     }
    //   }
      
    // }
  }
  
module.exports = FinishType;

