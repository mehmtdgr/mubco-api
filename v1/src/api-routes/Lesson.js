const express = require("express");
const router = express.Router();

const LessonController = require("../controllers/Lesson");
const validate = require("../middlewares/validate");
const validationSchema = require("../validations/Lesson");

router.route("/").get(LessonController.index);
router.route("/").post(validate(validationSchema.createValidation), LessonController.create);
router.route("/:lessonId/add-student").post(validate(validationSchema.addStudentValidation), LessonController.addNewStudentForLesson);

module.exports = router;
