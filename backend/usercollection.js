const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
        type:String,
        required: true,
    },
    dob: {
        type:Date,
        required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    
    password: {
      type: String,
      required: true,
    },

    friends: {
      type: Array,
    }
}
);


const User = mongoose.model("User", userSchema, 'User');
module.exports = { User }