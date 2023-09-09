const express = require('express');
const {
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
  getAllUsersController,
} = require('./userController');

const router = express.Router();

router.post('/users', createUserController);
router.get('/users/:id', getUserController);
router.put('/users/:id', updateUserController);
router.delete('/users/:id', deleteUserController);
router.get('/users', getAllUsersController);

module.exports = router;
