const httpStatus = require("http-status");
const StudentService = require("../services/StudentService");

class Student {
  index(req, res, next) {
    StudentService.list()
      .then((response) => {
        if (!response.length) {
          return res.status(httpStatus.NOT_FOUND).send({ message: "No Data", success: false });
        }
        return res.status(httpStatus.OK).send({ students: response, success: true });
      })
      .catch((err) => {
        next(err);
      });
  }

  create(req, res, next) {
    StudentService.create(req.body)
      .then((response) => {
        return res.status(httpStatus.CREATED).send({ student: response });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = new Student();
