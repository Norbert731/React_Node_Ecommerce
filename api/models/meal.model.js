import mongoose from "mongoose";
const { Schema } = mongoose;

const mealSchema = new Schema(
  {
    userId: {
      type: String,
      required,
    },
    mealId: {
      type: String,
      required,
    },
    name: {
      type: String,
      required,
    },
    img: {
      type: String,
      required,
    },
    desc: {
      type: String,
      required,
    },
    rating: {
      type: Number,
      default: 0,
    },
    starNumber: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required,
    },
    price: {
      type: Number,
      required,
    },
  },
  {
    timestamps,
  }
);

export default mongoose.model("Meal", mealSchema);
