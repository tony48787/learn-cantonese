const express = require("express");

const app = express();

app.get("/learn-cantonese", function(req, res){
  res.send("Let's get started");
}); 

app.listen(8080);
console.log("app is listening on port 8080");
