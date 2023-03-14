const express = require("express");
const router = express.Router();

const HomeworkController = require("../controllers/Homework");
const validate = require("../middlewares/validate");
const validationSchema = require("../validations/Homework");

router.route("/").get(HomeworkController.index);
router.route("/").post(validate(validationSchema.createValidation), HomeworkController.create);

module.exports = router;
