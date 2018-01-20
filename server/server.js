//global repository
const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');//middlewhere

//local repository
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json()); //middle where

app.post('/todos', (req, res) => {
  var newTodo = new Todo({
    text: req.body.text
  });

  newTodo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

});

//GET request
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  }); //then
}); //app.get

//getting an individual resourse
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  //VALIDATION
  if (!ObjectID.isValid(id)) {

  return  res.status(404).send();
  }

  Todo.findById(id).then((todo) => {

    //what if id is not exist
    if (!todo) {
    return  res.status(404).send();
    } //if
    res.status(200).send({todo});

  }).catch((e) => {
    res.send('error');
  }); //catch
}); //app.get


app.listen(3000, () => {
  console.log("server is on port 3000");
});
