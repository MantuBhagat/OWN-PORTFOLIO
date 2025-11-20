import React from "react";
import { motion } from "framer-motion";

const Notfound = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
      <p>
        The site configured at this address does not contain the requested file.
      </p>
      <a href="/" className="inline-block text-blue-500 hover:underline mt-6">
        Go to Home
      </a>
    </motion.div>
  );
};

export default Notfound;
