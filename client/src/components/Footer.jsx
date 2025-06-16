import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 px-12 text-white py-6 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto relative text-center">
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} Mantu Kumar Bhagat. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 absolute bottom-0 left-30 transform -translate-x-1/2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-6 rounded-full bg-gray-800 hover:border-4 border-purple-600 transition duration-300 mt-4"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
