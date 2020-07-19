const mongoose = require("mongoose");

let nameSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true }
});

let Name = mongoose.model("Name", nameSchema, "Names"); //Name will create collection called "db.names"

module.exports.Name = Name;
