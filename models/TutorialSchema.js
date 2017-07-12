var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

const TutorialSchema = Schema({
  title: { type: String, required: true},
  article: {type: ObjectId, ref: 'Article'},
  vocabs: [{type: ObjectId, ref: 'Vocab'}],
  grammars: [{type: ObjectId, ref: 'Grammar'}]
});

const _document = mongoose.model("Tutorial", TutorialSchema);

module.exports = _document;