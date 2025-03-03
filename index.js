const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const createError = require("http-errors");

const app = express();

app.use(express.static(__dirname + '/public'));

/*app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});*/

app.get('/', function(req, res) {
  /*res.sendFile(path.join(__dirname, '/../public/index.html'));*/
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

/*app.set("views", path.join(__dirname, "views"));
app.set("view engine", "index.html");*/

/*app.use(express.static(path.join(__dirname, "public")));
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/views/index.html"); 
});*/
// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));



// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render("error", {message: err.message});
    /*app.get("/", (req, res, next) => {
      // mimic an error by throwing an error to break the app!
    throw new Error("Something went wrong");
    res.send("Welcome to main route!")
    });*/
  });

app.listen(8080, (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    console.log(`Yupp! Server is running on port 8080`);
  });