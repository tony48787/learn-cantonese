var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

const GrammarSchema = Schema({
  name: { type: String, required: true},
  "en-meaning": {type: String, required: true},
  "example": {type: String, required: true}
});

const _document = mongoose.model("Grammar", GrammarSchema);

module.exports = _document;