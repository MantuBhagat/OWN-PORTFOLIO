import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Hireme = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project_type: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/hireme`, form);
      alert("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        project_type: "",
        budget: "",
        timeline: "",
        description: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-2">Hire Me</h2>
      <p className="text-gray-600">
        Interested in working together? Fill out the form below to get in touch!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            required
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            required
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="block mb-4">
          <span className="text-gray-700">Project Type</span>
          <select
            name="project_type"
            className="w-full border border-gray-300 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.project_type}
            onChange={handleChange}
            required
          >
            <option value="" className="font-semibold text-blue-500">
              Select a Project Type
            </option>
            <option value="Web Development">Web development</option>
            <option value="Mobile App">Mobile App</option>
            <option value="UI/UI Design">UX/UI Design</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Budget</span>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Budget"
            required
            name="budget"
            value={form.budget}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Timeline</span>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Project Timeline"
            required
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
          />
        </label>
      </div>

      <label className="block mb-4">
        <span className="text-gray-700">Description</span>
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Describe your project"
          required
          name="description"
          value={form.description}
          onChange={handleChange}
        ></textarea>
      </label>

      <button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg transition"
      >
        Send Request
      </button>
    </motion.form>
  );
};

export default Hireme;
