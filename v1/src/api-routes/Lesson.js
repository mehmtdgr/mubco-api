const express = require("express");
const router = express.Router();

const LessonController = require("../controllers/Lesson");
const validate = require("../middlewares/validate");
const validationSchema = require("../validations/Lesson");

router.route("/").get(LessonController.index);
router.route("/").post(validate(validationSchema.createValidation), LessonController.create);

module.exports = router;
