import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import mealRouter from "./routes/meal.route.js";
import orderRouter from "./routes/order.route.js";
import reviewsRouter from "./routes/reviews.route.js";
import authenticationRouter from "./routes/authentication.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config();

// connecting function
async function connectDB() {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
}

app.use(cors({ origin: "http://127.0.0.1:5173", credential: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/authentication", authenticationRouter);
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);
app.use("/api/meal", mealRouter);
app.use("/api/reviews", reviewsRouter);

// app start
app.listen(8800, () => {
  connectDB();
  console.log("backend server is running");
});
