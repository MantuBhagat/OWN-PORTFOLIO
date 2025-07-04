import Projects from "../models/Projects.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Function to get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Projects.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to create a new project
export const createProject = async (req, res) => {
  const project = new Projects(req.body);
  try {
    const savedProject = await project.save();

    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to update an existing project
export const updateProject = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProject = await Projects.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to delete a project
export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProject = await Projects.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Exporting the functions to be used in routes
export default {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
