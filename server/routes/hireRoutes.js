import express from "express";
const router = express.Router();
import Hire from "../models/Hire.js";

router.post("/hireme", async (req, res) => {
  const { name, email, project_type, budget, timeline, description } = req.body;
  try {
    // Validate input
    if (
      !name ||
      !email ||
      !project_type ||
      !budget ||
      !timeline ||
      !description
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Create a new hire me entry
    const newHire = new Hire({
      name,
      email,
      project_type,
      budget,
      timeline,
      description,
    });
    await newHire.save();

    // Respond with success message
    res.status(200).json({ message: "Hire me form submitted successfully." });
  } catch (error) {
    console.error("Error saving hire me:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Export the router
export default router;
