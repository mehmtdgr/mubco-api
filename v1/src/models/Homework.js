const mongoose = require("mongoose");

const HomeworkSchema = new mongoose.Schema(
  {
    lesson_id: {
      type: mongoose.Types.ObjectId,
      ref: "lesson",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Homework = mongoose.model("homework", HomeworkSchema);

module.exports = Homework;
