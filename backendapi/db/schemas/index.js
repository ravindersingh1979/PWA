const { default: mongoose } = require("mongoose");
const courseSchema = require("./courseSchema");

var db = {};

db.courseModel = mongoose.model("courses", courseSchema, "courses");

module.exports = db;
