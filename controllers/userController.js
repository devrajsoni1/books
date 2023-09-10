const User = require('../models/userModel');

const {
  createCartController
} = require('./cartController')

// Controller methods

async function createUserController(req, res) {
  const {id, loginId, password} = req.body;
  try {
    newUser = new User({
      id: id,
      loginId: loginId,
      password: password
    });

    await newUser.save()
    .then((newUser) => {
      console.log('User saved to the database:', newUser);
    })
    .catch((error) => {
      console.error('Error saving user:', error);
    });

    createCartController(req, res);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUserController(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createUserController,
  getUserController
};
