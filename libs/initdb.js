var mongoose = require('mongoose');

require("./db.js");

const Tutorial = require("../models/TutorialSchema.js");
const Grammar = require("../models/GrammarSchema.js");
const Vocab = require("../models/VocabSchema.js");
const Article = require("../models/ArticleSchema.js");


// Remove existing data from Users and Questions collections and
// repopulate them with test data
Tutorial.remove({}, function(err) {
  if (err)
    return console.log(err);

  Grammar.remove({}, function(err) {
    if (err)
      return console.log(err);

    Vocab.remove({}, function(err){

      Article.remove({}, function(err) {
        if (err)
          return console.log(err);

        populateData();
      });
    });
  });
});

function populateData(){

  const tutorial = {
    title: "Chapter 1",
    grammars: [],
    vocabs: []
  };

  const grammars = [
    _grammar("1", "meaning 1", "exmaple 1"),
    _grammar("2", "meaning 2", "exmaple 2")
  ];

  const vocabs = [
    _vocab("vocab 1", "en 1", "zh 1"),
    _vocab("vocab 2", "en 2", "zh 2"),
    _vocab("vocab 3", "en 3", "zh 3"),
  ];

  const articles = _article("Chapter 1", "This is some dummy content.");

  Vocab.create(vocabs, function(err, _vocabs){
    if(err) console.log(err);

    Grammar.create(grammars, function(err, _grammars){
      if(err) console.log(err);

      Article.create(articles, function(err, _article){
        if(err) console.log(err);

        for(let i = 0; i < _vocabs.length; i++){
          tutorial.vocabs[i] = _vocabs[i]._id;
        }

        for(let i = 0; i < _grammars.length; i++){
          tutorial.grammars[i] = _grammars[i]._id;
        }

        tutorial.article = _article._id;

        Tutorial.create(tutorial, function(err, result){
          if(err) console.log(err);

          console.log(result);
          mongoose.connection.close();
        });

      });
    });
  })

}

function _grammar(name, en, example){
  return {
    name: name,
    "en-meaning": en,
    example: example
  }
}

function _vocab(name, en, zh){
  return {
    name: name,
    "en-meaning": en,
    "zh-meaning": zh,
  }
}

function _article(title, content){
  return {
    title: title,
    content: content
  }
}