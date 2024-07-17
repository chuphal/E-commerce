import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  id: String,
  image: String,
  company: String,
  item_name: String,
  item_description: String,
  original_price: Number,
  current_price: Number,
  discount_percentage: Number,
  return_period: Number,
  delivery_data: String,
  rating: {
    stars: Number,
    count: Number,
  },
});

const DATA = mongoose.model("DATA", DataSchema);

export default DATA;
