const FinishStyle = require('./FinishStyle')
const { Model } = require('objection')


class FinishAccent extends Model {
    static tableName = 'finish_accents';
  
    // static relationMappings = {
    //   finish_accent: {
    //     relation: Model.HasManyRelation,
    //     modelClass: FinishStyle,
    //     join: {
    //       from: 'finish_accents.id',
    //       to: 'finish_styles.finish_accent_id'
    //     }
    //   }
    // };
  }

  module.exports = FinishAccent;
