const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    phoneNo: {
      type: Number,
      required: true,
      unique: true
    },
    status: {
      type: String,
      required: true
    },
    report: {
      doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
      status: { type: String },
      date: { type: Date }
    }
  },
  {
    timestamps: true
  }
);

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
