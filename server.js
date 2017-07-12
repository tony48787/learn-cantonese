const express = require("express");

const app = express();

require("./libs/db.js");

const Tutorial = require("./models/TutorialSchema.js");
const Grammar = require("./models/GrammarSchema.js");
const Vocab = require("./models/VocabSchema.js");
const Article = require("./models/ArticleSchema.js");

app.get("/learn-cantonese", function(req, res){

	Tutorial.find({})
	.populate("article")
	.populate("vocabs")
	.populate("grammars")
	.exec(function(err, tutorials){
		res.send({
			status: err,
			result: tutorials
		});
	});
  
}); 

app.get("/", function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.use("/public", express.static("public"));

app.listen(8080);

console.log("app is listening on port 8080");
