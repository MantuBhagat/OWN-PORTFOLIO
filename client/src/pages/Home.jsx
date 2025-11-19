import Hero from "../components/Hero";
import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="dark:bg-black bg-slate-50"
    >
      <Hero />
      {/* <About />
      <Projects />
      <Skills />
      <Contact /> */}
    </motion.div>
  );
};

export default Home;
