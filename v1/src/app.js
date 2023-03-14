const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const config = require("./config/index");
const loaders = require("./loaders/index");
const errorMiddleware = require("./middlewares/errorMiddleware");
const { StudentRoutes, TeacherRoutes, LessonRoutes, HomeworkRoutes } = require("./api-routes");

config();
loaders();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.listen(process.env.PORT || 5000, () => {
  console.log(`SERVER ${process.env.PORT} PORTUNDA ÇALIŞIYOR.`);
  app.use("/students", StudentRoutes);
  app.use("/teachers", TeacherRoutes);
  app.use("/lessons", LessonRoutes);
  app.use("/homeworks", HomeworkRoutes);

  app.use((req, res, next) => {
    const error = new Error("Aradığınız sayfa bulunmamaktadır!");
    error.status = 404;
    next(error);
  });

  app.use(errorMiddleware);
});
