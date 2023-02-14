const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  courseName: { type: String },
  courseDescription: { type: String },
});
