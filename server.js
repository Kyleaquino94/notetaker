//to connect to express and mysql
var express = require('express');
var mysql = require("mysql");
// TODO: Import your route files from `route/`

// Initialize the app and create a port
var app = express();
var PORT = process.env.PORT || 3000;
//MySQL db connection information
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "kazekage94",
  database: "note_db"
});



// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// TODO: Mount your HTML and API routes
// https://expressjs.com/en/api.html#app.use

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server on the port
app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});
