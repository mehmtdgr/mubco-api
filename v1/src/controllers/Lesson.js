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
          name: response.name,
        };

        return res.status(httpStatus.CREATED).send({ lesson: lesson, success: true });
      })
      .catch((err) => {
        next(err);
      });
  }

  addNewStudentForLesson(req, res, next) {
    LessonService.findOne({ _id: req.params.lessonId })
      .then((response) => {
        if (!response) {
          return res.status(httpStatus.NOT_FOUND).send({ message: "Kayıtlı ders bulunamadı", success: false });
        }

        const student = {
          student_id: req.body.student_id,
        };

        const studentsIdList = response.students.map((x) => x.student_id.toString());

        if (!studentsIdList.includes(req.body.student_id.toString())) {
          response.students.push(student);
          res.status(httpStatus.OK).send({ message: "Added student", success: true });
        } else {
          res.status(httpStatus.FORBIDDEN).send({ message: "Student already exist", success: false });
        }

        response.save();
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = new Lesson();
