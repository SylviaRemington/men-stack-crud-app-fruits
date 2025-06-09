// models/fruit.js

const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
  name: String, //this defines what key values it should have
  isReadyToEat: Boolean,
});

const Fruit = mongoose.model("Fruit", fruitSchema); // This is what creates the model.