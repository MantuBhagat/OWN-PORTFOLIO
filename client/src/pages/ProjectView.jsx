import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const deleteProject = () => {
    axios
      .delete(`http://localhost:5000/api/projects/${id}`)
      .then(() => navigate("/projects"))
      .catch((err) => console.error(err));
  };

  const handleUpdate = () => {
    // Navigate to update form or inline update
    navigate(`/projects/update/${id}`);
  };

  return project ? (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="mt-2">{project.description}</p>
      <img src={project.imageUrl} alt={project.title} className="mt-4" />
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleUpdate}
          className="bg-yellow-500 px-4 py-2 rounded"
        >
          Update
        </button>
        <button
          onClick={deleteProject}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ProjectView;
