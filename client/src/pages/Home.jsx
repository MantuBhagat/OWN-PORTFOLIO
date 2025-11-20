import { motion } from "framer-motion";
import FeatureProjects from "../components/FeatureProjects";
import Hero from "../components/Hero";
import DeliveredProjects from "../components/DeliveredProjects";
import Testmonials from "../components/Testimonial";

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
      <DeliveredProjects />
      <Testmonials />
    </motion.div>
  );
};

export default Home;
