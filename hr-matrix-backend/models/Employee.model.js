const { Schema, model } = require("mongoose");

const employeeSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    employmentType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Intern"],
      default: "Full-time",
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    img: { type: String, trim: true, default: "https://github.com/shadcn.png" },
    salary: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

const Employee = model("Employee", employeeSchema);
module.exports = Employee;
