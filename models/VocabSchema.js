var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

const VocabSchema = Schema({
  name: { type: String, required: true},
  "en-meaning": {type: String, required: true},
  "zh-meaning": {type: String, required: true}
});

const _document = mongoose.model("Vocab", VocabSchema);

module.exports = _document;