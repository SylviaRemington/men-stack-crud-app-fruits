// THE FUNCTIONALITY FOR ALL THE PAGES CONNECTED TOGETHER

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

// THE THREE GETS BELOW ARE ALL THE SAME - THIS IS JUST SHOWING THE PROGRESSION OF HOW CREATED THIS GET
// GET /fruits //DID THIS TO SEE IF WORKING, BUT THEN BELOW CHANGED IT AND DID SOMETHING DIFFERENT
// app.get("/fruits", (req, res) => { 
//   res.send("Welcome to the index page!");
// });

// DID THIS SECOND BEFORE CHANGED RES.SEND TO RES.RENDER
// app.get("/fruits", async (req, res) => { //go after the database and get me all the create fruits
  // const allFruits = await Fruit.find();
  // console.log(allFruits);
  // res.send("Welcome to the index page!");
  //have to send something before we can move on and make a template
// });

// DID THIS THIRD AND CHANGED RES.SEND TO RES.RENDER
app.get("/fruits", async (req, res) => { //go after the database and get me all the create fruits
  const allFruits = await Fruit.find();
  console.log(allFruits);
  res.render("fruits/index.ejs", { fruits: allFruits });
  //have to send something before we can move on and make a template
});

// GET /fruits/new - first put this below in code to check if route works & then change it to what is below it
// app.get("/fruits/new", (req, res) => {
//   res.send("This route sends the user a form page!");
// });

// GET /fruits/new 
app.get("/fruits/new", (req, res) => { //THIS DELIVERS THE HTML TO THE FRONT END
  res.render("fruits/new.ejs");
});

// DYNAMIC ROUTES GO AFTER HARDCODED ROUTES //GET /fruits/:fruitID
app.get("/fruits/:fruitId", async (req, res) => {
  // res.send("This is the show page for this item.");
  // res.send(`This route renders the show page for fruit id: ${req.params.fruitId}!`);
  const foundFruit = await Fruit.findById(req.params.fruitId);
  res.send(`This route renders the show page for fruit name: ${foundFruit.name}!`);
// ! This is where I stopped coding along at 1 hour 26min 14 secs in & just going to follow along for rest of lesson.
});

// POST /fruits //doing post request for new.ejs //handling this part of code now <form action="/fruits" method="POST">
// This the first code wrote for this... but did second version below that shows how it redirected to a new page afterwards
// app.post("/fruits", async (req, res) => {
//   console.log(req.body);

//     if (req.body.isReadyToEat === "on") {
//     req.body.isReadyToEat = true;
//     } else {
//     req.body.isReadyToEat = false;
//     }
//     await Fruit.create(req.body);
//     res.redirect("/fruits/new");
// });

// POST /fruits //second version so that it redirects to a new page after creating a fruit
app.post("/fruits", async (req, res) => { //THAT HTML FROM ABOVE TRIGGERS THE POST TO FRUITS FROM THE FORM
  console.log(req.body);

    if (req.body.isReadyToEat === "on") { //AND THEN THAT TALKS TO THE DATABASE AND DOES DATA MANIPULATION
    req.body.isReadyToEat = true;
    } else {
    req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body); //AND THEN CREATES IN THE DATABASE AND THEN...
    res.redirect("/fruits"); // AND THEN REDIRECTS BACK TO FRUITS
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

// ! Stopping point of doing the coding-along at 1 hour 31min 02 seconds of FRUITS APP LECTURE
// ! Stopped coding at this point because couldn't follow along and complete lecture simultaneously after that.
// ! Stopping point is once we started doing the SHOW PAGE and stopped coding there at view/fruits directory in the show.ejs file.

