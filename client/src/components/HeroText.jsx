import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiHandWavingThin } from "react-icons/pi";

export default function HeroTextFlex() {
  const roles = ["Product Designer", "Web Developer", "UX & UI Designer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // Change role every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-6xl md:text-8xl md:text-left pt-14 pb-28 flex flex-col justify-center  px-6 md:px-0">
      <span className="flex items-center gap-2 border rounded-full px-3 py-2 text-sm bg-orange-100 text-orange-600 w-fit mx-auto md:mx-0 mb-4">
        Hello! <PiHandWavingThin />
      </span>
      <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-800 flex items-center justify-center md:justify-start gap-3">
        I'm <span className="text-orange-500">Mantu</span>
      </h1>
      <div className="text-4xl md:text-6xl font-light mb-4">
        <AnimatePresence>
          <motion.span
            key={roles[index]}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-8xl absolute z-40 font-semibold block"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
