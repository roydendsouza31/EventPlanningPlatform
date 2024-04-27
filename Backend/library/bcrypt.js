const bcrypt = require("bcryptjs");

const createHashedPassword = async (password) => {
  const salt = await genSalt(10);

  const hashedPassword = await hash(password, salt);

  return hashedPassword;
};

const matchedPassword = async (enteredPassword, registeredPassword) => {
  const matched = await compare(enteredPassword, registeredPassword);

  return matched;
};

module.exports = { createHashedPassword, matchedPassword };
