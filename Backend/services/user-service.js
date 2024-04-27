const BaseService = require("./base-service");
const User = require("../models/user");

class UserService extends BaseService {
  async findByEmail(email) {
    return await this.findOne(email);
  }
}

module.exports = new UserService(User);
