const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Models = require("./models.js");
const Names = Models.Name;

app.use(express.json());

// mongoose.connect(
//   "mongodb://localhost:27017/userData",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   },
//   console.log("mongo connected")
// );

mongoose.connect(
  "mongodb+srv://Teveta100:Motori2812@myflixdb-tr84f.mongodb.net/userData?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  console.log("mongo connected")
);

app.get("/", (req, res) => {
  res.send(" API is hosted on Heroku (and it seems to be working!) ");
});

app.get("/api/names", (req, res) => {
  Names.find()
    .then(names => res.json(names))
    .catch(function(err) {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

app.get("/api/names/:firstName", (req, res) => {
  Names.findOne({ firstName: req.params.firstName })
    .then(name => {
      res.json(name);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send(error);
    });
});

app.post("/api/names", (req, res) => {
  Names.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  })
    .then(names => {
      res.status(201).json(names);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send(error);
    });
});

app.delete("/api/names/:firstName", (req, res) => {
  Names.findOneAndRemove({ firstName: req.params.firstName })
    .then(() => {
      res.status(200).send(req.params.firstName + " has been deleted.");
    })
    .catch(error => {
      console.error(error);
      res.status(500).send(error);
    });
});

// PORT
const port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0", () => {
  console.log("Listening on port " + port);
});
