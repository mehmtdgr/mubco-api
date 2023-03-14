const BaseService = require("./BaseService");
const BaseModel = require("../models/Student");

class StudentService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new StudentService();
