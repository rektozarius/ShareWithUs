import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Mongo connected to DB:", mongoose.connection.name);
};

export default connectDB;
