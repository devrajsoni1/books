const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  loginId: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Create a new user
function createUser(userData) {
  return User.create(userData);
}

// Get a user by ID
function getUserById(id) {
  return User.findById(id);
}

// Get all users
function getAllUsers() {
  return User.find();
}

// Update a user by ID
function updateUserById(userId, newData) {
  return User.findByIdAndUpdate(userId, newData, { new: true });
}

// Delete a user by ID
function deleteUserById(userId) {
  return User.findByIdAndRemove(userId);
}

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
};
