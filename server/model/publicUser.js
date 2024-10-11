const mongoose = require("mongoose");

const publicUserSchema = new mongoose.Schema({
  email: {
    type: String,
    // unique: [true, "Email already Exist"],
    required: [true, "Please enter email"],
  },
});
const publicUser = mongoose.model("publicUser", publicUserSchema);
module.exports = publicUser;