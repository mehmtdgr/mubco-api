const httpStatus = require("http-status");
const TeacherService = require("../services/TeacherService");

class Teacher {
  index(req, res, next) {
    TeacherService.list()
      .then((response) => {
        if (!response.length) {
          return res.status(httpStatus.NOT_FOUND).send({ message: "No data", success: false });
        }

        return res.status(httpStatus.OK).send({ teachers: response, success: true });
      })
      .catch((err) => {
        next(err);
      });
  }

  create(req, res, next) {
    TeacherService.create(req.body)
      .then((response) => {
        return res.status(httpStatus.CREATED).send({ teacher: response });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = new Teacher();
