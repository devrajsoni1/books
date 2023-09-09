const { User, UserFactory } = require('./user');

const usersDB = {}; // Simulated database to store users

const userFactory = new UserFactory();

function createUser({ loginId, password }) {
  const newUser = userFactory.create({ loginId, password });
  usersDB[newUser.id] = newUser;
  return newUser;
}

function getUser(id) {
  return usersDB[id];
}

function updateUser(id, userData) {
  const user = usersDB[id];
  if (!user) return null;
  // You can add logic to update user properties here if needed
  return user;
}

function deleteUser(id) {
  const user = usersDB[id];
  if (!user) return false;
  delete usersDB[id];
  return true;
}

function getAllUsers() {
  return Object.values(usersDB);
}

function authenticateUser(loginId, password) {
  for (const userId in usersDB) {
    const user = usersDB[userId];
    if (user.loginId === loginId && user.password === password) {
      return user;
    }
  }
  return null;
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
  authenticateUser,
};
