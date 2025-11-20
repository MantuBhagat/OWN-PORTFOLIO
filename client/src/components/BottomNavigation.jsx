import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <motion.div
      className="sticky rounded-full bottom-0 left-0 w-fit p-4 bg-orange-500 text-white shadow-md flex justify-around items-center h-16 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="">Get in touch</Link>
    </motion.div>
  );
};

export default BottomNavigation;
