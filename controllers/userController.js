const {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllUsers,
  authenticateUser,
} = require('../models/userModel');

// Controller methods

async function createUserController(req, res) {
  const { loginId, password } = req.body;
  try {
    const newUser = await createUser({ loginId, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUserController(req, res) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateUserController(req, res) {
  const { id } = req.params;
  const userData = req.body;
  try {
    const updatedUser = await updateUserById(id, userData);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteUserController(req, res) {
  const { id } = req.params;
  try {
    const isDeleted = await deleteUserById(id);
    if (isDeleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getAllUsersController(req, res) {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function authenticateUserController(req, res) {
  const { loginId, password } = req.body;
  try {
    const user = await authenticateUser(loginId, password);
    if (user) {
      res.json({ message: 'Authentication successful', user });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
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
