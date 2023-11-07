const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 3
  },
  lastName: {
    type: String,
    required: true,
    min: 3
  },
  message: {
    type: String,
    required: true,
    min: 10
  },
  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
