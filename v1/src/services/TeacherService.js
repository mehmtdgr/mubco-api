const BaseService = require("./BaseService");
const BaseModel = require("../models/Teacher");

class TeacherService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new TeacherService();
