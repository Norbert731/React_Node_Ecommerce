import mongoose from "mongoose";
import mealModel from "./meal.model";
const { Schema } = mongoose;

const orderSchema = new Schema({
  mealId: {
    type: String,
    required: true,
  },
  userId: {
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
  ShopId: {
    type: String,
    required: true,
  },
  customerId{
    type: String,
    required: true,
  },
  mealStatus: {
    type: Boolean,
    default: false,
  },
  payment_intent: {
    type: String,
    required: true,
  }
  
},{
    timestamps: true,
});

export default mongoose.model("Order", orderSchema);
