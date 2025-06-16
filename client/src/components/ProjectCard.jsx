import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/projects") // Your backend endpoint
  //     .then((res) => console.log("Projects fetched:", res.data))
  //     .catch((err) => console.error("Error fetching projects:", err));
  // }, []);

  return (
    <div className="p-4 bg-white rounded shadow-md hover:shadow-lg transition">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
        )}
        <a
          href={project.link}
          className="text-blue-500 hover:underline mb-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              className="text-gray-800 hover:text-gray-600 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-1" />
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
