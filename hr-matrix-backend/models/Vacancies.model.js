const { Schema, model } = require("mongoose");

const vacancySchema = new Schema(
  {
    positionTitle: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    applicants: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    publication: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Vacancy = model("Vacancy", vacancySchema);
module.exports = Vacancy;

// const { Schema, model, Types } = require("mongoose");

// const vacancySchema = new Schema(
//   {
//     positionTitle: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     location: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     applicants: [
//       {
//         type: Types.ObjectId,
//         ref: 'Applicant'  
//       }
//     ],
//     status: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     publication: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Vacancy = model("Vacancy", vacancySchema);
// module.exports = Vacancy;
