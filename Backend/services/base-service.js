class BaseService {
  constructor(model) {
    this.model = model;
  }

  async save(object) {
    return await this.model.create(object);
  }

  async update(id, object) {
    return this.model.findByIdAndUpdate(id, object);
  }

  async findOne(value) {
    return await this.model.findOne({ email: value });
  }

  async find(id) {
    return this.model.findById(id);
  }

  async find() {
    return this.model.find();
  }
}

module.exports = BaseService;
