import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect("");
    console.log("Connected to Mongo Database");
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
