const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema(
  {
    teacher_id: {
      type: mongoose.Types.ObjectId,
      ref: "teacher",
    },
    students: [
      {
        student_id: {
          type: mongoose.Types.ObjectId,
          ref: "student",
        },
      },
    ],
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Lesson = mongoose.model("lesson", LessonSchema);

module.exports = Lesson;
