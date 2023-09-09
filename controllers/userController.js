const { createUser, getUser, updateUser, deleteUser, getAllUsers, authenticateUser } = require('./userModel');

// Controller methods

function createUserController(req, res) {
  const { loginId, password } = req.body;
  const newUser = createUser({ loginId, password });
  res.status(201).json(newUser);
}

function getUserController(req, res) {
  const { id } = req.params;
  const user = getUser(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
}

function updateUserController(req, res) {
  const { id } = req.params;
  const userData = req.body;
  const updatedUser = updateUser(id, userData);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
}

function deleteUserController(req, res) {
  const { id } = req.params;
  const isDeleted = deleteUser(id);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'User not found' });
  }
}

function getAllUsersController(req, res) {
  const users = getAllUsers();
  res.json(users);
}

function authenticateUserController(req, res) {
  const { loginId, password } = req.body;
  const user = authenticateUser(loginId, password);
  if (user) {
    res.json({ message: 'Authentication successful', user });
  } else {
    res.status(401).json({ error: 'Authentication failed' });
  }
}

module.exports = {
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
  getAllUsersController,
  authenticateUserController,
};
