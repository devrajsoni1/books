const express = require('express');
const {
  createUserController,
  getUserController,
} = require('../controllers/userController');

const router = express.Router();

router.post('/createUser', createUserController);
router.get('/getUser/:id', getUserController);

//Not of use as of now
router.put('/updateUser/:id', createUserController);
router.get('/getAllUsers', getUserController);

module.exports = router;
