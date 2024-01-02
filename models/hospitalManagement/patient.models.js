import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "TransGender"],
    },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: false },
    bloodGroup: {
      type: String,
      required: true,
      enum: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    prescription: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["diagnosed", "discharged", "admitted"],
    },
    admittedAt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
