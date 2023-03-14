const BaseService = require("./BaseService");
const BaseModel = require("../models/Homework");

class HomeworkService extends BaseService {
  constructor() {
    super(BaseModel);
  }

  list(page, limit, where) {
    const homeworks = BaseModel.find(where || {})
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate({
        path: "lesson_id",
        select: "name",
      });

    return homeworks;
  }
}

module.exports = new HomeworkService();
