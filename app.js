const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true });

const fruitSchema = new mongoose.fruitSchema ({
  name: String,
  rating: Number,
  review: String
})
