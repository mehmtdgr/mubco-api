const httpStatus = require("http-status");
const HomeworkService = require("../services/HomeworkService");

class Homework {
  index(req, res, next) {
    const { page = 1, limit = 10 } = req.query;

    HomeworkService.list(page, limit)
      .then((response) => {
        if (!response.length) {
          return res.status(httpStatus.NOT_FOUND).send({ message: "No data", success: false });
        }

        return res.status(httpStatus.OK).send({ homework: response, success: true });
      })
      .catch((err) => {
        next(err);
      });
  }

  create(req, res, next) {
    HomeworkService.create(req.body)
      .then((response) => {
        const homework = {
          lesson_id: req.body.lesson_id,
          name: response.name,
        };

        return res.status(httpStatus.CREATED).send({ homework: homework, success: true });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = new Homework();
