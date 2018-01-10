// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{

if(err){
  return console.log('Unable to connect to MongoDB server');
}
  console.log('Connectedd to MongoDB server');

//deleteMany
const myDB = db.db('TodoApp');
   myDB.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
     console.log(result);
   });

//deleteOne
const myDB = db.db('TodoApp');
   myDB.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
     console.log(result);
   });
//findOneAndDelete

const myDB = db.db('TodoApp');
   myDB.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
     console.log(result);
   });


  // db.close();
});
