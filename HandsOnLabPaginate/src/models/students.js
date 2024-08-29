import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const studentCollection = "users";
const studentSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
});

studentSchema.plugin(mongoosePaginate);
const studentsModel = mongoose.model(studentCollection, studentSchema);
export default studentsModel;
