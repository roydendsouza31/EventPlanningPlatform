const bcrypt = require("bcryptjs");

const createHashedPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error("Error generating hashed password:", error);
    throw error; // Re-throw the error to handle it outside this function
  }
};

const matchedPassword = async (enteredPassword, registeredPassword) => {
  const matched = await compare(enteredPassword, registeredPassword);

  return matched;
};

module.exports = { createHashedPassword, matchedPassword };
