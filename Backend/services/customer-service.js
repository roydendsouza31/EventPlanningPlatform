const BaseService = require("./base-service");
const Customer = require("../models/customer");

class CustomerService extends BaseService {
  async findByEmail(email) {
    return await this.findOne(email);
  }
}

module.exports = new CustomerService(Customer);
