import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/ProfilePic.jpg";
const Hero = () => {
  const bubbles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 50 + 20,
  }));

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 inset-0">
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute bg-blue-500 opacity-20 rounded-full"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: ` ${bubble.x}%`,
                top: ` ${bubble.y}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <div className="text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <img
              src={profile} // Replace with your avatar URL
              alt="Avatar"
              className="w-32 h-32 rounded-full mx-auto shadow-lg"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-mono text-purple-600 font-semibold mb-4"
          >
            Mantu Kumar Bhagat
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl font-semibold md:text-2xl mb-6"
          >
            Full Stack Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Crafting modern, responsive, and animated web applications with a
            passion for clean code and user experience.
          </motion.p>
          <div className="flex justify-center space-x-4">
            <motion
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link
                to="/projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </Link>
            </motion>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/917273088544?text=Hi%20I%20want%20to%20hire%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
            >
              💬 Chat on WhatsApp
            </motion.a>

            <motion
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link to="/Githuh"></Link>
            </motion>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-800 hover:text-gray-600 transition-colors"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/mantu-kumar-bhagat-8b6a2b1b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-700 hover:text-blue-900 transition-colors"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Hero;
