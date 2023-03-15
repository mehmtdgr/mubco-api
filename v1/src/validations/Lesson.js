const Joi = require("joi");

const createValidation = Joi.object({
  name: Joi.string().required().min(1).messages({
    "string.base": `Ad alanı String bir değer olmalıdır!`,
    "string.empty": `Ad alanı boş bırakılamaz!`,
    "string.min": `Ad en az {#limit} karakter olmalı!`,
    "any.required": `Ad alanı boş bırakılamaz!`,
  }),
  teacher_id: Joi.string().required().min(1),
});

const addStudentValidation = Joi.object({
  student_id: Joi.string().required(),
});

module.exports = {
  createValidation,
  addStudentValidation,
};
