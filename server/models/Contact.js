import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: true,
      minlength: 10, // Minimum length for the message
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);
export default mongoose.model("Contact", contactSchema);
