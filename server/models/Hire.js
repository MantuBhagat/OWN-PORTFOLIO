import mongoose from "mongoose";

const hireSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      
    },
    project_type: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    timeline: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

export default mongoose.model("Hire", hireSchema);
