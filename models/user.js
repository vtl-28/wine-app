const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const user_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: "String"
  }
},
{
    timestamps: true
});

user_schema.methods.matchPassword = function(entered_password){
    return bcrypt.compare(entered_password, this.password)
 };
 
 user_schema.pre("save", async function(next){
   if (!this.isModified) {
     next();
   }
 
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
 });
 
module.exports = mongoose.model('User', user_schema);;
