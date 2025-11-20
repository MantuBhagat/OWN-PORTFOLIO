import React from "react";
import { motion } from "framer-motion";
import HeroText from "./HeroText";
import profile from "../assets/ProfilePic.jpg";

const Hero = () => {
  return (
    <motion.div
      className="w-full h-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 p-6 md:p-12"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-1/2">
        <HeroText />
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={profile}
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-orange-500 shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
