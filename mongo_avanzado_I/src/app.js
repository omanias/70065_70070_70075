import express from "express";
import mongoose from "mongoose";
import studentModel from "./models/student.js";
import courseModel from "./models/courses.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const environment = async () => {
  await mongoose.connect("MONGO_URL");
  /*   await studentModel.create({
    first_name: "Fabio",
    last_name: "Bianchi",
    email: "fabio@mail.com",
    gender: "Male",
  }); */

  /*   await courseModel.create({
    title: "Programacion backend",
    description: "curso avanzado de programacion backend",
    difficulty: 3,
    topics: ["fs", "express", "MongoDb", "Passport", "Nestjs"],
    professor: "El panza Manias",
  }); */

  let student = await studentModel
    .findOne({ _id: "66aad6ff6040ed79d77b6a76" })
    .populate("courses.course");
  console.log(JSON.stringify(student, null, "\t"));

  /*   student.courses.push({ course: "66aad95dc009bac7bcdda7e8" });

  let result = await studentModel.updateOne(
    { _id: "66aad6ff6040ed79d77b6a76" },
    student
  );

  console.log(result); */
};

environment();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
