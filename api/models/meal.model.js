import mongoose from "mongoose";
const { Schema } = mongoose;

const mealSchema = new Schema({
  mealId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required,
  },
  starNumber: {
    type: Number,
    required,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
},{
    timestamps: true;
});

export default mongoose.model("Meal", mealSchema);
