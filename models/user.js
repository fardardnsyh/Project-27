const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  confirmPassword: {
    type: String,
    required: true,
  },
  desiredPosition: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('User', userSchema);
