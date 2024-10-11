import mongoose from "mongoose";

const publicUserSchema = new mongoose.Schema({
  email: {
    type: String,
    // unique: [true, "Email already Exist"],
    required: [true, "Please enter email"],
  },
});
export const publicUser = mongoose.model("publicUser", publicUserSchema);
