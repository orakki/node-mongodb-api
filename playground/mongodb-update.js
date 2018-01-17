// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{

if(err){
  return console.log('Unable to connect to MongoDB server');
}
  console.log('Connectedd to MongoDB server');


const myDB = db.db('TodoApp');
   // myDB.collection('Todos').findOneAndUpdate({
   //   _id: new ObjectID("5a547b31a4d45723a8d98256")
   // },{
   //   $set:{
   //        completed:true
   //   }//set
   // },{
   //   returnOrignal:false
   // }).then((result) =>{
   //   console.log(result);
   // });

myDB.collection('profile').findOneAndUpdate({
  _id: new ObjectID("5a5480d3936eef1fc843bb4c")
},{
  $set:{
    name: 'Aman kumar ishwar'
  },$inc:{
    age: 1
  }
},{
  returnOrignal: false
}).then((result) =>{
  console.log(result);
});
  // db.close();
});
