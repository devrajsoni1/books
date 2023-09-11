const jwt = require('jsonwebtoken');
const jwtSecret = "PRANSHU";

module.exports = function(req, res, next) {
  // Get token from the headers
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};