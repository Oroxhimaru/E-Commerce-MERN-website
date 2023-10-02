/* const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model('users', userSchema)

*/
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user._id;
  delete user.__v;
  return user;
};

module.exports = mongoose.model('users', userSchema);
