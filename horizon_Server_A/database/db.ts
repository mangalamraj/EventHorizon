import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const Connection = async () => {
  const URL = process.env.MONGODB_URI;
  const options: ConnectOptions = {
    // Define your connection options here
    bufferCommands: false, // Example option, you can add more as needed
  };
  try {
    await mongoose.connect(URL!, options);
    console.log("Database connected sucessfully");
  } catch (error: any) {
    console.log("error while connecting with the database", error.message);
  }
};
