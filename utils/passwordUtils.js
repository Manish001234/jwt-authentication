const bcrypt = require('bcrypt');

// Hash a password and return the hashed password
const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

// Verify a password against a hashed password
const verifyPassword = async (password, hashedPassword) => {
  try {
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    return passwordMatch;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
};
