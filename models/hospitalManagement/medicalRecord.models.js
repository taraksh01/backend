import mongoose from "mongoose";

const medicalReportSchema = new mongoose.Schema(
  {
    patientId: { type: String, required: true },
    doctorId: { type: String, required: true },
    description: { type: String, required: true },
    nextVisit: { type: String, required: true },
    hospital: { type: String, required: true },
  },
  { timestamps: true }
);

export const MedicalReport = mongoose.model(
  "MedicalReport",
  medicalReportSchema
);
