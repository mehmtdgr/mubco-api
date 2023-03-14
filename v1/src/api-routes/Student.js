const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/Student");
const validate = require("../middlewares/validate");
const validationSchema = require("../validations/Student");

router.route("/").get(StudentController.index);
router.route("/").post(validate(validationSchema.createValidation), StudentController.create);

module.exports = router;
