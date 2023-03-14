const express = require("express");
const router = express.Router();

const TeacherController = require("../controllers/Teacher");
const validate = require("../middlewares/validate");
const validationSchema = require("../validations/Teacher");

router.route("/").get(TeacherController.index);
router.route("/").post(validate(validationSchema.createValidation), TeacherController.create);

module.exports = router;
