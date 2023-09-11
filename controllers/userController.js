const User = require('../models/userModel');
const { UserFactory } = require('../src/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = "PRANSHU";

const {
  createCartController
} = require('./cartController')

// Controller methods

async function createUserController(req, res) {
  const {userId, emailId, password} = req.body;
  try {

    let retrievedUser = await User.findOne({emailId: emailId});
    if(retrievedUser){
      return res.status(406).json("User already exists");
    }

    const salt = await bcrypt.genSalt(10);

    let hashedPassword = await bcrypt.hash(password, salt);

    const userFactory = new UserFactory();
    let user = userFactory.create({
      userId: userId,
      emailId: emailId,
      password: hashedPassword
    });

    const newUser = new User(user);

    await newUser.save()
    .then((newUser) => {
      console.log('User saved to the database:', newUser);
    })
    .catch((error) => {
      console.error('Error saving user:', error);
    });

    createCartController(req, res);

    const payload = {
      user: {
        emailId: newUser.emailId,
      }
    };

    jwt.sign(
      payload,
      jwtSecret,
      {expiresIn : 4000},
      (error, token) => {
        if(error) throw error;
        res.status(201).json({token});
      }
    );

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function loginUserController(req, res) {
  const {emailId, password} = req.body;

  try{
    let user = await User.findOne({emailId: emailId});

    if(!user){
      return res.status(400).json("Invalid Credentials");
    }

    const passwordMatched = await bcrypt.compare(password, user.password);

    if(!passwordMatched){
      return res.status(400).json("Invalid Credentials");
    }

    const payload = {
      user: {
        emailId: user.emailId
      }
    };

    jwt.sign(
      payload,
      jwtSecret,
      {expiresIn: 4000},
      (error, token) => {
        if(error) throw error;
        res.status(200).json({token});
      }
    );
  }
  catch(error){
    console.log(error.message);
    res.status(200).json({token});
  }
}

async function getUserController(req, res) {
  const { userId } = req.body;
  try {
    const user = await User.findById(userId);
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
  getUserController,
  loginUserController
};
