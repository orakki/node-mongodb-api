// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{

if(err){
  return console.log('Unable to connect to MongoDB server');
}
  console.log('Connectedd to MongoDB server');

// const myDB = db.db('TodoApp');
//    myDB.collection('Todos').find().toArray().then((docs) => {
//      console.log('Todos');
//      console.log(JSON.stringify(docs,undefined, 2));
//    }, (err) => {
//      console.log('Unable to fetch todos', err);
//    });

const myDB = db.db('TodoApp');
   myDB.collection('Todos').count().then((count) => {
     console.log(`Todos count : ${count}`);

   }, (err) => {
     console.log('Unable to fetch todos', err);
   });


  // db.close();
});
