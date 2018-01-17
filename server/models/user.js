const mongoose = require('mongoose');
var  User=mongoose.model('User',{
  email:{
    type:String,
    required:true,
    trim:true,
    min:1
  }
});


module.exports = {User};
