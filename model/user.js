const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Enter your first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Enter your last name'],
  },
  email: {
    type: String,
    required: [true, 'Enter your email address'],
    lowercase: true,
    validate: [validator.isEmail, 'Enter a valid email address'],
  },
  phoneNumber: {
    type: String,
    minlength: 11,
  },
  course: {
    type: String,
    required: [true, 'Enter a course of choice'],
  },
  accountNumber: {
    type: String,
    required: [true, 'Enter your account number'],
    minlength: [10, 'Please enter a valid account number'],
    maxlength: [10, 'Please enter a valid account number']
  },
  bankCode: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
