import express from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

// Route to get all projects
router.get("/projects", getProjects);
// Route to create a new project
router.post("/projects", createProject);
// Route to update an existing project
router.put("/projects/:id", updateProject);
// Route to delete a project
router.delete("projects/:id", deleteProject);

export default router;
