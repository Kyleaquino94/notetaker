var path = require('path');
var router = require('express').Router();

// https://expressjs.com/en/guide/routing.html

router.get("/notes", function(req, res){
  res.sendFile(path.join(__dirname,"../public/notes.html"));
});

router.get("*", function(req,res){
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// "/notes" responds with the notes.html file
// TODO: Define a route for your `notes.html` file
//    and serve it from `public/`
// https://expressjs.com/en/4x/api.html#app.get.method
// https://expressjs.com/en/api.html#res.sendFile

// All other routes respond with the index.html file

module.exports = router;
