import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import hireRoutes from "./routes/hireRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(
  cors({
    origin: "https://own-portfolio-psi-six.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api", contactRoutes);
app.use("/api", hireRoutes);
app.use("/api", projectRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
