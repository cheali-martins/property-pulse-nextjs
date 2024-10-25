import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  // strictQuery ensures that only fields that are specified in the schema will be saved in the database

  // if the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is connected!");
    return;
  }

  // if not connected, connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
