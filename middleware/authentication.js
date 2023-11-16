const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config'); // Adjust the import path as needed

// Middleware for user authentication
const authenticateUser = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // Check if a token is provided
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed. No token provided.' });
  }

  // Verify the token
  jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: 'Authentication failed. Invalid token.' });
    }

    // If the token is valid, store the decoded user data in the request for future use
    req.userData = decoded;

    // Continue to the next middleware or route handler
    next();
  });
};

module.exports = authenticateUser;
