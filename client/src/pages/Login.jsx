import React, { useState } from "react";
import FloatingInput from "../components/FloatingInput";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("LOGIN DATA:", form);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4"
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome back</h2>

        <form onSubmit={handleSubmit}>
          <FloatingInput
            label="your@gmail.com"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <FloatingInput
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Login
          </motion.button>

          <div className="mt-4 text-center text-sm">
            <Link to="/forgot-password" className="text-orange-600">
              Forgot Password?
            </Link>
          </div>

          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-orange-600">
              Register
            </Link>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
