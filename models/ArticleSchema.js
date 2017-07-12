var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

const ArticleSchema = Schema({
  title: { type: String, required: true},
  content: {type: String, required: true}
});

const _document = mongoose.model("Article", ArticleSchema);

module.exports = _document;