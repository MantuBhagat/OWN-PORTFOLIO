import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen p-6 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center mb-8">Contact me</h1>
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
