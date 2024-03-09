import mongoose from "mongoose";

const customerModel = new mongoose.Schema({
  idNumber: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  typeId: {
    type: String,
    required: true,
    trim: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  telephone: {
    type: String,
    required: true,
    trim: true,
  },
  picture: {
    type: String,
    trim: true,
  },
});
export default mongoose.model("Customer", customerModel);
