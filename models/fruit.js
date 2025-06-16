// models/fruit.js

const mongoose = require('mongoose');

// const fruitSchema = new mongoose.Schema({
//   name: String, //this defines what key values it should have
  //also changing these to be required so not dodgy data
//   isReadyToEat: Boolean,
// });

const fruitSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true}, //so you can only have one banana and one apple
  isReadyToEat: {type: Boolean, default: false}, //it's not required but if you didn't provide it, it would put it in anyway as false
});

const Fruit = mongoose.model("Fruit", fruitSchema); // This is what creates the model.

module.exports = Fruit;

// you can also do a combination of both lines above and do:
// module.exports = mongoose.model("Fruit", fruitSchema); 



/*
INFORMATION FROM LESSON ABOUT SCHEMA AND MODELS:

Create the fruits schema
Before we define our model, we must first import the mongoose library into our fruit.js file:
const mongoose = require("mongoose");


Now let’s defin
For our fruit model, we want to keep it simple. We’ll have two properties: name, which will be a string, and isReadyToEat, which will be a boolean indicating whether the fruit is ready to be eaten.
Here’s what this would look like in our fruit.js file:
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean,
});


Register the model
After defining our schema, the next step is to inform Mongoose about the collection in MongoDB that will use this schema for its documents. We achieve this by creating a model. A model in Mongoose serves as a constructor for creating new documents, and it also enforces the structure defined in the schema.
To create a model, we use the mongoose.model method. This method takes two arguments: the name of the model and the schema to apply to that model.
Here’s how we define the model for our fruit schema:
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean,
});

const Fruit = mongoose.model("Fruit", fruitSchema); // create model

Note: There is a convention to use a capital letter for database model names, so name your model Fruit, as opposed to fruit.


Export the model from the fruit.js file
Next, we want to export the Fruit model we just created, so that the rest of our application has access to it.
The Fruit model is what we will use to perform CRUD on the collection.
module.exports = Fruit;


Import the model into server.js
Let’s integrate the Fruit model into our server.js. This is important because the routes we define in server.js will need to use this model to interact with our MongoDB database. To do this, we’ll add a require statement for our model in server.js. It’s crucial to ensure that this require happens after we establish a connection to our MongoDB instance. This way, our model can effectively interact with the database once it’s connected.
Here’s how we can include the Fruit model in server.js:

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

Import the Fruit model
const Fruit = require("./models/fruit.js");

With this addition, we’re ready to use our Fruit model in the 
request handling functions defined in our express routes. 
This setup will allow us to perform database operations like 
creating, reading, updating, and deleting fruit documents in MongoDB.


*/