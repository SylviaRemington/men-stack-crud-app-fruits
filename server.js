// Here is where we import modules
// We begin by loading Express
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const app = express();

app.get("/", async (req, res) => { // have an end point set up here
  res.render("index.ejs"); //changing res.send to res.render
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
