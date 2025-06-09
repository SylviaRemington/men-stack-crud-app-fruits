// models/fruit.js

const mongoose = require('mongoose');

// const fruitSchema = new mongoose.Schema({
//   name: String, //this defines what key values it should have
  //also changing these to be required so not dodgy data
//   isReadyToEat: Boolean,
// });

const fruitSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true}, //so you can only have one banana and one apple
  isReadyToEat: Boolean,
});

const Fruit = mongoose.model("Fruit", fruitSchema); // This is what creates the model.