// Here is where we import modules
// We begin by loading Express
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose'); //requiring the package
const Fruit = require('./models/fruit.js'); //importing models to server.js

const app = express();

app.use(express.urlencoded({ extended: false })); //putting middleware above routes


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
  res.render("index.ejs"); //changing res.send to res.render so that index.ejs can show up on the homepage
});

// GET /fruits //DID THIS TO SEE IF WORKING, BUT THEN BELOW CHANGED IT AND DID SOMETHING DIFFERENT
// app.get("/fruits", (req, res) => { 
//   res.send("Welcome to the index page!");
// });

app.get("/fruits", (req, res) => { //go after the database and get me all the create fruits
  res.send("Welcome to the index page!");
});

// GET /fruits/new - first put this below in code to check if route works & then change it to what is below it
// app.get("/fruits/new", (req, res) => {
//   res.send("This route sends the user a form page!");
// });

// GET /fruits/new 
app.get("/fruits/new", (req, res) => {
  res.render("fruits/new.ejs");
});

// POST /fruits //doing post request for new.ejs //handling this part of code now <form action="/fruits" method="POST">
app.post("/fruits", async (req, res) => {
  console.log(req.body);

    if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
    } else {
    req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body);
    res.redirect("/fruits/new");
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









// NOTES REGARDING SOMETHING IN ENV FILE: 
/*
# THE URI ABOVE STANDS FOR A Uniform Resource Identifier - 
# is a short line of text that gives a clear, standard address for something your app needs to find
#  — like your database.
# It’s like writing a full, exact address on a letter so the mail knows exactly where to deliver it.
*/