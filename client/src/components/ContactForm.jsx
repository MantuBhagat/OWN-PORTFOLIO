import { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaCommentDots, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/contact`, form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      {/* Name */}
      <div className="flex items-center gap-3">
        <FaUser className="text-gray-600 text-xl" />
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email */}
      <div className="flex items-center gap-3">
        <FaEnvelope className="text-gray-600 text-xl" />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Message */}
      <div className="flex gap-3">
        <FaCommentDots className="text-gray-600 text-xl mt-2" />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg transition"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
