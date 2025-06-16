// Here is where we import modules
// We begin by loading Express
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose'); //requiring the package
const Fruit = require('./models/fruit.js'); //importing to server.js

const app = express();

//Initially setting up a route like what you see below (before we change it later):
//Build the route - To serve our landing page, we’ll need to start with a route 
// in our server.js file. We’ll set it up to send a simple response for testing, 
// then we’ll come back and have it render an EJS file later. 
// This code, as well as all future routes, should be above the app.listen() method.
// server.js
// GET /
// app.get("/", async (req, res) => {
//   res.send("hello, friend!");
// });





app.get("/", async (req, res) => { // have an end point set up here
  res.render("index.ejs"); //changing res.send to res.render
});

// Connect to MongoDB using the connection string in the .env file
// mongoose.connect(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
//for above, the try catch is pretty much the same thing; but this above uses more mongoose methods
//and can do connect or unconnect
//This method of mongoose connect gives you a little more feedback from the database though, and can do connect or unconnect.


// app.listen(3000, () => {
//   console.log('Listening on port 3000');
// });

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
// So now Listening on port 3000 & Connected to MongoDB fruits.

