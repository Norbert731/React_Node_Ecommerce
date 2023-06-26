import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
}

app.listen(8800, () => {
  connectDB();
  console.log("first");
});
