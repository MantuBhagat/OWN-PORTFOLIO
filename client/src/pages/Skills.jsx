const Skills = () => {
  const skillsData = [
    { title: "HTML", progress: "90%" },
    { title: "CSS", progress: "85%" },
    { title: "MONGODB", progress: "80%" },
    { title: "REACT", progress: "75%" },
    { title: "NODEJS", progress: "70%" },
    { title: "EXPRESS", progress: "65%" },
    { title: "JAVASCRIPT", progress: "80%" },
    { title: "TAILWIND CSS", progress: "90%" },
    { title: "GIT", progress: "60%" },
  ];

  return (
    <div className="w-full min-h-screen px-8 pt-20 bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillsData.map((skill) => (
          <div key={skill.title} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{skill.title}</h2>
            <p>{skill.progress}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
