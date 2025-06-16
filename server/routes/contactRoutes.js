import express from "express";
import Contact from "../models/Contact.js";
const router = express.Router();

// Route to handle contact form submission
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create a new contact entry
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact entry to the database
    await newContact.save();

    // Respond with success message
    res.status(201).json({ message: "Contact form submitted successfully." });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Export the router
export default router;
