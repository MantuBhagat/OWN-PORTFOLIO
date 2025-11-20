import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaRegUserCircle,
} from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter, FiDribbble } from "react-icons/fi";
import { SiUnicode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com" },
    { icon: <FiLinkedin />, url: "https://linkedin.com" },
    { icon: <FiTwitter />, url: "https://twitter.com" },
    { icon: <FiDribbble />, url: "https://dribbble.com" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 w-full mx-auto z-50 ${
        scrolled
          ? "bg-white"
          : "border-b rounded-b-3xl md:rounded-b-full border-gray-400 bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="container w-full mx-auto px-6 md:px-12 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex-1 justify-center items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center w-fit gap-2  ">
              <h2 className="text-2xl font-bold flex items-center">
                M
                <span className="bg-gray-800 rounded-r-full px-2 text-white">
                  B
                </span>
              </h2>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative px-3 py-2 text-md font-bold transition-colors ${
                      location.pathname === link.path
                        ? " text-purple-600 "
                        : "text-black hover:text-purple-600"
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.span
                        layoutId="activeNavLink"
                        className="absolute left-0 bottom-0 w-full h-1 dark:bg-purple-600 bg-purple-600"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sign in  */}
            <div className="">
              <Link
                to="/signin"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
              >
                <FaRegUserCircle />
                Sign In
              </Link>
            </div>

            {/* Contact button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/hireme"
                className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/30 transition-shadow"
              >
                Hire Me
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-black "
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full  transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden   overflow-hidden"
          >
            <div className="container mx-auto px-6 pb-4">
              <ul className="flex flex-col space-y-4 py-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? "dark:bg-gray-800 bg-gray-100 dark:text-purple-400 text-purple-600"
                          : " text-gray-700 hover:text-white hover:dark:bg-gray-100 hover:bg-gray-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-4 border-t dark:border-gray-800 border-gray-200">
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="p-2 rounded-full text-gray-700 dark:hover:bg-gray-800 hover:bg-gray-200 hover:text-white transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6"
                >
                  <Link
                    to="/hireme"
                    className="block w-full text-center px-4 py-3 text-sm font-medium rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Hire Me
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
