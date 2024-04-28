const BaseService = require("./base-service");
const Seller = require("../models/seller");

class SellerService extends BaseService {
  async findByEmail(email) {
    return await this.findOne(email);
  }
}

module.exports = new SellerService(Seller);
