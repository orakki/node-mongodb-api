// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{

if(err){
  return console.log('Unable to connect to MongoDB server');
}
  console.log('Connectedd to MongoDB server');

const myDB = db.db('TodoApp');
  // myDB.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // },(err,result) => {
  //   if (err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined, 2));
  // });


// myDB.collection('profile').insertOne({
//   name: 'Aman',
//   age: 21,
//   location:'bhopal'
// },(err,result) =>{
//   if(err){
//     return console.log('Unable to insert into profile',err);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

  db.close();
});