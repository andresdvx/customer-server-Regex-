import { connect } from "mongoose";

const url =
  "mongodb+srv://minecraft:minecraft@cluster0.seabq0a.mongodb.net/?retryWrites=true&w=majority&appName=customer-crud";

const connectDB = async () => {
  try {
    await connect(url, {
    });
    console.log("conexion exitosa");
  } catch (error) {
    console.log(error, "error db");
  }
};

export default connectDB;