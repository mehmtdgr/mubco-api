const httpStatus = require("http-status");
const LessonService = require("../services/LessonService");

class Lesson {
  index(req, res, next) {
    const { page = 1, limit = 10 } = req.query;
    LessonService.list(page, limit)
      .then((response) => {
        if (!response.length) {
          return res.status(httpStatus.NOT_FOUND).send({ message: "No data", success: false });
        }

        return res.status(httpStatus.OK).send({ lessons: response, success: true });
      })
      .catch((err) => {
        next(err);
      });
  }

  create(req, res, next) {
    LessonService.create(req.body)
      .then((response) => {
        const lesson = {
          teacher_id: req.body.teacher_id,
          student_id: req.body.student_id,
          name: response.name,
        };

        return res.status(httpStatus.CREATED).send({ lesson: lesson, success: true });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = new Lesson();
