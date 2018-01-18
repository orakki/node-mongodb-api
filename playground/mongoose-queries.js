const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose.js');
var {Todo} = require('./../server/models/todo.js');

var id = '5a5f236285aec43160376cf1';

if(!ObjectID.isValid(id)){
  console.log('Invalid Id....\n\n');
}

//examples
// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos' , todos);
// });
//
// Todo.findOne({
// _id:id
// }).then((todo) => {
//   console.log('Todo' , todo);
// });

Todo.findById(id).then((todo) =>{
  if(!todo){
    console.log('Id is incorrect');
  }
  console.log('todo by id',todo);
}).catch((e) => {
  console.log(e);
});
