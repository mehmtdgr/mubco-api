const BaseService = require("./BaseService");
const BaseModel = require("../models/Lesson");

class LessonService extends BaseService {
  constructor() {
    super(BaseModel);
  }

  list(page, limit, where) {
    const lessons = BaseModel.find(where || {})
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate({
        path: "teacher_id",
        select: "name",
      })
      .populate({
        path: "students.student_id",
        select: "name",
      });

    return lessons;
  }
}

module.exports = new LessonService();
