const BaseService = require("./base-service");
const Testimonial = require("../models/testimonial");

class TestimonialService extends BaseService {
  async findByName(name) {
    return await this.findOne(name);
  }

  async findAll() {
    return await this.find();
  }
}

module.exports = new TestimonialService(Testimonial);
