const mongoose = require('mongoose');
//discribe the collection
    var  Todo=mongoose.model('Todo',{
      text:{
        type: String,
        required:true,
        trim:true
      },
      completed:{
        type: Boolean
      },
      compleatedAt:{
        type: Number
      }
    });
module.exports = {Todo};
