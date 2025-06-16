import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen w-full mx-auto py-16 px-24"
    >
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
      <p className="text-lg leading-relaxed mt-4">
        I'm a passionate Full Stack Developer with experience in building modern
        web applications using React, Node.js, and more. I love creating
        intuitive and visually appealing interfaces that provide seamless user
        experiences.
      </p>

      <p className="mt-4">
        Apart from coding, I enjoy building digital tools, mentoring beginners,
        and sharing coding knowledge online.
      </p>
    </motion.section>
  );
};

export default About;
