const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: { type: String, required: true, trim: true, lowercase: true },
    passwordHash: { type: String, required: true },
    isAdmin: { type: String, default: false },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
