import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-white px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="text-9xl font-bold text-purple-600"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-3xl font-semibold text-gray-800 mt-4"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Page Not Found
      </motion.h2>

      <p className="text-gray-600 mt-2 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-all"
      >
        <FaArrowLeft />
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
