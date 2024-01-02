import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ["male", "female"] },
    phone: { type: String, required: true },
    email: { type: String, required: false },
    address: { type: String, required: true },
    specialization: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: Number, required: true, default: 0 },
    salary: { type: Number, required: true },
    worksAt: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
