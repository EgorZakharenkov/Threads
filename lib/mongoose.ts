import mongoose from "mongoose";

let isConnected = false;
export const connectToDb = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("mongo_url not found");
  if (isConnected) return console.log("Already connected to MongoDb");
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("connected to MONGO_DB");
  } catch (error) {
    console.log("DB no.....");
  }
};
