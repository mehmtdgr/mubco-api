const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    homework_id: {
      type: mongoose.Types.ObjectId,
      ref: "homework",
    },
  },
  { timestamps: true, versionKey: false }
);

const Student = mongoose.model("student", StudentSchema);

module.exports = Student;
