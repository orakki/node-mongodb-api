var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());//middle where

app.post('/todos',(req,res) => {
  var newTodo = new Todo({
    text: req.body.text
  });

  newTodo.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });

});

//save

app.listen(3000,() => {
  console.log("server is on port 3000");
});
