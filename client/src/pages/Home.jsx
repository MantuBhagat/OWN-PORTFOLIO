import { motion } from "framer-motion";
import FeatureProjects from "../components/FeatureProjects";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col items-center justify-center gap-10"
    >
      <Hero />
      <FeatureProjects />
    </motion.div>
  );
};

export default Home;
